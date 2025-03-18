import React, { useState } from "react";
import api from "../../components/util/api"; // Import the Axios instance
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import Image from "../../assets/images/signup.png";


const Login = () => {
  const dispatch = useDispatch();
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

  const googleAuthUrl = import.meta.env.VITE_API_GOOGLE_AUTH_URL;

  const handleGoogleSignIn = () => {
    window.location.href = `${googleAuthUrl}/auth/google`;
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
        console.log(response.data);
        // Save the token to localStorage or sessionStorage
        dispatch(setUser(response.data.data));
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        // Redirect to dashboard or home page
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
      {/* Left Section */}
      <div className="w-full md:w-[50%] flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <img
            src={Image}
            alt="Login"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[50%] bg-white flex items-center justify-center p-6 md:p-0 relative">
        <div className="w-full max-w-md mt-5">
          {/* Header */}
          <h2 className="text-center text-dark text-3xl font-bold mb-6">
            Welcome Back
          </h2>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm">
            <button
              onClick={handleGoogleSignIn}
              className="px-3 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="h-4"
              />
              Sign in with Google
            </button>
            <button className="px-4 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="h-4"
              />
              Sign in with Facebook
            </button>
          </div>
          <div className="text-center text-sm text-gray-500 mb-4">- OR -</div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-text text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-text text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-end">
              <a href="/forgot-password" className="text-sm text-primaryBlue hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
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
