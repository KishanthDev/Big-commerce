'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { useLocationStore } from '@/stores/useLocationStore';
import { useLocale } from 'next-intl';

const capitalize = (str: string) =>
  str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

export default function Breadcrumbs() {
  const pathname = usePathname();
  const locale = useLocale(); // ✅ get current locale
  const { city, pincode } = useLocationStore();

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .filter((seg, idx) => {
      if (idx === 0 && seg === locale) return false;
      return seg.toLowerCase() !== 'subcategory'; 
    });

  const uniqueSegments = segments.filter((seg, i) => i === 0 || seg !== segments[i - 1]);

  const pathArray = uniqueSegments.map((segment, index) => {
    const href = '/' + [locale, ...segments.slice(0, index + 1)].join('/');
    return { name: capitalize(segment), href };
  });

  const locationLabel = city || (pincode ? `${pincode}` : null);

  return (
    <nav className="flex items-center text-sm text-muted-foreground space-x-1 py-2">
      <Link href={`/${locale}`} className="hover:underline text-foreground">
        Home
      </Link>

      {locationLabel && (
        <>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-foreground">{locationLabel}</span>
        </>
      )}

      {pathArray.map((segment, i) => (
        <React.Fragment key={segment.href}>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {i === pathArray.length - 1 ? (
            <span className="text-foreground">{segment.name}</span>
          ) : (
            <Link href={segment.href} className="hover:underline text-foreground/70">
              {segment.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
