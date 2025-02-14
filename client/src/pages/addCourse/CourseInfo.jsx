import React from "react";
import { Link } from "react-router-dom";

function CourseInfo() {
  return (
    <>
      <div className="w-3/4 pl-5">
        <h1 className="text-2xl font-bold">COURSE INFO</h1>
        <p className="mt-4 font-semibold">
          What are the requirements or prerequisites for taking your course?
        </p>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          placeholder="eg. It is completely for beginners, so no prerequisite"
        />

        <p className="mt-4 font-semibold">Course Description</p>
        <textarea
          className="w-full p-2 border rounded mt-2"
          placeholder="paragraph of the course description (200 words max)"
        ></textarea>

        <p className="mt-4 font-semibold">Objectives</p>
        <p className="text-gray-600 text-sm">
          You must enter at least 4 learning objectives or outcomes that
          learners can expect to achieve after completing your course.
        </p>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          placeholder="eg. understand basic dart data structure"
        />
        <input type="text" className="w-full p-2 border rounded mt-2" />
        <input type="text" className="w-full p-2 border rounded mt-2" />
        <input type="text" className="w-full p-2 border rounded mt-2" />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Link to={"/course"}>
            <button className="px-6 py-2 border rounded text-primaryBlue">
              &#8592; Previous
            </button>
          </Link>
          <Link to={"/course/intro"}>
            <button className="px-6 py-2 bg-primaryBlue text-white rounded">
              Next &#8594;
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
