import React, { useState } from "react";

function CourseDetail() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "Introduction", details: "4/19min" },
    { title: "Getting Started", details: "3/17min" },
    { title: "Structure Your Course", details: "7/51min" },
    { title: "Create Your Content", details: "10/32min" },
  ];
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto mt-6 p-4">
        <div className="grid grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="col-span-2">
            <div className="w-full h-80">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lHhRhPV--G0"
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="text-3xl font-bold mt-4">
              FLUTTER DEVELOPMENT IN AMHARIC
            </h1>
            <p className="text-gray-500">Lesson 41 • Students 100+</p>
            <div className="text-yellow-500 text-xl">⭐⭐⭐⭐☆ (4.7)</div>

            {/* Course Description */}
            <h2 className="text-2xl font-semibold mt-6">COURSE DESCRIPTION</h2>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>

            {/* What You Will Learn */}
            <h2 className="text-2xl font-semibold mt-6">
              WHAT WILL I LEARN FROM THIS COURSE?
            </h2>
            <p className="text-gray-700 mt-2">
              Hinmaeos. Vestibulum sollicitudin varius mauris non dignissim...
            </p>
          </div>

          {/* Sidebar */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Course Content</h2>
            <ul className="mt-2">
              {sections.map((section, index) => (
                <li key={index} className="py-2 border-b">
                  <button
                    className="w-full text-left font-semibold"
                    onClick={() => toggleSection(index)}
                  >
                    {section.title} ({section.details})
                  </button>
                  {openSection === index && (
                    <>
                      <div className="mt-2 pl-4 text-gray-600">
                        Content details...
                      </div>
                      <div className="mt-2 pl-4 text-gray-600">
                        Content details...
                      </div>
                      <div className="mt-2 pl-4 text-gray-600">
                        Content details...
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
