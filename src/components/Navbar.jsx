import React, { useState } from "react";
import logo from "../assets/images/MovieBasket_logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-3">
          <img className="w-24" src={logo} alt="IMDB Logo" />
         
        </div>

        
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/watchlist"
            className="text-white text-lg font-medium hover:text-yellow-400 transition"
          >
            Watchlist
          </Link>
        </div>

        
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-black/95 px-6 pb-4 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-white text-lg hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="/watchlist"
            onClick={() => setOpen(false)}
            className="block text-white text-lg hover:text-yellow-400"
          >
            Watchlist
          </Link>
        </div>
      )}
    </nav>
  );
};
