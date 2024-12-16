import React from "react";
import logo from "../../assets/icons/awras.png";
import search from "../../assets/icons/search.png";
function Header() {
  return (
    <>
      <nav className="flex items-center justify-around px-6 py-4">
        <img className="w-20" src={logo} />
        <div className="relative flex-grow max-w-sm">
          <input
            type="text"
            placeholder="Want to learn?"
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
        <div className="space-x-4 text-sm font-semibold ">
          <a href="#" className="text-black">
            Home
          </a>
          <a href="#" className="text-black">
            About Us
          </a>
          <a href="#" className="text-black">
            Courses
          </a>
          <a href="#" className="text-black">
            Contact Us
          </a>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button className="text-primaryBlue text-sm  font-bold">
            Sign in
          </button>
          <button className="bg-primaryBlue text-sm text-white px-4 py-2 rounded-md">
            Create free account
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
