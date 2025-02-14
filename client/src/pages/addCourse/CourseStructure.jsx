import React from "react";
import { Link } from "react-router-dom";

function CourseStructure() {
  return (
    <main className="flex-1 pl-5 ">
      <h1 className="text-2xl font-bold">COURSE STRUCTURE</h1>
      <p className="mt-2 text-gray-600">
        Begin building your course by organizing it into sections, lessons, and
        interactive components.
      </p>

      <div className="mt-6 bg-white p-6 shadow rounded-lg">
        <label className="block text-gray-700 font-semibold">
          SECTION 1 - TITLE
        </label>
        <input
          type="text"
          placeholder="eg. INTRODUCTION TO FLUTTER"
          className="w-full mt-2 p-2 border rounded"
        />

        <label className="block text-gray-700 font-semibold mt-4">
          SECTION OBJECTIVE
        </label>
        <input
          type="text"
          placeholder="eg. In this section, you will get introduced to what Flutter is"
          className="w-full mt-2 p-2 border rounded"
        />

        <label className="block text-gray-700 font-semibold mt-4">
          ADD CONTENT
        </label>
        <textarea
          className="w-full mt-2 p-2 border rounded"
          rows="3"
        ></textarea>

        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 border rounded flex items-center gap-2">
            ➕ VIDEO
          </button>
          <button className="px-4 py-2 border rounded flex items-center gap-2">
            ➕ PDF MODULE
          </button>
          <button className="px-4 py-2 border rounded flex items-center gap-2">
            ➕ WORKSHEET
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <Link>
          <button className="mt-6 px-6 py-3 bg-primaryBlue text-white rounded shadow hover:bg-secondBlue">
            ➕ ADD SECTION
          </button>
        </Link>
        <Link to={"/teachers"}>
          <button className="mt-6 px-6 py-3 bg-primaryBlue text-white rounded shadow hover:bg-secondBlue">
            Submit
          </button>
        </Link>
        <Link to={"/course/intro"}>
          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border rounded">⬅ previous</button>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default CourseStructure;
