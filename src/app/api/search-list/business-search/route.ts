import { NextRequest } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness, { IDistrictBusiness } from '@/models/DistrictBusiness';

interface SearchResult {
  id: string;
  name: string;
  rating: number;
  totalRatings: number;
  address: string;
  phone: string;
  tags: string[];
  hasWhatsApp: boolean;
  hasEnquiry: boolean;
  isTrusted: boolean;
  isVerified: boolean;
  isPopular: boolean;
  category: string;
  subcategory?: string;
  pincode: string;
  city?: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pincode = searchParams.get('pincode');
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  if (!pincode) {
    return Response.json(
      { success: false, error: 'Pincode parameter is required' },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    console.log('MongoDB connected for business search');

    const pincodeExists: IDistrictBusiness | null = await DistrictBusiness.findOne({
      pincode,
    }).lean();

    if (!pincodeExists) {
      return Response.json(
        {
          success: false,
          error: `Pincode ${pincode} not found in the database`,
        },
        { status: 404 }
      );
    }

    const dbQuery: {
      pincode: string;
      category?: { $regex: string; $options: string };
      subcategory?: { $regex: string; $options: string };
    } = { pincode };

    if (category) {
      dbQuery.category = { $regex: `^${category}$`, $options: 'i' };
    }

    if (subcategory) {
      dbQuery.subcategory = {
        $regex: `(^|,\\s*)${subcategory}(\\s*,|$)`,
        $options: 'i',
      };
    }

    const pageNumber = parseInt(page || '1', 10);
    const pageSize = parseInt(limit || '0', 10);
    const skip = pageSize > 0 ? (pageNumber - 1) * pageSize : 0;

    const totalCount = await DistrictBusiness.countDocuments(dbQuery);

    let query = DistrictBusiness.find(dbQuery).lean();
    if (pageSize > 0) {
      query = query.skip(skip).limit(pageSize);
    }

    const results: IDistrictBusiness[] = await query;

    const businesses: SearchResult[] = results.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name || '',
      rating: doc.rating || 0,
      totalRatings: doc.totalRatings || 0,
      address: doc.address || '',
      phone: doc.phone || '',
      tags: doc.tags || [],
      hasWhatsApp: doc.hasWhatsApp || false,
      hasEnquiry: doc.hasEnquiry || false,
      isTrusted: doc.isTrusted || false,
      isVerified: doc.isVerified || false,
      isPopular: doc.isPopular || false,
      category: doc.category || '',
      subcategory: doc.subcategory || undefined,
      pincode: doc.pincode || '',
      city: doc.city || undefined,
    }));

    return Response.json(
      {
        success: true,
        data: {
          businesses,
          totalCount,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown server error';
    console.error('Business search failed:', errorMessage);
    return Response.json(
      {
        success: false,
        error: 'Failed to perform business search',
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
