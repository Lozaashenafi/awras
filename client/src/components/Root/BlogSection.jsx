import React from "react";
import BlogCard from "./BlogCard";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import DetailBlog from "./DetailBlog";

const blogs = [
  {
    date: "January 2, 2025",
    title: "Awras’ Approach to Peer Coaching",
    description:
      "At Awras, we recognize the importance of peer coaching in the online learning experience. Rather than depending only on instructors ...",
    tags: ["Research", "communication"],
    image: blog1,
  },
  {
    date: "September 24, 2024",
    title: "Setting Up Your Ideal Learning Space",
    description:
      "Creating the right environment for studying is just as important as the material you're learning. A well-organized and ....",
    tags: ["Research", "education"],
    image: blog2,
  },
];
const detail = [
  {
    date: "December 13, 2024",
    title: "The Power of Innovation in Today's Workplace",
    description:
      "Innovation is at the heart of every business breakthrough.it's a mindset that requires creativity, problem-solving, and collaboration....",
    tags: ["inovation", "Research", "Developments"],
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
