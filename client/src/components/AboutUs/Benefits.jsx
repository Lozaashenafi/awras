import React from "react";

const Benefits = () => {
  return (
    <section className=" section-container bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <h3 className="text-orange font-semibold text-lg">Our Benefits</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-dark mt-2 lineSpace">
          By Joining Awras Platform, One <br className="hidden md:block" /> Can
          Avail a Lot Of Benefits.
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Single Benefit Card */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="leftAlign bg-blue-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Icon/Number */}
              <div
                className="text-primaryBlue font-bold text-4xl mb-4"
                style={{ textShadow: "5px 3px 8px rgba(0, 0, 0, 0.3)" }}
              >
                {benefit.icon}
              </div>

              {/* Title */}
              <h4 className="font-bold text-base md:text-xl text-dark">
                {benefit.title}
              </h4>
              {/* Description */}
              <p className="text-text text-sm md:text-base mt-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Data
const benefits = [
  {
    icon: "01",
    title: "Expert-Led Courses",
    description:
      "Learn from experienced instructors who provide insightful lessons and practical knowledge. Gain access to high-quality courses designed to deliver both theoretical and hands-on experience.",
  },
  {
    icon: "02",
    title: "Personalized Learning Path",
    description:
      "Tailor your learning journey to match your unique goals and preferences. Awras helps you set clear objectives and provides a structured path to reach them.",
  },
  {
    icon: "03",
    title: "Flexible Learning Schedule",
    description:
      "Study at your own pace and on your own time. Awras allows you to access courses and materials whenever it's convenient for you, making it easier to balance learning with other commitments.",
  },
  {
    icon: "04",
    title: "Real-World Skills",
    description:
      "Develop practical, applicable skills that can be used in real-world scenarios. Awras focuses on not just theoretical knowledge but also the application of what you learn, making you job-ready.",
  },
  {
    icon: "05",
    title: "Interactive Community",
    description:
      "Connect with like-minded learners and instructors in a supportive community. Share ideas, ask questions, and collaborate to enhance your learning experience.",
  },
  {
    icon: "06",
    title: "Multimedia Materials",
    description:
      "One of the main reasons why custom eLearning is effective is that it's the perfect delivery method for visual and auditory learners.",
  },
];

export default Benefits;
