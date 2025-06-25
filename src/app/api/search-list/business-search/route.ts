import { NextRequest } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';



export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const pincode = searchParams.get('pincode');
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const lang = searchParams.get('lang') || 'en';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '0');

  if (!pincode) {
    return Response.json({ success: false, error: 'Pincode is required' }, { status: 400 });
  }

  try {
    await dbConnect();
    const query: Record<string, unknown> = { pincode };

    if (category) query['category.en'] = { $regex: `^${category}$`, $options: 'i' };
    if (subcategory) query[`subcategory.${lang}`] = { $regex: `(^|,\\s*)${subcategory}(\\s*,|$)`, $options: 'i' };

    const skip = limit > 0 ? (page - 1) * limit : 0;
    const totalCount = await DistrictBusiness.countDocuments(query);
    const raw = await DistrictBusiness.find(query).skip(skip).limit(limit).lean();

    const businesses = raw.map((doc) => ({
      id: doc._id.toString(),
      name: (doc.name as Record<string, string>)?.[lang] || (doc.name as Record<string, string>)?.en || '',
      rating: doc.rating || 0,
      totalRatings: doc.totalRatings || 0,
      address: (doc.address as Record<string, string>)?.[lang] || (doc.address as Record<string, string>)?.en || '',
      phone: doc.phone,
      tags: (doc.tags as Record<string, string[]>)?.[lang] || [],
      hasWhatsApp: doc.hasWhatsApp,
      hasEnquiry: doc.hasEnquiry,
      isTrusted: doc.isTrusted,
      isVerified: doc.isVerified,
      isPopular: doc.isPopular,
      category: doc.category?.en || '',
      subcategory: (doc.subcategory as Record<string, string>)?.[lang] || '',
      pincode: doc.pincode,
      city: (doc.city as Record<string, string>)?.[lang] || '',
    }));

    return Response.json({ success: true, data: { businesses, totalCount } });
  } catch (e) {
    const error = e instanceof Error ? e.message : 'Unknown error';
    console.error('Search error:', error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
