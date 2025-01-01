import React from "react";
import logo from "../../assets/images/awrasWhite.png";

function SideBar() {
  return (
    <div className="w-[20%] bg-blue-900 text-white  flex flex-col px-4 gap-2 py-6">
      <div className="text-center mb-10">
        <img src={logo} alt="Logo" className="h-20 mx-auto" />
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
  );
}

export default SideBar;
