import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const ContactUs = () => {
  return (
    <section className="section-container bg-white py-12 mt-9">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primaryBlue">Contact Us</h2>
          <p className="text-orange mt-2">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        {/* Contact Section */}
        <div className="bg-white cardBorder rounded-lg grid grid-cols-5">
          {/* Left Side - Contact Information */}
          <div className="bg-primaryBlue text-white p-8 rounded-lg m-4 col-span-2 grid justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-6">Say something to start a live chat!</p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-phone text-lg mr-4"></i>
                <span>+25192 3456 789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-lg mr-4"></i>
                <span>awras@gmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-lg mr-4"></i>
                <span>Kito Furdis</span>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4 h-8">
              <i className="fab fa-twitter bg-white text-primaryBlue p-2 rounded-full"></i>
              <i className="fab fa-instagram bg-white text-primaryBlue p-2 rounded-full"></i>
              <i className="fab fa-facebook bg-white text-primaryBlue p-2 rounded-full"></i>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 col-span-3">
            <form className="text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
                <div className="flex items-center space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <label key={i} className="inline-flex items-center">
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
                <label className="block text-gray-700 ">Message</label>
                <textarea
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 h-24"
                  placeholder="Write your message.."
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
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
