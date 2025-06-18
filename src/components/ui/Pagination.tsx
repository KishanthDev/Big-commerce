'use client';

import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers: number[] = [];

    // Show up to 5 page numbers centered around currentPage
    const maxPageButtons = 5;
    const halfRange = Math.floor(maxPageButtons / 2);
    const startPage = Math.max(1, currentPage - halfRange);
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (totalPages <= 1) return null;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
        <div className="flex flex-col sm:items-center mt-8 gap-4">
            {/* Page Buttons */}
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                <button
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-blue-100 disabled:opacity-50"
                >
                    &lt; Back
                </button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`px-3 py-1 text-sm rounded border ${page === currentPage
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm rounded border mr-2 bg-white text-gray-700 border-gray-300 hover:bg-blue-100 disabled:opacity-50"
                >
                    Next &gt;
                </button>
                <div className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-right">
                    {startItem}-{endItem} of {totalItems} Results
                </div>
            </div>
        </div>
    );
};

export default Pagination;
