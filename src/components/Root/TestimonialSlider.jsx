import React, { useState } from "react";
import logo from "../../assets/icons/awras.png";
import avater from "../../assets/images/Avatar.png";

const testimonials = [
  {
    text: "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
    name: "Jacob Jones",
    title: "Student, National University",
    image: avater, // Replace with the actual image URL
  },
  {
    text: "Amazing platform! I gained practical knowledge that directly helped me in my career growth.",
    name: "Sarah Brown",
    title: "Graduate, Tech University",
    image: avater,
  },
  {
    text: "Highly recommend this platform for anyone serious about their professional development!",
    name: "Michael Smith",
    title: "Alumnus, Global College",
    image: avater,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const { text, name, title, image } = testimonials[currentIndex];

  return (
    <section className="bg-lightBlue w-full py-12">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="Logo" className="mx-auto w-24" />
        </div>

        {/* Testimonial Text */}
        <p className="text-xl text-gray-800 font-semibold">{text}</p>

        {/* Image */}
        <div className="flex items-center justify-center mt-6">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full border-4 border-gray-300"
          />
        </div>

        {/* Name and Title */}
        <h3 className="text-lg font-bold text-gray-900 mt-4">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>

        {/* Navigation Circles */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-orange"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
