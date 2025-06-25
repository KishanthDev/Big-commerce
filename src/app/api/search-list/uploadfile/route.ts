// app/api/search-list/uploadfile/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { importCsv } from '@/scripts/importCsv';

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing to handle multipart form data
  },
};

export async function POST(request: NextRequest) {
  try {

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      return NextResponse.json({ error: 'Only CSV files are allowed' }, { status: 400 });
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Process the CSV file
    const result = await importCsv(buffer) as { insertedCount: number; failedCount: number };

    return NextResponse.json({
      message: `Successfully imported ${result.insertedCount} records`,
      failedCount: result.failedCount,
    }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}