import React from "react";

function Hero() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between px-6 py-12">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Empowering <span className="text-orange-500">Ethiopia</span> <br />
            Through <span className="text-orange-500">Knowledge</span> <br />
            And <span className="text-orange-500">Skill</span>.
          </h1>
        </div>
        <div className="relative">
          <div className="w-72 h-72 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="https://via.placeholder.com/300"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8 py-8">
        <div className="flex items-center space-x-2">
          <span className="text-orange-400">🗣️</span>
          <p className="text-gray-700">Public Speaking</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-red-400">🎯</span>
          <p className="text-gray-700">Career-Oriented</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-pink-400">🎨</span>
          <p className="text-gray-700">Creative Thinking</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
