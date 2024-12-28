import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-start space-x-6 border-b pb-8 mb-8">
      <img src={blog.image} alt={blog.title} className="w-full md:w-3/6 " />
      <div className="mt-4 md:mt-0">
        <p className="text-sm text-primaryBlue">{blog.date}</p>
        <h3 className="text-lg font-semibold text-dark mt-2">{blog.title}</h3>
        <p className="text-text text-sm mt-2">{blog.description}</p>
        <div className="mt-4 space-x-2">
          {blog.tags.map((tag, index) => (
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

export default BlogCard;
