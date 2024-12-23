import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/awras.png";
import search from "../../assets/icons/search.png";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/cross.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <nav className="navStick flex items-center justify-between px-6 py-2 w-full bg-white">
        {/* Logo */}
        <img className="w-16" src={logo} alt="Logo" />

        {/* Search Bar */}
        <div className="relative flex-grow max-w-sm hidden md:flex">
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

        {/* Links and Buttons */}
        <div className="hidden lg:flex space-x-4 text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Sign-in Buttons */}
        <div className="hidden lg:flex items-center justify-between gap-2">
          <button className="text-primaryBlue text-sm font-bold">
            Sign in
          </button>
          <button className="bg-primaryBlue text-sm text-white px-4 py-2 rounded-md">
            Create free account
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt="Menu Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-8 right-0 mt-16 w-56 bg-white shadow-lg z-10 rounded-lg">
          <div className="flex flex-col items-start py-4 px-4 text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primaryBlue py-1" : "text-black py-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primaryBlue py-1" : "text-black py-1"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "text-primaryBlue py-1" : "text-black py-1"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primaryBlue py-1" : "text-black py-1"
              }
            >
              Contact Us
            </NavLink>
            <div className="flex flex-col items-start gap-2 mt-4">
              <button className="text-primaryBlue text-sm font-bold w-full text-left">
                Sign in
              </button>
              <button className="bg-primaryBlue text-sm text-white px-4 py-2 rounded-md w-full">
                Create free account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
