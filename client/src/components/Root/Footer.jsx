import React from "react";
import logo from "../../assets/images/awrasWhite.png";
function Footer() {
  return (
    <footer className="section-container bg-primaryBlue text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8">
          {/* Logo and Description */}
          <div className="">
            <div className="flex items-center space-x-2">
              {/* Logo Placeholder */}
              <img className="w-20" src={logo} alt="Logo" />
            </div>
            <p className="mt-4 text-sm">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Product Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-base">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-base">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press{" "}
                  <span className="text-orange-500 text-xs ml-1">New</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-base">Social</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="hidden md:block">
            <h4 className="font-semibold text-base">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10  pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2022 Ed-Circle. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-500">
              {/* Social Icon Placeholder */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
