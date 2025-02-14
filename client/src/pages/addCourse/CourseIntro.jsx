import React from "react";
import { Link } from "react-router-dom";

function CourseIntro() {
  return (
    <div className="w-3/4 pl-5">
      <h1 className="text-2xl font-bold mb-4">COURSE INTRO</h1>
      <p className="mb-4">
        The Course Introduction section is the first impression students will
        have of your course. It sets the tone, grabs their attention, and
        motivates them to continue learning.
      </p>
      <p className="mb-6">
        Your introduction video and outline create a strong foundation for your
        course. A well-thought-out intro not only attracts students but also
        boosts their confidence in your teaching abilities and the value of your
        course.
      </p>

      {/* Input Fields */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Introduction video</label>
        <input
          type="text"
          placeholder="Insert your YouTube link."
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block font-bold mb-2">Outline upload</label>
        <div className="flex">
          <input
            type="text"
            placeholder="Upload a PDF/word"
            className="w-full p-2 border rounded-md"
            disabled
          />
          <button className="ml-2 bg-primaryBlue text-white px-4 py-2 rounded-md">
            Upload from file
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Link to={"/course/info"}>
          <button className="bg-gray-300 px-4 py-2 rounded-md">
            ← Previous
          </button>
        </Link>
        <Link to={"/course/structure"}>
          <button className="bg-primaryBlue text-white px-6 py-2 rounded-md">
            Next →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseIntro;
