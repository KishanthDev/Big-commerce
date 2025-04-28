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

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${GEOCODING_API_URL}${latitude},${longitude}&key=${API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            const location = data.results[0].formatted_address;
            const pincode = data.results[0].address_components.find((component: { types: string[]; long_name: string }) =>
              component.types.includes("postal_code")
            ).long_name;

            setSelectedLocation(location);
            setPincode(pincode);
          })
          .catch((error) => console.error("Error fetching location:", error));
      });
    }
  };

  // Handle search query input
  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  // Handle location selection from search result
  const handleSelectLocation = (location: React.SetStateAction<string>, pincode: React.SetStateAction<string>) => {
    setSelectedLocation(location);
    setPincode(pincode);
    onClose();
  };

  // Fetch location data based on search query
  const handleSearchLocation = () => {
    fetch(`${GEOCODING_API_URL}${searchQuery}&key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const location = data.results[0].formatted_address;
          const pincode = data.results[0].address_components.find((component: { types: string | string[]; }) =>
            component.types.includes("postal_code")
          ).long_name;
          handleSelectLocation(location, pincode);
        }
      })
      .catch((error) => console.error("Error searching location:", error));
  };

  useEffect(() => {
    if (isOpen) {
      getCurrentLocation();
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={onOpen}
        className="text-sm font-medium flex dark:bg-transparent bg-white text-primary hover:bg-gray-100  items-center gap-1 px-3 py-2 transition-colors"
      >
        {selectedLocation || "Select Location"}
        {selectedLocation && pincode && (
          <span className="text-xs text-gray-500 dark:text-gray-300 ml-1">
            {pincode}
          </span>
        )}
        <FiChevronDown className="h-4 w-4" />
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
                    className="rounded-full bg-gray-200 dark:bg-red-500 text-gray-600 dark:text-white w-6 h-6 min-w-6"
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
                    className="pl-10 pr-4 py-2 w-full border rounded-md text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button onClick={handleSearchLocation} className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    Search
                  </Button>
                </div>
              </ModalHeader>

              <ModalBody className="py-4 px-0 space-y-1">
                <div
                  className="flex items-center gap-2 cursor-pointer text-sm text-red-500"
                  onClick={getCurrentLocation}
                >
                  <FiMapPin className="h-4 w-4" />
                  <span className="font-medium">Use Current Location</span>
                </div>
                {selectedLocation && (
                  <>
                    <div className="pl-6 text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedLocation}
                    </div>
                    {pincode && (
                      <div className="text-xs text-gray-700 dark:text-gray-300 pl-6">
                        {pincode}
                      </div>
                    )}
                  </>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
