import React from "react";

function CourseCard({ course }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg w-60">
      <img src={course.image} alt="Course" className="rounded-lg w-full mb-4" />
      <div className="text-sm mb-2">
        <span className="text-orange">{course.category}</span>
        <span className="float-right text-text">{course.price}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{course.rating}</span>
        <i className="fas fa-star text-yellow-500 ml-1"></i>
        <span className="ml-2">({course.reviews})</span>
      </div>
      <button className="bg-blue-900 text-white py-2 px-4 rounded-lg w-full">
        Detail
      </button>
    </div>
  );
}

export default CourseCard;
