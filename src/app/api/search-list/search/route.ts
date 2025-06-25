import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness, { IDistrictBusiness } from '@/models/DistrictBusiness';

interface SearchResult {
  id: string;
  name: string;
  type: 'business' | 'category' | 'tag' | 'city' | 'name';
  pincode: string;
  category?: string;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pincode = searchParams.get('pincode');
  const lang = searchParams.get('lang') || 'en';
  const q = searchParams.get('q');

  if (!pincode) {
    return NextResponse.json({ success: false, error: 'Pincode parameter is required' }, { status: 400 });
  }

  try {
    await dbConnect();
    console.log('MongoDB connected for search');

    const pincodeExists: IDistrictBusiness | null = await DistrictBusiness.findOne({ pincode }).lean();
    if (!pincodeExists) {
      return NextResponse.json({ success: false, error: `Pincode ${pincode} not found in the database` }, { status: 404 });
    }

    const dbQuery: { pincode: string; $or?: Record<string, unknown>[] } = { pincode };

    if (q) {
      const regex = new RegExp(q, 'i');
      dbQuery.$or = [
        { [`name.${lang}`]: regex },
        { [`category.${lang}`]: regex },
        { [`tags.${lang}`]: regex },
        { [`subcategory.${lang}`]: regex },
        { [`city.${lang}`]: regex },
      ];
    }

    const results = await DistrictBusiness.find(dbQuery)
      .select('name category tags city pincode subcategory')
      .limit(20)
      .lean();

    console.log(`Search found ${results.length} results for pincode ${pincode} and query "${q}"`);

    const getLocalizedString = (field: Record<string, string> | undefined): string =>
      field?.[lang] || field?.['en'] || '';

    const getLocalizedArray = (field: Record<string, string[]> | undefined): string[] =>
      Array.isArray(field?.[lang]) ? field![lang]! : [];

    const businesses: SearchResult[] = results.map((doc) => ({
      id: doc._id.toString(),
      name: getLocalizedString(doc.name),
      category: getLocalizedString(doc.category),
      type: 'business',
      pincode: doc.pincode,
    }));

    const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

    const categories = unique(
      results.map((doc) => getLocalizedString(doc.category)).filter(Boolean)
    ).map((name) => ({
      id: name,
      name,
      type: 'category' as const,
      pincode,
    }));

    const tags = unique(
      results.flatMap((doc) => getLocalizedArray(doc.tags)).filter(Boolean)
    ).map((name) => ({
      id: name,
      name,
      type: 'tag' as const,
      pincode,
    }));

    const cities = unique(
      results.map((doc) => getLocalizedString(doc.city)).filter(Boolean)
    ).map((name) => ({
      id: name,
      name,
      type: 'city' as const,
      pincode,
    }));

    const names = unique(
      results.map((doc) => getLocalizedString(doc.name)).filter(Boolean)
    ).map((name) => ({
      id: name,
      name,
      type: 'name' as const,
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
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to perform search',
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
