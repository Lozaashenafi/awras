import React from "react";
import image from "../../assets/images/features.png";

const Features = () => {
  return (
    <section className="section-container bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 relative">
          <div className="bg-gray-100 w-3/4  rounded-lg shadow-lg p-4">
            <img
              src={image}
              alt="Features Visual"
              className="rounded-lg w-11/12 h-5/6"
            />
          </div>
          <div className="absolute opacity-25 w-72 h-72 border border-primaryBlue rounded-full customTopLeftUperAbout left-6">
            <div className="absolute w-60 h-60 border border-primaryBlue rounded-full customTopLeftUnder left-6">
              <div className="absolute w-48 h-48 border border-primaryBlue rounded-full customTopLeftUnder left-6">
                <div className="absolute w-36 h-36 border border-primaryBlue rounded-full customTopLeftUnder left-6"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-orange font-semibold text-lg">Features</h3>
          <h2 className="text-3xl font-bold text-dark mt-2">
            We are always working to provide you best of the features in all
            aspects.
          </h2>
          <p className="text-text mt-4">
            At Awras, our primary mission is to help students clarify their
            goals, maintain consistency in their ambitions, and build the
            confidence needed for their educational journey. We strive to
            empower students to stay focused and motivated as they work towards
            achieving their long-term objectives.
          </p>
          <p className="text-text mt-4">
            While the internet offers vast information with just a click, we
            believe that without the right knowledge and practice, it can fail
            to guide you toward success. At Awras, we emphasize the importance
            of learning and hands-on experience to truly make a difference in
            your life.
          </p>
          <button className="mt-6 px-6 py-2 bg-primaryBlue text-white font-semibold rounded-lg shadow hover:bg-primaryBlue transition">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
