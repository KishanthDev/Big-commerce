'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ChevronDown } from 'lucide-react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { useLocationStore } from '@/stores/useLocationStore';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const GEOCODING_API_URL =
    'https://maps.googleapis.com/maps/api/geocode/json?address=';
const API_KEY = 'AIzaSyCQNqAUkIYa-5HS5iPypurBC6QCT-YjKS8';

interface BackendApiResponse {
    success: boolean;
    data?: { pincode?: string; city?: string; address?: string };
    error?: string;
}

export default function LocationModal() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const {
        city,
        pincode,
        setCity: setGlobalCity,
        setPincode: setGlobalPincode,
    } = useLocationStore();

    const updateLocation = (c: string, p: string) => {
        setGlobalCity(c);
        setGlobalPincode(p);
    };

    interface AddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
    }

    const extractCityPin = (components: AddressComponent[]) => {
        const pin = components.find((c) => c.types.includes('postal_code'))?.long_name;
        const cty = components.find((c) => c.types.includes('locality'))?.long_name;
        return { cty: cty || '', pin: pin || '' };
    };

    // Automatically fetch user's location on mount

    useEffect(() => {
        if (!navigator.geolocation) return;

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) =>
                fetch(`${GEOCODING_API_URL}${latitude},${longitude}&key=${API_KEY}`)
                    .then((r) => r.json())
                    .then(({ results }) => {
                        if (!results?.[0]) throw new Error('no-res');
                        const { cty, pin } = extractCityPin(results[0].address_components);
                        if (!cty && !pin) throw new Error('no-city-pin');
                        updateLocation(cty, pin);
                    })
                    .catch(() => setError('Unable to detect your location'))
                    .finally(() => setIsLoading(false)),
            () => {
                setError('Location permission denied');
                setIsLoading(false);
            },
        );
    }, []);

    //manually trigger geolocation
    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }
        setIsLoading(true);
        setError('');
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) =>
                fetch(`${GEOCODING_API_URL}${latitude},${longitude}&key=${API_KEY}`)
                    .then((r) => r.json())
                    .then(({ results }) => {
                        if (!results?.[0]) throw new Error('no-res');
                        const { cty, pin } = extractCityPin(results[0].address_components);
                        if (!cty && !pin) throw new Error('no-city-pin');
                        updateLocation(cty, pin);
                        setIsOpen(false);
                    })
                    .catch(() => setError('Unable to detect your location'))
                    .finally(() => setIsLoading(false)),
            () => {
                setError('Location permission denied');
                setIsLoading(false);
            },
        );
    };

    const handleSearchLocation = () => {
        const q = searchQuery.trim();
        if (!q) return setError('Enter a pincode or address');

        setIsLoading(true);
        const isPin = /^\d{6}$/.test(q);

        const stop = () => setIsLoading(false);

        // 1) Try your internal DB for pincodes
        if (isPin) {
            fetch(`/api/search-list/search?pincode=${encodeURIComponent(q)}`, {
                cache: 'no-store',
            })
                .then((r) => (r.ok ? r.json() : Promise.reject()))
                .then((data: BackendApiResponse) => {
                    if (!data.success || !data.data) throw new Error();
                    updateLocation(data.data.city || '', data.data.pincode || q);
                    setIsOpen(false);
                })
                .catch(() =>
                    // 2) Fallback to Google if DB miss
                    fetch(
                        `${GEOCODING_API_URL}?address=${q}&components=country:IN&key=${API_KEY}`,
                    )
                        .then((r) => r.json())
                        .then(({ results }) => {
                            if (!results?.[0]) throw new Error();
                            const { cty, pin } = extractCityPin(
                                results[0].address_components,
                            );
                            if (!pin) throw new Error();
                            updateLocation(cty, pin || q);
                            setIsOpen(false);
                        })
                        .catch(() => setError('Pincode not found')),
                )
                .finally(stop);
            return;
        }

        // Address / city search
        fetch(
            `${GEOCODING_API_URL}?address=${encodeURIComponent(
                q,
            )}&components=country:IN&key=${API_KEY}`,
        )
            .then((r) => r.json())
            .then(({ results }) => {
                if (!results?.[0]) throw new Error();
                const { cty, pin } = extractCityPin(results[0].address_components);
                updateLocation(cty, pin);
                setIsOpen(false);
            })
            .catch(() => setError('Address not found'))
            .finally(stop);
    };

    return (
        <div className="dark:text-white text-black sm:py-[4px] rounded-sm">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="text-sm font-medium flex items-start gap-2 bg-white dark:bg-transparent px-2 py-1"
                    >
                        <MapPin className="h-4 w-4 mt-1" />
                        <div className="flex flex-col items-start leading-tight">
                            <div className="flex items-center gap-1">
                                {/* 🔥 FIXED LABEL */}
                                <span>
                                    {city || (pincode ? `${pincode}` : 'Select Location')}
                                </span>
                                <ChevronDown className="h-4 w-4" />
                            </div>
                            {pincode && city && (
                                <span className="text-xs text-muted-foreground">{pincode}</span>
                            )}
                        </div>
                    </Button>
                </DialogTrigger>

                <DialogContent className="max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
                    {/* header with search bar */}
                    <DialogHeader className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-700">
                        <DialogTitle className="text-lg font-semibold">
                            Your Location
                        </DialogTitle>

                        <div className="relative w-full">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            <Input
                                placeholder="Search by address or pincode"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setError('');
                                }}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearchLocation()}
                                className="pl-10 pr-20 py-2 w-full border rounded-md text-sm bg-white dark:bg-gray-900"
                            />
                            <Button
                                onClick={handleSearchLocation}
                                disabled={isLoading}
                                className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-3 rounded-l-none"
                            >
                                {isLoading ? '...' : 'Search'}
                            </Button>
                        </div>
                    </DialogHeader>

                    {/* body */}
                    <div className="py-4">
                        {/* current-location shortcut */}
                        <div
                            className={`flex items-center gap-2 mb-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                                } text-red-500`}
                            onClick={!isLoading ? getCurrentLocation : undefined}
                        >
                            <FiMapPin className="h-5 w-5" />
                            <span className="font-medium">
                                {isLoading ? 'Detecting…' : 'Current Location'}
                            </span>
                        </div>

                        {/* selected values */}
                        <div className="space-y-3 text-base pl-7">
                            {city && (
                                <p className="flex gap-2">
                                    <span className="font-semibold min-w-[60px]">City:</span>
                                    {city}
                                </p>
                            )}
                            {pincode && (
                                <p className="flex gap-2">
                                    <span className="font-semibold min-w-[60px]">Pincode:</span>
                                    {pincode}
                                </p>
                            )}
                            {!city && !pincode && (
                                <p className="text-sm text-gray-500">
                                    No location selected yet.
                                </p>
                            )}
                        </div>

                        {/* error */}
                        {error && (
                            <div className="text-sm text-red-500 p-2 bg-red-50 dark:bg-red-900/20 rounded-md mt-4">
                                {error}
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
