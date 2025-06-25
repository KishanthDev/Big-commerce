import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import DistrictBusiness from '@/models/DistrictBusiness';

interface BusinessData {
  name: string;
  rating: string;
  totalRatings: string;
  address: string;
  phone: string;
  tags: string[];
  hasWhatsApp: boolean;
  hasEnquiry: boolean;
  isTrusted: boolean;
  isVerified: boolean;
  isPopular: boolean;
  category: string;
  subcategory: string;
  pincode: string;
  city: string;
}

const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[6-9]\d{9}(,\s*[6-9]\d{9})*$/;
  return phoneRegex.test(phone.trim().replace(/\s+/g, ''));
};

const validatePincode = (pincode: string): boolean => {
  const pincodeRegex = /^\d{6}$/;
  return pincodeRegex.test(pincode.trim());
};

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const data: BusinessData = await req.json();

    if (!data.name || !data.address || !data.phone || !data.category || !data.subcategory || !data.pincode) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!validatePhoneNumber(data.phone)) {
      return NextResponse.json({
        error: 'Invalid phone number. Must be 10-digit Indian numbers starting with 6-9, optionally separated by commas.',
      }, { status: 400 });
    }

    if (!validatePincode(data.pincode)) {
      return NextResponse.json({ error: 'Invalid pincode. Must be a 6-digit number.' }, { status: 400 });
    }

    const existingBusiness = await DistrictBusiness.findOne({ phone: data.phone });
    if (existingBusiness) {
      return NextResponse.json({ error: 'A business with this phone number already exists' }, { status: 400 });
    }

    const business = {
      name: {
        en: data.name.trim(),
        ta: '',
        hi: '',
        ka: '',
      },
      rating: parseFloat(data.rating) || 0,
      totalRatings: parseInt(data.totalRatings) || 0,
      address: {
        en: data.address.trim(),
        ta: '',
        hi: '',
        ka: '',
      },
      phone: data.phone.trim(),
      tags: {
        en: Array.isArray(data.tags) ? data.tags.map((tag) => tag.trim()) : [],
        ta: [],
        hi: [],
        ka: [],
      },
      hasWhatsApp: !!data.hasWhatsApp,
      hasEnquiry: !!data.hasEnquiry,
      isTrusted: !!data.isTrusted,
      isVerified: !!data.isVerified,
      isPopular: !!data.isPopular,
      category: {
        en: data.category.trim(),
        ta: '',
        hi: '',
        ka: '',
      },
      subcategory: {
        en: data.subcategory.trim(),
        ta: '',
        hi: '',
        ka: '',
      },
      pincode: data.pincode.trim(),
      city: {
        en: data.city ? data.city.trim() : '',
        ta: '',
        hi: '',
        ka: '',
      },
    };

    const inserted = await DistrictBusiness.create(business);

    return NextResponse.json({
      message: 'Business data saved successfully',
      data: inserted,
    });
  } catch {
    return NextResponse.json({ error: 'Server error occurred while saving the data' }, { status: 500 });
  }
}
