import { NextRequest } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';

interface LocalizedString {
  [lang: string]: string;
}

interface DistrictBusinessDoc {
  _id: string;
  name: LocalizedString;
  category: LocalizedString;
  tags?: { [lang: string]: string[] };
  city?: LocalizedString;
  pincode: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pincode = searchParams.get('pincode');
  const lang = searchParams.get('lang') || 'en';

  if (!pincode) {
    return Response.json(
      { success: false, error: 'Pincode parameter is required' },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    console.log('MongoDB connected for search');

    const pincodeExists = await DistrictBusiness.findOne({ pincode }).lean();
    if (!pincodeExists) {
      return Response.json(
        { success: false, error: `Pincode ${pincode} not found in the database` },
        { status: 404 }
      );
    }

    const dbQuery = { pincode };
    const results = await DistrictBusiness.find(dbQuery)
      .select(`name category tags city pincode`)
      .limit(20)
      .lean<DistrictBusinessDoc[]>();

    console.log(`Search found ${results.length} results for pincode ${pincode}`);

    const businesses = results.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name?.[lang] || doc.name?.en || '',
      category: doc.category?.en || '',
      type: 'business' as const,
      pincode: doc.pincode,
    }));

    const categories = [...new Set(results
      .map((doc) => doc.category?.en)
      .filter(Boolean)
    )].map((name) => ({
      id: name!,
      name: name!,
      type: 'category' as const,
      pincode,
    }));

    const tags = [...new Set(results
      .flatMap((doc) =>
        Array.isArray(doc.tags?.[lang]) ? doc.tags[lang] : []
      )
      .filter(Boolean)
    )].map((name) => ({
      id: name!,
      name: name!,
      type: 'tag' as const,
      pincode,
    }));

    const cities = [...new Set(results
      .map((doc) => doc.city?.[lang])
      .filter(Boolean)
    )].map((name) => ({
      id: name!,
      name: name!,
      type: 'city' as const,
      pincode,
    }));

    const names = [...new Set(results
      .map((doc) => doc.name?.[lang])
      .filter(Boolean)
    )].map((name) => ({
      id: name!,
      name: name!,
      type: 'name' as const,
      pincode,
    }));

    return Response.json({
      success: true,
      data: { businesses, categories, tags, cities, names },
    });
  } catch (err: unknown) {
    const error = err as Error;
    return Response.json(
      { success: false, error: 'Server error', message: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
