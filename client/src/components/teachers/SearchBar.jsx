import React from "react";
import search from "../../assets/icons/search.png";

import { NavLink } from "react-router-dom";

function SearchBar() {
  return (
    <div className="flex justify-between items-center mb-6  px-4 py-3">
      <div className="relative flex-grow max-w-sm hidden md:flex">
        <input
          type="text"
          placeholder="search here"
          className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
        />
        <img
          src={search}
          alt="Search"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-35"
        />
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-lightBlue text-black px-4 mr-1 text-sm font-semibold py-1 rounded-md">
          Explore
        </button>
      </div>
      <div className="flex space-x-4 text-sm">
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange" : "text-black"
          }
        >
          Learn
        </NavLink>
        <a href="#" className="hover:underline">
          Contact us
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
