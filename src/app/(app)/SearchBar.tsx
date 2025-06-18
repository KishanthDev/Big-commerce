"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import LocationModal from "./LocationModal";

interface SearchResultItem {
  id: string;
  name: string;
  type: "business" | "category" | "tag" | "city" | "name";
  pincode: string;
  category?: string;
}

interface SearchResults {
  businesses: SearchResultItem[];
  categories: SearchResultItem[];
  tags: SearchResultItem[];
  cities: SearchResultItem[];
  names: SearchResultItem[];
}

interface ApiResponse {
  success: boolean;
  data?: SearchResults;
  error?: string;
}

const PINCODE = "573201";

const SearchBar: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResults>({
    businesses: [],
    categories: [],
    tags: [],
    cities: [],
    names: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pincodeError, setPincodeError] = useState<string | null>(null);

  const updateUrlParams = useCallback(
    (params: Record<string, string>, redirectToCategory: boolean = true) => {
      const currentParams = new URLSearchParams();
      Object.entries({ pincode: PINCODE, ...params }).forEach(([key, value]) => {
        if (value) {
          currentParams.set(key, value);
        }
      });
      const allowedParams = ["name", "category", "tag", "query"];
      const existingParam = allowedParams.find((param) => searchParams?.has(param));
      if (existingParam && searchParams?.get(existingParam)) {
        currentParams.set(existingParam, searchParams.get(existingParam)!);
      }
      // Only redirect to /category if explicitly required
      const targetPath = redirectToCategory ? `/category?${currentParams.toString()}` : `/?${currentParams.toString()}`;
      router.push(targetPath, { scroll: false });
    },
    [router, searchParams]
  );

  useEffect(() => {
    setCity(searchParams?.get("city") || "");
    setSearchQuery(searchParams?.get("query") || "");
  }, [searchParams]);

  const fetchApi = useCallback(
    async (url: string): Promise<ApiResponse> => {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    },
    []
  );

  const validatePincode = useCallback(
    debounce(async () => {
      if (!/^\d{6}$/.test(PINCODE)) {
        setPincodeError("Invalid pincode format");
        return;
      }
      setIsLoading(true);
      try {
        const result = await fetchApi(`/api/search-list/search?pincode=${encodeURIComponent(PINCODE)}`);
        setPincodeError(result.success ? null : `Pincode ${PINCODE} not found in the database`);
      } catch (error) {
        setPincodeError(`Failed to validate pincode: ${error instanceof Error ? error.message : "Unknown error"}`);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [fetchApi]
  );

  const fetchResults = useCallback(
    debounce(async (query: string) => {
      if (!query) {
        setResults({ businesses: [], categories: [], tags: [], cities: [], names: [] });
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams({ q: query, pincode: PINCODE, ...(city && { city }) });
        const result = await fetchApi(`/api/search-list/search?${queryParams.toString()}`);
        setResults(result.success && result.data ? result.data : { businesses: [], categories: [], tags: [], cities: [], names: [] });
      } catch {
        setResults({ businesses: [], categories: [], tags: [], cities: [], names: [] });
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [city, fetchApi]
  );

  useEffect(() => {
    validatePincode();
    fetchResults(searchQuery);
  }, [searchQuery, validatePincode, fetchResults]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pincodeError) {
      setPincodeError("Invalid pincode");
      return;
    }
    if (searchQuery) {
      updateUrlParams({ query: searchQuery, ...(city && { city }) }, true);
      setIsSearchOpen(false);
      setSearchQuery("");
    } else {
      router.push("/", { scroll: false });
    }
  };

  const handleSelect = useCallback(
    (item: SearchResultItem) => {
      if (pincodeError) {
        setPincodeError("Invalid pincode");
        return;
      }
      const params: Record<string, string> = { ...(city && { city }) };
      if (item.type === "business" || item.type === "name") params.name = item.name;
      else if (item.type === "category") params.category = item.name;
      else if (item.type === "tag") params.tag = item.name;
      else if (item.type === "city") params.city = item.name;
      updateUrlParams(params, true);
      setSearchQuery("");
      setIsSearchOpen(false);
    },
    [pincodeError, city, updateUrlParams]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2 w-full max-w-4xl">
      <LocationModal />
      <div className="relative flex-1" ref={searchRef}>
        <form onSubmit={handleSearch} className="w-full">
          <Command className="rounded-lg border border-gray-300 dark:border-gray-600 w-full">
            <CommandInput
              placeholder="Search businesses, services ..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full border-none focus:ring-0 pr-10 text-base dark:bg-gray-800 dark:text-gray-200 placeholder:text-gray-400 placeholder:text-base pl-3 py-2"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 dark:hover:bg-gray-700"
              >
                <X className="h-4 w-4 dark:text-gray-400" />
              </Button>
            )}
            {isSearchOpen && (
              <CommandList className="absolute top-full left-0 w-full z-50 mt-0 bg-white shadow-lg rounded-b-md max-h-[500px] overflow-y-auto dark:bg-gray-700 border border-t-0 border-gray-300 dark:border-gray-600">
                {isLoading ? (
                  <CommandEmpty>Loading...</CommandEmpty>
                ) : pincodeError ? (
                  <CommandEmpty className="text-red-500 dark:text-red-400">{pincodeError}</CommandEmpty>
                ) : (
                  <>
                    {results.businesses.length > 0 && (
                      <CommandGroup heading="Businesses">
                        {results.businesses.map((item) => (
                          <CommandItem
                            key={item.id}
                            onSelect={() => handleSelect(item)}
                            className="cursor-pointer dark:hover:bg-gray-600"
                          >
                            <span className="font-medium">{item.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                              ({item.category})
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    {results.categories.length > 0 && (
                      <CommandGroup heading="Categories">
                        {results.categories.map((item) => (
                          <CommandItem
                            key={item.id}
                            onSelect={() => handleSelect(item)}
                            className="cursor-pointer dark:hover:bg-gray-600"
                          >
                            {item.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    {results.tags.length > 0 && (
                      <CommandGroup heading="Tags">
                        {results.tags.map((item) => (
                          <CommandItem
                            key={item.id}
                            onSelect={() => handleSelect(item)}
                            className="cursor-pointer dark:hover:bg-gray-600"
                          >
                            {item.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    {results.cities.length > 0 && (
                      <CommandGroup heading="Cities">
                        {results.cities.map((item) => (
                          <CommandItem
                            key={item.id}
                            onSelect={() => handleSelect(item)}
                            className="cursor-pointer dark:hover:bg-gray-600"
                          >
                            {item.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                    {searchQuery && !Object.values(results).some((arr) => arr.length > 0) && (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </>
                )}
              </CommandList>
            )}
          </Command>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;