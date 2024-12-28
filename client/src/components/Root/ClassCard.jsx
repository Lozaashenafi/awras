import React from "react";

function ClassCard({
  id,
  image,
  title,
  description,
  duration,
  rating,
  reviews,
  instructorName,
  enrolled,
  price,
}) {
  return (
    <div
      key={id}
      className="bg-white rounded-lg cardBorder overflow-hidden hover:shadow-lg transition-shadow m-4 max-w-xs"
    >
      <div className="relative w-full p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-md"
        />
        {/* <div className="absolute top-5 right-5 bg-white text-text px-3 py-1 rounded-sm text-sm">
          {duration}
        </div> */}
      </div>
      <div className="p-4">
        <span className="text-orange font-semibold text-sm">Design</span>
        <h3 className="text-lg font-bold mt-2 text-dark">{title}</h3>
        <p className="text-sm text-text mt-1">{description}</p>
        <div className="mt-4 flex items-center">
          <div className="text-orange flex items-center text-sm">
            <span className="mr-1 text-primaryBlue">{rating}</span>
            <svg
              className="w-4 h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.7 11.97 1 7.665l6.062-.88L10 2l2.938 4.785 6.062.88-4.7 4.305 1.578 6.12L10 15z" />
            </svg>
            <span className="ml-1 text-text">({reviews} reviews)</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-dark font-medium">{instructorName}</p>
            <p className="text-sm text-text">{enrolled} Enrolled</p>
          </div>
          <p className="text-lg text-primaryBlue font-semibold text-orange-500">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
