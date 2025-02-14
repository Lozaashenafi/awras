import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "../components/teachers/SearchBar";
function AddCourseLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-primaryBlue text-white p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold border-b-2 border-orange-400 pb-2">
          ADD COURSE
        </h2>
        <div className="space-y-2">
          <Link to={"/course"}>
            <div className="bg-orange-400 text-white p-3 rounded">COURSE</div>
          </Link>
          <Link to={"/course/info"}>
            <div className="p-3 rounded hover:bg-primaryBluecursor-pointer">
              COURSE INFO
            </div>
          </Link>
          <Link to={"/course/intro"}>
            <div className="p-3 rounded hover:bg-secondBlue cursor-pointer">
              COURSE INTRO
            </div>
          </Link>
          <Link to={"/course/structure"}>
            <div className="p-3 rounded hover:bg-secondBlue cursor-pointer">
              COURSE STRUCTURE
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-[100%] md:w-[80%] px-8 py-6">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
}

export default AddCourseLayout;
