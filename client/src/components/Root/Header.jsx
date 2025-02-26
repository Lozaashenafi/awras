import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/awras.png";
import search from "../../assets/icons/search.png";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/cross.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current page location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <nav className="navStick flex items-center justify-between px-6 py-1 w-full bg-white fixed top-0 z-50 md:py-2">
        <NavLink to={"/"}>
          <img className="w-14 md:w-16" src={logo} alt="Logo" />
        </NavLink>

        {/* Hide Search bar if the page is "/courses" */}
        {location.pathname !== "/courses" && (
          <div className="relative flex-grow max-w-sm hidden md:flex">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
            />
            <img
              src={search}
              alt="Search"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-35"
            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-lightBlue text-black px-4 mr-1 text-sm font-semibold py-1 rounded-md">
              {t("explore")}
            </button>
          </div>
        )}

        <div className="hidden lg:flex space-x-4 text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            {t("aboutUs")}
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            {t("courses")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            {t("contactUs")}
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive ? "text-orange" : "text-black"
            }
          >
            {t("teachOnAwras")}
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4">
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              ` text-sm px-4 py-2 rounded-md ${
                isActive
                  ? "bg-lightBlue text-dark"
                  : "bg-primaryBlue text-white"
              }`
            }
          >
            {t("Log In")}
          </NavLink>
          <select
            onChange={handleLanguageChange}
            className="border rounded-md py-1 text-sm focus:outline-none"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
        </div>

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

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center p-6 lg:hidden overflow-y-auto shadow-md">
          <button
            onClick={toggleMenu}
            className="self-end focus:outline-none mb-4"
          >
            <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
          </button>
          <NavLink to="/" className="text-black py-2" onClick={toggleMenu}>
            {t("home")}
          </NavLink>
          <NavLink to="/about" className="text-black py-2" onClick={toggleMenu}>
            {t("aboutUs")}
          </NavLink>
          <NavLink
            to="/courses"
            className="text-black py-2"
            onClick={toggleMenu}
          >
            {t("courses")}
          </NavLink>
          <NavLink
            to="/contact"
            className="text-black py-2"
            onClick={toggleMenu}
          >
            {t("contactUs")}
          </NavLink>
          <NavLink
            to="/request"
            className="text-black py-2"
            onClick={toggleMenu}
          >
            {t("teachOnAwras")}
          </NavLink>
          <NavLink
            to="/login"
            className="bg-primaryBlue text-white py-2 px-4 rounded-md mt-4"
            onClick={toggleMenu}
          >
            {t("Log In")}
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Header;
