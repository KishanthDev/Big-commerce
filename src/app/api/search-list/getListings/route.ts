import dbConnect from '@/lib/dbConnect';
import DistrictBusiness, { IDistrictBusiness } from '@/models/DistrictBusiness';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

// Define the MongoDB query type
interface BusinessQuery {
  pincode: string;
  $text?: { $search: string };
  $or?: Array<{ [key: string]: { $regex: string; $options?: string } }>;
  category?: { $regex: string; $options?: string };
  tags?: { $regex: string; $options?: string };
  name?: { $regex: string; $options?: string };
  address?: { $regex: string; $options?: string };
  city?: { $regex: string; $options?: string };
  isVerified?: boolean;
  isTrusted?: boolean;
  rating?: { $gte: number };
}

// Define the sort options type
interface SortOptions {
  [key: string]: 1 | -1 | { $meta: 'textScore' };
}

// Define the lean result type (extends the model interface)
interface LeanDistrictBusiness extends Omit<IDistrictBusiness, '_id'> {
  _id: Types.ObjectId;
  imageUrl?: string | null; // Include imageUrl as optional
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const name = searchParams.get('name');
    const address = searchParams.get('address');
    const city = searchParams.get('city');
    const pincode = searchParams.get('pincode');
    const sort = searchParams.get('sort');
    const sortByVerified = searchParams.get('sortByVerified');
    const sortByTrusted = searchParams.get('sortByTrusted');
    const sortByRating = searchParams.get('sortByRating');

    if (!pincode) {
      return NextResponse.json({ success: false, error: 'Pincode parameter is required' }, { status: 400 });
    }

    const pincodeExists = await DistrictBusiness.findOne({ pincode }).lean();
    if (!pincodeExists) {
      return NextResponse.json({ success: false, error: `Pincode ${pincode} not found in the database` }, { status: 404 });
    }

    const dbQuery: BusinessQuery = { pincode };

    if (query) {
      // Sanitize query to prevent regex injection
      const sanitizedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      try {
        dbQuery.$text = { $search: `\"${sanitizedQuery}\" name:${sanitizedQuery}` };
      } catch {
        // If text search fails, fall back to regex
        dbQuery.$or = [
          { name: { $regex: sanitizedQuery, $options: 'i' } },
          { category: { $regex: sanitizedQuery, $options: 'i' } },
          { tags: { $regex: sanitizedQuery, $options: 'i' } },
          { city: { $regex: sanitizedQuery, $options: 'i' } },
          { address: { $regex: sanitizedQuery, $options: 'i' } },
        ];
      }
    }

    if (category) dbQuery.category = { $regex: `^${category.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' };
    if (tag) dbQuery.tags = { $regex: tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
    if (name) dbQuery.name = { $regex: name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
    if (address) dbQuery.address = { $regex: address.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
    if (city) dbQuery.city = { $regex: `^${city.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' };
    if (sortByVerified === 'true') dbQuery.isVerified = true;
    if (sortByTrusted === 'true') dbQuery.isTrusted = true;
    if (sortByRating) {
      const ratingValue = parseFloat(sortByRating);
      if (!isNaN(ratingValue)) {
        dbQuery.rating = { $gte: ratingValue };
      }
    }

    let sortOptions: SortOptions = {};
    if (sort === 'rating') {
      sortOptions.rating = -1;
    } else if (sort === 'totalRatings-desc') {
      sortOptions.totalRatings = -1;
    } else if (sort === 'totalRatings-asc') {
      sortOptions.totalRatings = 1;
    } else if (query) {
      sortOptions = { score: { $meta: 'textScore' } };
    } else {
      sortOptions.createdAt = -1;
    }

    const listings = await DistrictBusiness.find(dbQuery)
      .sort(sortOptions)
      .limit(50)
      .lean<LeanDistrictBusiness[]>();

    if (!listings.length) {
      return NextResponse.json({
        success: false,
        message: `No listings found for pincode ${pincode}`,
        data: [],
      });
    }

    const formattedListings = listings.map((listing) => ({
      _id: listing._id.toString(),
      name: listing.name,
      imageUrl: listing.imageUrl ?? null,
      rating: listing.rating,
      totalRatings: listing.totalRatings,
      address: listing.address,
      phone: listing.phone,
      tags: listing.tags,
      hasWhatsApp: listing.hasWhatsApp,
      hasEnquiry: listing.hasEnquiry,
      isTrusted: listing.isTrusted,
      isVerified: listing.isVerified,
      isPopular: listing.isPopular,
      category: listing.category,
      city: listing.city,
      pincode: listing.pincode,
    }));

    return NextResponse.json({
      success: true,
      data: formattedListings,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch listings',
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}