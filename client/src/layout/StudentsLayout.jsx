import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/student/SideBar";
import search from "../assets/icons/search.png";
import { t } from "i18next";

function StudentsLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-6 bg-gray-100">
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
        <Outlet />
      </div>
    </div>
  );
}

export default StudentsLayout;
