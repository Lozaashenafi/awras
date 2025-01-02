import React from "react";
import CourseCard from "../../components/teachers/CourseCard";
import image from "../../assets/images/course.png";
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
    <div className="h-full ">
      <div className="grid grid-cols-4 gap-11 ">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {/* Add Course Button */}
      <button className="fixed bottom-6 right-6 bg-blue-900 text-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-2">
        <i className="fas fa-plus"></i>
        <span>Add Course</span>
      </button>
    </div>
  );
}

export default Teachers;
