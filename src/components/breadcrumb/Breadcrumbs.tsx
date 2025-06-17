'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const capitalize = (str: string) =>
  str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean).filter((segment) => segment.toLowerCase() !== 'subcategory');

  // Ignore repeated consecutive segments
  const uniqueSegments: string[] = [];
  for (let i = 0; i < segments.length; i++) {
    if (i === 0 || segments[i] !== segments[i - 1]) {
      uniqueSegments.push(segments[i]);
    }
  }

  const pathArray = uniqueSegments.map((segment, index) => {
    const href = '/' + uniqueSegments.slice(0, index + 1).join('/');
    return {
      name: capitalize(segment),
      href,
    };
  });

  return (
    <nav className="flex items-center text-sm text-muted-foreground space-x-1 py-2">
      <Link href="/home" className="hover:underline text-foreground">
        Home
      </Link>
      {pathArray.map((segment, i) => (
        <React.Fragment key={segment.href}>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {i === pathArray.length - 1 ? (
            <span className="text-foreground">{segment.name}</span>
          ) : (
            <Link href={`/subcategory/${segment.href}`} className="hover:underline text-foreground/70">
              {segment.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
