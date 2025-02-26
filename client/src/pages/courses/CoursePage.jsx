import React from "react";
import search from "../../assets/icons/search.png";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/class1.png";
import image2 from "../../assets/images/class2.png";
import image3 from "../../assets/images/class3.png";
import ClassCard from "../../components/Root/ClassCard";

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
    description:
      "practical business consultancy course to help you grow and manage your business effectively.",
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

const Checkbox = ({ id, label }) => (
  <div className="flex items-center mb-2">
    <input type="checkbox" id={id} className="mr-2" />
    <label htmlFor={id}>{label}</label>
  </div>
);

const Button = ({ children, className }) => (
  <button className={`px-4 py-2 rounded ${className}`}>{children}</button>
);

const Input = ({ placeholder, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`p-2 border rounded ${className}`}
  />
);

export default function CoursePage() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex p-6 bg-slate-50 min-h-screen mt-20">
      <aside className="w-3/12 p-4 bg-white shadow rounded-md">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        {[
          "Creative Arts & Design",
          "Programming & Software Development",
          "Science & Engineering",
          "Personal Development",
          "Finance & Investment",
          "Health & Fitness",
          "Language & Communication",
          "Music & Audio Production",
        ].map((category) => (
          <Checkbox
            key={category}
            id={category}
            label={<span className="text-sm">{category}</span>}
          />
        ))}

        <h2 className="font-bold text-lg mt-6 mb-4">Price</h2>
        {["< ETB 500", "ETB 500 - ETB 1000", "ETB 1000 - ETB 1500"].map(
          (price) => (
            <Checkbox
              key={price}
              id={price}
              label={<span className="text-sm">{price}</span>}
            />
          )
        )}
      </aside>

      <div className="flex-1 ml-6">
        <div className="relative flex-grow max-w-sm hidden md:flex mb-5">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
          />
          <img
            src={search}
            alt="Search"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-35"
          />
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-lightBlue text-black px-4 mr-1 text-sm font-semibold py-1 rounded-md">
            {t("explore")}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
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
      </div>
    </div>
  );
}
