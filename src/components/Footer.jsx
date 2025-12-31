import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 flex justify-center items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} MovieBasket. All rights reserved.</p>
    </footer>
  );
};
