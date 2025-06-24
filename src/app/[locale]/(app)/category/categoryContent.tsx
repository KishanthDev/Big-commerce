"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import CategoryPageSkeleton from "@/components/ui/SkeletonCard";
import FilterBar from "@/components/filter/FiltersBar";
import CategoryImageSlider from "../subcategory/[categorySlug]/[subcategorySlug]/CategoryImageSlider";
import ListingCard from "@/components/category/ListingCard";

type Listing = {
  _id: string;
  name: string;
  address: string;
  city: string;
  category: string;
  subcategory?: string;
  tags: string[] | { en?: string; tags: string[] };
  rating: number;
  totalRatings: number;
  phone: string | { en?: string; tags?: string[] };
  pincode?: string;
  isPopular?: boolean;
  isTrusted?: boolean;
  isVerified?: boolean;
  hasEnquiry?: boolean;
  hasWhatsApp?: boolean;
};

function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default function CategoryContent() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchListings = useCallback(
    debounce(async (...args: unknown[]) => {
      const params = args[0] as Record<string, string | undefined>;
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (params.query) queryParams.append("query", params.query);
        if (params.category) queryParams.append("category", params.category);
        if (params.tag) queryParams.append("tag", params.tag);
        if (params.name) queryParams.append("name", params.name);
        if (params.address) queryParams.append("address", params.address);
        if (params.city) queryParams.append("city", params.city);
        queryParams.append("pincode", params.pincode ?? "");

        const response = await fetch(`/api/search-list/getListings?lang=${locale}&${queryParams.toString()}`, {
          cache: "no-store",
        });

        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          const listingsWithNormalizedData = result.data.map((listing: Listing) => ({
            ...listing,
            tags: Array.isArray(listing.tags) ? listing.tags : listing.tags?.tags || [],
            phone: typeof listing.phone === "string" ? listing.phone : listing.phone?.en || "",
          }));
          setListings(listingsWithNormalizedData);
        } else {
          setListings([]);
        }
      } finally {
        setLoading(false);
      }
    }, 1000),
    [locale]
  );

  useEffect(() => {
    if (!searchParams) return;
    const params = {
      query: searchParams.get("query") ?? undefined,
      category: searchParams.get("category") ?? undefined,
      tag: searchParams.get("tag") ?? undefined,
      name: searchParams.get("name") ?? undefined,
      address: searchParams.get("address") ?? undefined,
      city: searchParams.get("city") ?? undefined,
      pincode: searchParams.get("pincode") ?? "560062",
    };
    fetchListings(params);
  }, [searchParams, fetchListings]);

  if (loading) return <CategoryPageSkeleton />;

  return (
    <div className="mt-22 p-4">
      <FilterBar />
      {listings.length === 0 ? (
        <p>No businesses found for your search criteria.</p>
      ) : (
        <div className="space-y-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing._id}
              id={listing._id}
              title={listing.name}
              rating={listing.rating}
              ratingCount={listing.totalRatings}
              address={listing.address}
              city={listing.city}
              phone={typeof listing.phone === "string" ? listing.phone : listing.phone?.en || ""}
              tags={Array.isArray(listing.tags) ? listing.tags : listing.tags?.tags || []}
              imageComponent={
                <CategoryImageSlider
                  categoryName={listing.category ?? ""}
                  altText={listing.category}
                />
              }
              visitLink="#"
              mapLink={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
