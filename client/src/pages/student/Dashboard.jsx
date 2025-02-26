import { useState } from "react";
import img from "../../assets/icons/hablogo.png";
import img2 from "../../assets/images/class1.png";
import {
  Search,
  HelpCircle,
  BarChart2,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-white rounded-md cardBorder overflow-hidden hover:shadow-lg transition-shadow m-4 max-w-xs">
      <div className="relative w-full p-4">
        <img src={img2} className="w-full h-52 object-cover rounded-md" />
      </div>
      <div className="p-4">
        <span className="text-orange font-semibold text-sm">Design</span>
        <h3 className="text-lg font-bold mt-2 text-dark">
          Learn Buisness With Helen
        </h3>
        <p className="text-sm text-text mt-1">
          practical business consultancy course to help you grow and manage your
          business effectively.
        </p>
        <div className="flex items-center justify-between">
          <div></div>
          <button className="bg-primaryBlue text-white py-2 px-4 rounded-md ">
            continue
          </button>
        </div>
      </div>
    </div>
  );
}
