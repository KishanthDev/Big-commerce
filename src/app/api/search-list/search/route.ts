import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';
import { NextRequest, NextResponse } from 'next/server';
import { Types } from 'mongoose';

// Define the MongoDB query type for DistrictBusiness
interface BusinessQuery {
  pincode: string;
  $or?: Array<{
    [key: string]: { $regex: string; $options?: string };
  }>;
}

// Define the result document type
interface ResultDoc {
  _id: Types.ObjectId;
  name: string;
  category: string;
  tags?: string[];
  city: string;
  pincode: string;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    const pincode = searchParams.get('pincode');

    if (!pincode) {
      return NextResponse.json({ success: false, error: 'Pincode parameter is required' }, { status: 400 });
    }

    await dbConnect();
    console.log('MongoDB connected for search');

    const pincodeExists = await DistrictBusiness.findOne({ pincode }).lean();
    if (!pincodeExists) {
      return NextResponse.json({ success: false, error: `Pincode ${pincode} not found in the database` }, { status: 404 });
    }

    const dbQuery: BusinessQuery = { pincode };

    if (query) {
      dbQuery.$or = [
        { name: { $regex: `^${query}` } },
        { category: { $regex: `^${query}`, $options: 'i' } },
        { tags: { $regex: `^${query}`, $options: 'i' } },
        { city: { $regex: `^${query}`, $options: 'i' } },
      ];
    }

    const results = await DistrictBusiness.find(dbQuery)
      .select('name category tags city pincode')
      .limit(20)
      .lean<ResultDoc[]>();

    console.log(`Search found ${results.length} results for pincode ${pincode}`);

    const businesses = results.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
      category: doc.category,
      type: 'business',
      pincode: doc.pincode,
    }));

    const categories = [...new Set(results.map((doc) => doc.category).filter(Boolean))].map((name) => ({
      id: name,
      name,
      type: 'category',
      pincode,
    }));

    const tags = [...new Set(results.flatMap((doc) => doc.tags || []).filter(Boolean))].map((name) => ({
      id: name,
      name,
      type: 'tag',
      pincode,
    }));

    const cities = [...new Set(results.map((doc) => doc.city).filter(Boolean))].map((name) => ({
      id: name,
      name,
      type: 'city',
      pincode,
    }));

    const names = [...new Set(results.map((doc) => doc.name).filter(Boolean))].map((name) => ({
      id: name,
      name,
      type: 'name',
      pincode,
    }));

    return NextResponse.json({
      success: true,
      data: {
        businesses,
        categories,
        tags,
        cities,
        names,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Search error:', errorMessage);
    return NextResponse.json({
      success: false,
      error: 'Failed to perform search',
      message: errorMessage,
    }, { status: 500 });
  }
}