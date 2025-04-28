"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FiSearch, FiMapPin, FiChevronDown, FiX } from "react-icons/fi";

const GEOCODING_API_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const API_KEY = "AIzaSyCQNqAUkIYa-5HS5iPypurBC6QCT-YjKS8";

export default function LocationModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getCurrentLocation = () => {
    setIsLoading(true);
    setError("");
    
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${GEOCODING_API_URL}${latitude},${longitude}&key=${API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.results && data.results.length > 0) {
              const location = data.results[0].formatted_address;
              const pincodeComponent = data.results[0].address_components.find(
                (component: { types: string[] }) =>
                  component.types.includes("postal_code")
              );
              
              setSelectedLocation(location);
              setPincode(pincodeComponent?.long_name || "");
            } else {
              setError("No address found for your location");
            }
          })
          .catch((error) => {
            console.error("Error fetching location:", error);
            setError("Failed to fetch location details");
          })
          .finally(() => setIsLoading(false));
      },
      (error) => {
        console.error("Geolocation error:", error);
        setError("Unable to retrieve your location");
        setIsLoading(false);
      }
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setError("");
  };

  const handleSelectLocation = (location: string, pincode: string) => {
    setSelectedLocation(location);
    setPincode(pincode);
    setError("");
    onClose();
  };

  const handleSearchLocation = () => {
    if (!searchQuery.trim()) {
      setError("Please enter a search query");
      return;
    }

    setIsLoading(true);
    fetch(`${GEOCODING_API_URL}${encodeURIComponent(searchQuery)}&key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const location = data.results[0].formatted_address;
          const pincodeComponent = data.results[0].address_components.find(
            (component: { types: string[] }) =>
              component.types.includes("postal_code")
          );
          handleSelectLocation(location, pincodeComponent?.long_name || "");
        } else {
          setError("No results found for your search");
        }
      })
      .catch((error) => {
        console.error("Error searching location:", error);
        setError("Failed to search location");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isOpen) {
      getCurrentLocation();
    }
  }, [isOpen]);

  const truncateLocation = (location: string, maxLength = 30) => {
    if (location.length <= maxLength) return location;
    return `${location.substring(0, maxLength)}...`;
  };

  return (
    <>
      <Button
        onClick={onOpen}
        className="text-sm font-medium flex dark:bg-transparent bg-white text-primary hover:bg-gray-100 items-center gap-1 px-3 py-2 transition-colors max-w-xs overflow-hidden"
      >
        <span className="truncate">
          {selectedLocation ? truncateLocation(selectedLocation) : "Select Location"}
        </span>
        {selectedLocation && pincode && (
          <span className="text-xs text-gray-500 dark:text-gray-300 ml-1 whitespace-nowrap">
            {pincode}
          </span>
        )}
        <FiChevronDown className="h-4 w-4 flex-shrink-0" />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backdrop="opaque"
        placement="center"
        hideCloseButton={true}
        className="rounded-xl shadow-2xl"
      >
        <ModalContent className="bg-white dark:bg-gray-800 w-[90%] sm:max-w-md p-4 sm:p-6 rounded-xl">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-700 p-0 pb-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-base sm:text-lg font-semibold">
                    Your Location
                  </span>
                  <Button
                    size="sm"
                    onClick={onClose}
                    aria-label="Close"
                    className="rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white w-6 h-6 min-w-6"
                  >
                    <FiX className="h-3 w-3" />
                  </Button>
                </div>

                <div className="relative w-full">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search a new address"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === "Enter" && handleSearchLocation()}
                    className="pl-10 pr-20 py-2 w-full border rounded-md text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button 
                    onClick={handleSearchLocation}
                    disabled={isLoading}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full px-3 rounded-l-none"
                  >
                    {isLoading ? "Searching..." : "Search"}
                  </Button>
                </div>
              </ModalHeader>

              <ModalBody className="py-4 px-0 space-y-4">
                <div
                  className={`flex items-center gap-2 ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} text-sm text-blue-500`}
                  onClick={!isLoading ? getCurrentLocation : undefined}
                >
                  <FiMapPin className="h-4 w-4" />
                  <span className="font-medium">
                    {isLoading ? "Detecting location..." : "Use Current Location"}
                  </span>
                </div>

                {error && (
                  <div className="text-sm text-red-500 p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    {error}
                  </div>
                )}

                {selectedLocation && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white break-words">
                      {selectedLocation}
                    </div>
                    {pincode && (
                      <div className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                        Pincode: {pincode}
                      </div>
                    )}
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}