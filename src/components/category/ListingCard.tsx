"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, Phone, MapPin } from "lucide-react";
import StarRating from "@/components/icons/StarRating";

type ListingCardProps = {
    id: string | number;
    title: string;
    rating: number;
    ratingCount?: number;
    description?: string;
    address?: string;
    phone?: string;
    city?: string;
    tags?: string[];
    imageUrl?: string;
    imageComponent?: React.ReactNode;
    visitLink?: string;
    mapLink?: string;
    icon?: React.ReactNode;
};

export default function ListingCard({
    id,
    title,
    rating,
    ratingCount = 0,
    description,
    address,
    phone,
    imageComponent,
    city,
    tags = [],
    imageUrl,
    visitLink = "#",
    mapLink,
    icon,
}: ListingCardProps) {
    return (
        <div
            key={id}
            className="relative flex flex-col sm:flex-row bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
            {/* Top-right buttons */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button aria-label="Share" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
                <button aria-label="Like" className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            {/* Image */}
            {imageComponent ? (
                imageComponent
            ) : imageUrl ? (
                <div className="sm:w-1/3 w-full h-56 sm:h-auto relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full"
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />
                </div>
            ) : null}


            {/* Content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex gap-2 items-center">
                        {icon}
                        {title}
                    </h2>

                    <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={rating} />
                        <span className="text-sm text-gray-500">({ratingCount})</span>
                    </div>

                    {description && <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>}
                    {address && !description && <p className="mt-3 text-gray-700 dark:text-gray-300">{address}</p>}

                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-sm px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-between text-sm text-gray-600 dark:text-gray-300 flex-wrap gap-4">
                    {phone && (
                        <a href={`tel:${phone}`} className="flex items-center gap-1 hover:text-blue-600">
                            <Phone className="w-4 h-4" />
                            {phone}
                        </a>
                    )}
                    {mapLink && city && (
                        <a
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-blue-600"
                        >
                            <MapPin className="w-4 h-4" />
                            {city}
                        </a>
                    )}
                    {visitLink && (
                        <Link
                            href={visitLink}
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Visit →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
