import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
    
      <button
        onClick={handlePrev}
        className="flex items-center justify-center p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        <FaArrowLeft />
      </button>

      
      <div className="px-4 py-2 font-semibold text-gray-800 bg-white rounded-full shadow-md">
        {pageNo}
      </div>

    
      <button
        onClick={handleNext}
        className="flex items-center justify-center p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
