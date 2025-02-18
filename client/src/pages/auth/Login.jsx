import React, { useState } from "react";
import api from "../../components/util/api"; // Import the Axios instance
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend
      const response = await api.post("user/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        // Save the token to localStorage or sessionStorage
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        // Redirect to dashboard or home page
        window.location.href = "/";
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center section-container min-h-screen">
      <div className="w-full md:w-[50%] bg-white flex items-center justify-center p-6 md:p-0 relative">
        <div className="w-full max-w-md mt-5">
          <h2 className="text-center text-dark text-3xl font-bold mb-6">
            Login
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-text text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                required
              />
            </div>
            <div>
              <label className="block text-text text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-primaryBlue"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-primaryBlue hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
