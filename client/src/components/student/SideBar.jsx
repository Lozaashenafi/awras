import React from "react";
import img from "../../assets/icons/hablogo.png";
import {
  Search,
  HelpCircle,
  BarChart2,
  MessageSquare,
  BookOpen,
} from "lucide-react";
function SideBar() {
  return (
    <div className="w-64 bg-primaryBlue text-white p-6 flex flex-col">
      <div className="flex items-center mb-8">
        <img src={img} alt="" className="w-28" />
        <span className="text-lg font-serif mr-7  ">Awras E-Hub</span>
      </div>
      <div className="flex items-center space-x-3 mb-11 ">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div>
          <p className="text-lg">Naol Legesse</p>
          <p className="text-orange-400 text-sm">Student</p>
        </div>
      </div>
      <nav className="space-y-7">
        <button className="flex items-center space-x-2 text-white hover:text-gray-300">
          <BookOpen size={20} /> <span>My Courses</span>
        </button>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300">
          <MessageSquare size={20} /> <span>Forum</span>
        </button>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300">
          <BarChart2 size={20} /> <span>Wishlist</span>
        </button>
        <button className="flex items-center space-x-2 text-white hover:text-gray-300">
          <HelpCircle size={20} /> <span>Help</span>
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
