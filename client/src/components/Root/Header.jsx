import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/awras.png";
import search from "../../assets/icons/search.png";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/cross.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Change language
  };

  return (
    <>
      <nav className="navStick flex items-center justify-between px-6 py-2 w-full bg-white">
        <NavLink to={"/"}>
          <img className="w-16" src={logo} alt="Logo" />
        </NavLink>

        <div className="relative flex-grow max-w-sm hidden md:flex">
          <input
            type="text"
            placeholder={t("searchPlaceholder")} // Translated placeholder
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
            to={"/signup"}
            className={({ isActive }) =>
              ` text-sm px-4 py-2 rounded-md ${
                isActive
                  ? "bg-lightBlue text-dark"
                  : "bg-primaryBlue text-white"
              }`
            }
          >
            {t("createAccount")}
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
    </>
  );
}

export default Header;
