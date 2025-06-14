// src/app/api/search-list/search/route.ts

import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';
import { NextRequest, NextResponse } from 'next/server';

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

    const dbQuery: any = { pincode };

    if (query) {
      try {
        dbQuery.$text = { $search: `\"${query}\" name:${query}` };
      } catch (error) {
        dbQuery.$or = [
          { name: { $regex: query, $options: 'i' } },
          { category: { $regex: query, $options: 'i' } },
          { tags: { $regex: query, $options: 'i' } },
          { city: { $regex: query, $options: 'i' } },
          { address: { $regex: query, $options: 'i' } },
        ];
      }
    }

    if (category) dbQuery.category = { $regex: `^${category}$`, $options: 'i' };
    if (tag) dbQuery.tags = { $regex: tag, $options: 'i' };
    if (name) dbQuery.name = { $regex: name, $options: 'i' };
    if (address) dbQuery.address = { $regex: address, $options: 'i' };
    if (city) dbQuery.city = { $regex: `^${city}$`, $options: 'i' };
    if (sortByVerified === 'true') dbQuery.isVerified = true;
    if (sortByTrusted === 'true') dbQuery.isTrusted = true;
    if (sortByRating) {
      const ratingValue = parseFloat(sortByRating);
      if (!isNaN(ratingValue)) {
        dbQuery.rating = { $gte: ratingValue };
      }
    }

    let sortOptions: any = {};
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

    const listings = await DistrictBusiness.find(dbQuery).sort(sortOptions).limit(50).lean();

    if (!listings.length) {
      return NextResponse.json({
        success: false,
        message: `No listings found for pincode ${pincode}`,
        data: [],
      });
    }

    const formattedListings = listings.map((listing) => ({
      _id: (listing._id as string | number | { toString(): string }).toString(),
      name: listing.name,
      initial: listing.initial,
      imageUrl: listing.imageUrl,
      rating: listing.rating,
      totalRatings: listing.totalRatings,
      address: listing.address,
      distance: listing.distance,
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
      timestamp: listing.timestamp,
    }));

    return NextResponse.json({
      success: true,
      data: formattedListings,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch listings',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
