import React from "react";
import BlogCard from "./BlogCard";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import DetailBlog from "./DetailBlog";

const blogs = [
  {
    date: "November 16, 2014",
    title: "Three Pillars of User Delight",
    description:
      "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    tags: ["Research", "UI UX"],
    image: blog1,
  },
  {
    date: "September 24, 2017",
    title: "UX Mapping Methods",
    description:
      "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
    tags: ["Research", "UI Design"],
    image: blog2,
  },
];
const detail = [
  {
    date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    description:
      "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.",
    tags: ["Programming", "Research", "Developments"],
    image: blog3,
  },
];

const BlogSection = () => {
  return (
    <section className="section-container bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Our Recent Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 leftAlign">
          {/* Blog Cards */}
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>

          {/* Detail Section */}
          <div>
            <DetailBlog detail={detail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
