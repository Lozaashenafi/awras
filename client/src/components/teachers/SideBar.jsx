import React, { useState } from "react";
import logo from "../../assets/images/awrasWhite.png";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative  top-0 left-0 h-full bg-blue-900 text-white px-4 py-6 z-40 transition-transform duration-300 md:w-[20%]  md:flex md:flex-col md:px-4 md:gap-2 md:h-screen">
      {/* Toggle Button for Mobile */}
      <button
        className={`md:hidden fixed top-4  left-4 z-50 p-2 ${
          isOpen ? "text-white" : "text-primaryBlue"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-900 text-white px-4 py-6 z-40 transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 `}
      >
        <div className="text-center mb-10">
          <img src={logo} alt="Logo" className="w-20 mx-auto" />
        </div>
        <nav className="space-y-6 text-sm">
          <div className="flex items-center gap-3 cursor-pointer">
            <i className="fas fa-book"></i>
            <span>Courses</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <i className="fas fa-envelope"></i>
            <span>Communication</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <i className="fas fa-chart-pie"></i>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <i className="fas fa-question-circle"></i>
            <span>Help</span>
          </div>
        </nav>
      </div>

      {/* Backdrop (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default SideBar;
