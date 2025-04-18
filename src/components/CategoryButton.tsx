import React, { useState } from "react";
import SidebarLayout from "@/app/subcategory/layout";
import { LayoutList } from "lucide-react";
import Categories from "../components/CategoryPage"; // assuming you're using lucide-react for the icon

const CategoryButton = () => {
  // State to control the visibility of the LayoutList component
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <>
      {/* Layout button to toggle visibility */}
      <LayoutList
        className="border bg-blue-600 border-blue-500 p-1.5 w-8 h-8 rounded-md cursor-pointer"
        onClick={handleToggle} // Toggle visibility when clicked
      />

      {/* Conditionally render the SidebarLayout and Categories */}
      {isOpen && (
        <div>
          <SidebarLayout>
            <Categories />
          </SidebarLayout>
        </div>
      )}
    </>
  );
};

export default CategoryButton;
