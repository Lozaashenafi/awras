import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const ContactUs = () => {
  return (
    <section className="section-container bg-white py-8 mt-9">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primaryBlue">
            Contact Us
          </h2>
          <p className="text-orange mt-2 text-sm md:text-base">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white cardBorder rounded-lg grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form - Top on Mobile */}
          <div className="p-6 col-span-1 lg:col-span-3 order-1 lg:order-none">
            <form className="text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap items-center space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <label key={i} className="inline-flex items-center mb-2">
                      <input
                        type="radio"
                        name="subject"
                        className="text-blue-500 focus:ring focus:ring-blue-200"
                      />
                      <span className="ml-2 text-gray-700">
                        General Inquiry
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 h-24"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div className="mt-6 text-right">
                <button
                  type="submit"
                  className="bg-primaryBlue text-white px-6 py-3 rounded-lg hover:bg-primaryBlue transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - Bottom on Mobile */}
          <div className="bg-primaryBlue text-white p-6 rounded-lg col-span-1 lg:col-span-2 order-2 lg:order-none flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-sm md:text-base mb-6">
                Say something to start a live chat!
              </p>
            </div>

            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-center">
                <i className="fas fa-phone text-lg mr-3"></i>
                <span>+25192 3456 789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-lg mr-3"></i>
                <span>awras@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-lg mr-3"></i>
                <span>Kito Furdis</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-3">
              <i className="fab fa-twitter bg-white text-primaryBlue p-2 rounded-full"></i>
              <i className="fab fa-instagram bg-white text-primaryBlue p-2 rounded-full"></i>
              <i className="fab fa-facebook bg-white text-primaryBlue p-2 rounded-full"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
