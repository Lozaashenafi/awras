import React, { useState } from "react";
import api from "../../components/util/api";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const subjectOptions = [
    { label: "General Inquiry", value: "General Inquiry" },
    { label: "Support", value: "Support" },
    { label: "Feedback", value: "Feedback" },
  ];

  const handleSubjectSelect = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, subject, message } = formData;

    try {
      const response = await api.post("contact/sendEmail", {
        firstName,
        lastName,
        email,
        phoneNumber,
        subject,
        message,
      });

      toast.success("Message sent successfully!"); 
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
      }); 
    
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message."); 
    }
  };

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
            <form className="text-sm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 mb-4">Select Subject</label>
                <div className="flex flex-wrap items-center space-x-4">
                  {subjectOptions.map((option, i) => (
                    <label key={i} className="inline-flex items-center mb-2">
                      <input
                        type="radio"
                        name="subject"
                        value={option.value}
                        checked={formData.subject === option.value}
                        onChange={handleSubjectSelect}
                        className="text-blue-500 focus:ring focus:ring-blue-200"
                      />
                      <span className="ml-2 text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
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

      {/* Toast Notification */}
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
