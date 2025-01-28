import React from "react";
import image1 from "../../assets/images/class1.png";
import image2 from "../../assets/images/class2.png";
import image3 from "../../assets/images/class3.png";
import ClassCard from "./ClassCard";
const PopularClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Figma UI UX Design",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design.",
      duration: "08 hr 12 mins",
      price: "ETB 700.84",
      rating: 4.3,
      reviews: "16,325",
      image: image1,
      instructor: { name: "abreham tadesse", enrolled: 2001 },
    },
    {
      id: 2,
      title: "Learn Buisness With Helen",
      description:"practical business consultancy course to help you grow and manage your business effectively.",
      duration: "06 hr 3 mins",
      price: "ETB 800.99",
      rating: 3.9,
      reviews: "832",
      image: image2,
      instructor: { name: "Helen muluken", enrolled: 2001 },
    },
    {
      id: 3,
      title: "Interior Design With Abenezer",
      description:
        "an interior design course that helps you create beautiful, functional spaces with easy-to-follow lessons.",
      duration: "01 hr 2 mins",
      price: "ETB 1100.70",
      rating: 4.2,
      reviews: "125",
      image: image3,
      instructor: { name: "arch. Abenezer Mola", enrolled: 2001 },
    },
  ];
  return (
    <section className="section-container bg-white">
      <div className="text-center leftAlign ml-8">
        <h2 className="text-orange font-semibold mb-2">Explore Programs</h2>
        <h3 className="text-3xl text-dark font-bold my-4">
          Our Most Popular Class
        </h3>
        <p className="text-gray-600 mb-8">
          Let's join our famous class, the knowledge provided will definitely be
          useful for you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            id={cls.id}
            image={cls.image}
            title={cls.title}
            description={cls.description}
            duration={cls.duration}
            price={cls.price}
            rating={cls.rating}
            reviews={cls.reviews}
            instructorName={cls.instructor.name}
            enrolled={cls.instructor.enrolled}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
