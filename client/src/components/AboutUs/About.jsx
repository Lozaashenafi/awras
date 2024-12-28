import React from "react";
import about1 from "../../assets/images/AboutUs1.png";
import about2 from "../../assets/images/AboutUs2.png";

function About() {
  return (
    <section className="section-container bg-white mt-9">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-primaryBlue mb-4">About Us</h2>
          <h3 className="text-4xl  font-bold text-primaryBlue lineSpace">
            <span className="text-orange">Awras </span>
            Unlocking Opportunities And Gateway To Quality Learning
          </h3>
          <p className="text-gray-600 mt-4">
            Awras is your gateway to practical e-learning that opens doors to
            new opportunities. Launched in 2024, Awras offers high-quality
            courses designed to boost your skills and prepare you for a
            successful future. With a focus on real-world knowledge and hands-on
            learning, Awras makes it easy for you to grow, learn, and
            succeed—anytime, anywhere.
          </p>
          <button className="mt-6 px-6 py-2 bg-primaryBlue text-white font-semibold rounded-sm shadow hover:bg-primaryBlue transition">
            Join Us →
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 ">
          <div className=" bg-lightBlue rounded-lg overflow-hidden w-2/3 mx-auto relative">
            <img
              src={about1}
              alt="Video call"
              className="w-64 h-full object-cover ml-auto mb-8 "
            />

            <img
              src={about2}
              alt="Studying"
              className="w-64 h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
