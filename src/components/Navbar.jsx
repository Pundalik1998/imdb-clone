import React from "react";
import logo from "../assets/images/IMDB-logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={logo} alt="" />
      <Link to="./" className="text-yellow-500 text-2xl font-bold">
        Home
      </Link>
      <Link to="./watchlist" className="text-yellow-500 text-2xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};
