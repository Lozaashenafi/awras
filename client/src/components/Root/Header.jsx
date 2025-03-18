import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../redux/features/userSlice';
import logo from "../../assets/icons/awras.png";
import search from "../../assets/icons/search.png";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/cross.png";
import defaultAvatar from "../../assets/images/Avatar.png";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  // Check if we're on auth pages
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileMenuOpen(false);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // Close profile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileMenuOpen && !event.target.closest('.profile-menu')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  return (
    <>
      <nav className="navStick flex items-center justify-between px-4 md:px-6 py-2 w-full bg-white fixed top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4 md:gap-8 flex-1">
          <NavLink to="/" className="flex-shrink-0">
            <img className="w-12 md:w-16" src={logo} alt="Logo" />
          </NavLink>

          {location.pathname !== "/courses" && (
            <div className="hidden md:flex flex-1 max-w-xl relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primaryBlue transition-colors"
              />
              <img
                src={search}
                alt="Search"
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-35"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-lightBlue text-black px-4 py-1.5 text-sm font-semibold rounded-md hover:bg-blue-100 transition-colors">
                {t("explore")}
              </button>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center justify-center space-x-6 text-sm font-semibold flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:text-orange ${isActive ? "text-orange" : "text-black"} line-clamp-1`
            }
          >
            {t("home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors hover:text-orange ${isActive ? "text-orange" : "text-black"} line-clamp-1`
            }
          >
            {t("aboutUs")}
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `transition-colors hover:text-orange ${isActive ? "text-orange" : "text-black"} line-clamp-1`
            }
          >
            {t("courses")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors hover:text-orange ${isActive ? "text-orange" : "text-black"} line-clamp-1`
            }
          >
            {t("contactUs")}
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              `transition-colors hover:text-orange ${isActive ? "text-orange" : "text-black"} line-clamp-1`
            }
          >
            {t("teachOnAwras")}
          </NavLink>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          {user ? (
            <div className="relative profile-menu">
              <button
                onClick={toggleProfileMenu}
                className="flex items-center space-x-3 focus:outline-none group"
              >
                <div className="relative">
                  <img
                    src={user.profilePicture || defaultAvatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-primaryBlue object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">{user.firstName}</span>
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100 profile-menu">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <NavLink
                    to="/student"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <i className="fas fa-tachometer-alt w-5"></i>
                    <span>Dashboard</span>
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <i className="fas fa-user-cog w-5"></i>
                    <span>Profile Settings</span>
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <i className="fas fa-sign-out-alt w-5"></i>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
           !isAuthPage && ( 
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-lightBlue text-dark"
                    : "bg-primaryBlue text-white hover:bg-blue-600"
                }`
              }
            >
              {t("Log In")}
            </NavLink>)
          )}
          <select
            onChange={handleLanguageChange}
            className="border rounded-md py-1.5 px-2 text-sm focus:outline-none focus:border-primaryBlue transition-colors"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>

          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt="Menu Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg overflow-y-auto transform transition-transform duration-200 translate-x-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <img className="w-10" src={logo} alt="Logo" />
                <button onClick={toggleMenu} className="focus:outline-none">
                  <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
                </button>
              </div>
              
              {user && (
                <div className="flex items-center space-x-3 p-4 border-b">
                  <div className="relative">
                    <img
                      src={user.profilePicture || defaultAvatar}
                      alt="Profile"
                      className="w-12 h-12 rounded-full border-2 border-primaryBlue object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">{user.firstName}</span>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              )}

              <div className="flex-1 py-2">
                <NavLink to="/" 
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${isActive ? 'text-orange' : 'text-gray-700'} hover:bg-gray-50`
                  }
                  onClick={toggleMenu}
                >
                  {t("home")}
                </NavLink>
                <NavLink to="/about" 
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${isActive ? 'text-orange' : 'text-gray-700'} hover:bg-gray-50`
                  }
                  onClick={toggleMenu}
                >
                  {t("aboutUs")}
                </NavLink>
                <NavLink to="/courses" 
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${isActive ? 'text-orange' : 'text-gray-700'} hover:bg-gray-50`
                  }
                  onClick={toggleMenu}
                >
                  {t("courses")}
                </NavLink>
                <NavLink to="/contact" 
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${isActive ? 'text-orange' : 'text-gray-700'} hover:bg-gray-50`
                  }
                  onClick={toggleMenu}
                >
                  {t("contactUs")}
                </NavLink>
                <NavLink to="/teachers" 
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-sm ${isActive ? 'text-orange' : 'text-gray-700'} hover:bg-gray-50`
                  }
                  onClick={toggleMenu}
                >
                  {t("teachOnAwras")}
                </NavLink>

                {user ? (
                  <>
                    <div className="border-t my-2"></div>
                    <NavLink
                      to="/student"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <i className="fas fa-tachometer-alt w-5"></i>
                      <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      <i className="fas fa-user-cog w-5"></i>
                      <span>Profile Settings</span>
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <i className="fas fa-sign-out-alt w-5"></i>
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    className="mx-4 mt-4 block text-center bg-primaryBlue text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    {t("Log In")}
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
