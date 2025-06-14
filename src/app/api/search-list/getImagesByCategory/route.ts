import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

// In-memory cache
const imageCache = new Map();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

function normalizeCategory(category: string) {
  const decoded = decodeURIComponent(category);
  return decoded
    .replace(/near me/gi, '')
    .replace(/[^\w\s-]/g, '')
    .trim();
}

async function withRetry(fn: () => Promise<any>, retries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      if (attempt === retries) throw error;
      console.warn(`Attempt ${attempt} failed: ${error.message}. Retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

async function searchImages(category: string) {
  const normalized = normalizeCategory(category);
  console.log(`Searching for: "${normalized}"`);

  if (imageCache.has(normalized)) {
    console.log(`Cache hit for "${normalized}"`);
    return imageCache.get(normalized);
  }

  const folderPaths = [
    `Pictures/${normalized}`,
    `Pictures/${normalized.replace(/ /g, '_')}`,
    `Pictures/${normalized.replace(/ /g, '').toLowerCase()}`,
    `Pictures/${normalized.replace(/ /g, '_').toLowerCase()}`,
    normalized,
    'Pictures/Generic',
  ];

  const uniqueFolderPaths = [...new Set(folderPaths)];
  const attemptedPaths: string[] = [];

  for (const path of uniqueFolderPaths) {
    attemptedPaths.push(path);
    try {
      console.log(`Trying path: "${path}"`);

      const folderResult = await withRetry(() =>
        cloudinary.search.expression(`folder="${path}"`).max_results(50).execute()
      );

      if (folderResult.resources?.length > 0) {
        imageCache.set(normalized, folderResult.resources);
        return folderResult.resources;
      }

      const prefixResult = await withRetry(() =>
        cloudinary.api.resources({
          type: 'upload',
          prefix: path,
          max_results: 50,
        })
      );

      if (prefixResult.resources?.length > 0) {
        imageCache.set(normalized, prefixResult.resources);
        return prefixResult.resources;
      }
    } catch (error: any) {
      console.error(`Search failed for "${path}":`, error.message);
    }
  }

  imageCache.set(normalized, []);
  console.log(`No images found after trying paths: ${attemptedPaths.join(', ')}`);
  return [];
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json(
      { success: false, error: 'Category parameter is required' },
      { status: 400 }
    );
  }

  try {
    const startTime = Date.now();
    const resources = await searchImages(category);
    const images = resources.map((img: any) => ({
      url: img.secure_url,
      publicId: img.public_id,
      width: img.width,
      height: img.height,
    }));

    return NextResponse.json({
      success: true,
      images,
      total: images.length,
      searchedPaths: [
        `Pictures/${normalizeCategory(category)}`,
        `Pictures/${normalizeCategory(category).replace(/ /g, '_')}`,
        `Pictures/${normalizeCategory(category).replace(/ /g, '').toLowerCase()}`,
        `Pictures/${normalizeCategory(category).replace(/ /g, '_').toLowerCase()}`,
        normalizeCategory(category),
        'Pictures/Generic',
      ],
      cacheHit: imageCache.has(normalizeCategory(category)),
      durationMs: Date.now() - startTime,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: `Ensure you have images in one of the following folders: ${[
          `Pictures/${normalizeCategory(category)}`,
          `Pictures/${normalizeCategory(category).replace(/ /g, '_')}`,
          `Pictures/${normalizeCategory(category).replace(/ /g, '').toLowerCase()}`,
          `Pictures/${normalizeCategory(category).replace(/ /g, '_').toLowerCase()}`,
        ].join(', ')}`,
      },
      { status: 500 }
    );
  }
}
