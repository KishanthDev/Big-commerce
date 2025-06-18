'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ChevronDown, X, SlidersHorizontal } from 'lucide-react';

const FilterBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState(false);
  const [showAllFilters, setShowAllFilters] = useState(false);

  const handleSortDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsRatingDropdownOpen(false); // Close ratings dropdown
    setShowAllFilters(false); // Close all filters modal
  };

  const handleRatingDropdownToggle = () => {
    setIsRatingDropdownOpen(!isRatingDropdownOpen);
    setIsDropdownOpen(false); // Close sort dropdown
    setShowAllFilters(false); // Close all filters modal
  };

  const handleAllFiltersToggle = () => {
    setShowAllFilters(!showAllFilters);
    setIsDropdownOpen(false); // Close sort dropdown
    setIsRatingDropdownOpen(false); // Close ratings dropdown
  };

  return (
    <>
      <div className="dark:bg-gray-800 p-4 rounded-2xl mb-3 w-full flex justify-between items-center mx-auto bg-white">
        <div className="flex flex-wrap items-center gap-3 mx-auto">
          <div className="relative">
            <Button
              onClick={handleSortDropdownToggle}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 flex items-center gap-2 px-4 py-2 rounded-md"
              aria-label="sort-options"
              aria-expanded={isDropdownOpen}
            >
              Sort by: Default
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-md shadow-lg w-40 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <Button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 bg-transparent text-inherit"
                >
                  Default
                </Button>
                <Button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 bg-transparent text-inherit"
                >
                  Rating
                </Button>
              </div>
            )}
          </div>

          <Button
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 flex items-center gap-1 rounded-md"
          >
            <Star className="h-4 w-4" /> Top Rated
          </Button>

          <Button
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
          >
            DB Verified
          </Button>

          <Button
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
          >
            DB Trust
          </Button>

          <div className="relative">
            <Button
              onClick={handleRatingDropdownToggle}
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 flex items-center gap-2 px-4 py-2 rounded-md"
              aria-label="rating-sort-options"
              aria-expanded={isRatingDropdownOpen}
            >
              Ratings: All
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isRatingDropdownOpen && (
              <div className="absolute z-50 mt-2 w-32 bg-white rounded-md shadow-lg dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <Button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 bg-transparent text-inherit"
                >
                  All
                </Button>
                {[5, 4.5, 4.0, 3.5].map((value) => (
                  <Button
                    key={value}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 bg-transparent text-inherit"
                  >
                    {value}+
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={handleAllFiltersToggle}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
          >
            <SlidersHorizontal className="h-4 w-4" /> All Filters
          </Button>
        </div>
      </div>

      {showAllFilters && (
        <>
          <div className="fixed inset-0" onClick={handleAllFiltersToggle} />
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              showAllFilters ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 h-full mt-30 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">All Filters</h3>
                <button
                  onClick={handleAllFiltersToggle}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                  aria-label="Close filter modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 space-y-6 overflow-y-auto">
                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-100">Sort By</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      Default
                    </Button>
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      Rating
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-100">Top Rated</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      Descending
                    </Button>
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      Ascending
                    </Button>
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      None
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-100">Verified & Trust</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      DB Verified
                    </Button>
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      DB Trust
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-100">Minimum Rating</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                    >
                      All
                    </Button>
                    {[5, 4.5, 4.0, 3.5].map((value) => (
                      <Button
                        key={value}
                        className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                      >
                        {value}+
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                >
                  Reset All
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilterBar;