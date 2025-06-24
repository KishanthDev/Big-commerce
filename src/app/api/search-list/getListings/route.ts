import { NextRequest } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';
import { Document } from 'mongoose';

interface DistrictBusinessDoc extends Document {
  _id: string;
  name: Record<string, string>;
  address: Record<string, string>;
  city: Record<string, string>;
  category: Record<string, string>;
  subcategory: Record<string, string>;
  tags: Record<string, string[]>;
  rating: number;
  totalRatings: number;
  phone: string;
  hasWhatsApp: boolean;
  hasEnquiry: boolean;
  isTrusted: boolean;
  isVerified: boolean;
  isPopular: boolean;
  pincode: string;
  timestamp: Date;
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const lang = searchParams.get('lang') || 'en';
    const pincode = searchParams.get('pincode');
    const query = searchParams.get('query');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const name = searchParams.get('name');
    const address = searchParams.get('address');
    const city = searchParams.get('city');

    if (!pincode) {
      return Response.json({ success: false, error: 'Pincode is required' }, { status: 400 });
    }

    const dbQuery: Record<string, unknown> = { pincode };

    if (query) {
      dbQuery.$or = [
        { [`name.${lang}`]: { $regex: query, $options: 'i' } },
        { [`category.en`]: { $regex: query, $options: 'i' } },
        { [`tags.${lang}`]: { $regex: query, $options: 'i' } },
        { [`address.${lang}`]: { $regex: query, $options: 'i' } },
        { [`city.${lang}`]: { $regex: query, $options: 'i' } },
      ];
    }

    if (category) dbQuery[`category.en`] = { $regex: category, $options: 'i' };
    if (tag) dbQuery[`tags.${lang}`] = { $regex: tag, $options: 'i' };
    if (name) dbQuery[`name.${lang}`] = { $regex: name, $options: 'i' };
    if (address) dbQuery[`address.${lang}`] = { $regex: address, $options: 'i' };
    if (city) dbQuery[`city.${lang}`] = { $regex: city, $options: 'i' };

    const listings = await DistrictBusiness.find(dbQuery).lean();

    const formatted = (listings as unknown as DistrictBusinessDoc[]).map((listing) => ({
      _id: String(listing._id),
      name: listing.name?.[lang] || listing.name?.en || '',
      address: listing.address?.[lang] || listing.address?.en || '',
      city: listing.city?.[lang] || listing.city?.en || '',
      category: listing.category?.[lang] || '',
      subcategory: listing.subcategory?.[lang] || listing.subcategory?.en || '',
      tags: listing.tags?.[lang] || listing.tags?.en || [],
      rating: listing.rating,
      totalRatings: listing.totalRatings,
      phone: listing.phone,
      hasWhatsApp: listing.hasWhatsApp,
      hasEnquiry: listing.hasEnquiry,
      isTrusted: listing.isTrusted,
      isVerified: listing.isVerified,
      isPopular: listing.isPopular,
      pincode: listing.pincode,
      timestamp: listing.timestamp,
    }));

    return Response.json({ success: true, data: formatted });
  } catch (err: unknown) {
    const error = err as Error;
    return Response.json(
      { success: false, error: 'Server error', message: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
