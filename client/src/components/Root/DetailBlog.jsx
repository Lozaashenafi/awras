import React from "react";

const DetailBlog = ({ detail }) => {
  return (
    <div className="flex flex-col items-start   overflow-hidden">
      <img src={detail[0].image} alt={detail[0].title} className="w-full" />
      <div className="py-4">
        <p className="text-sm text-primaryBlue">{detail[0].date}</p>
        <h3 className="text-lg font-semibold text-dark mt-2">
          {detail[0].title}
        </h3>
        <p className="text-text text-sm mt-2">{detail[0].description}</p>
        <div className="mt-4 space-x-2">
          {detail[0].tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-pink-600 bg-pink-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
