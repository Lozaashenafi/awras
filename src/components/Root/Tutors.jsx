import React from "react";

const tutors = [
  {
    name: "Theresa Webb",
    title: "Application Support Analyst Lead",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Courtney Henry",
    title: "Director, Undergraduate Analytics and Planning",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "https://via.placeholder.com/150",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Albert Flores",
    title: "Career Educator",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: "https://via.placeholder.com/150",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Marvin McKinney",
    title: "Co-op & Internships Program & Operations Manager",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "https://via.placeholder.com/150",
    twitter: "#",
    linkedin: "#",
  },
];

const Tutors = () => {
  return (
    <section className="section-container py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold text-orange">Tutors</h2>
        <h1 className="text-4xl font-bold text-dark mt-2">Meet the Heroes</h1>
        <p className="text-text mt-4 max-w-2xl mx-auto">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-dark">
                {tutor.name}
              </h3>
              <p className="text-orange mt-2">{tutor.title}</p>
              <p className="text-text mt-4 text-sm">{tutor.description}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href={tutor.twitter}
                  className="text-text hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href={tutor.linkedin}
                  className="text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutors;
