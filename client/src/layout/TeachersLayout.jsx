import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/teachers/SearchBar";
import SideBar from "../components/teachers/SideBar";

function TeachersLayout() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content */}
        <div className=" w-[100%] md:w-[80%] px-8 py-6">
          <SearchBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TeachersLayout;
