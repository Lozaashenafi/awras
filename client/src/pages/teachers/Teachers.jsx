import React from "react";
import CourseCard from "../../components/teachers/CourseCard";
import image from "../../assets/images/course.png";
import { Link } from "react-router-dom";

const courses = [
  {
    image: image,
    category: "Design",
    price: "ETB 700.84",
    title: "Figma UI UX Design",
    rating: 4.3,
    reviews: "16,325",
  },
  {
    image: image,
    category: "Development",
    price: "ETB 800.50",
    title: "React Development",
    rating: 4.5,
    reviews: "12,567",
  },
];

function Teachers() {
  return (
    <div className="h-full px-4 py-6">
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Add Course Button */}
      <button className="fixed bottom-6 right-6 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
        <i className="fas fa-plus"></i>
        <Link to={"/course"}>Add Course</Link>
      </button>
    </div>
  );
}

export default Teachers;
