// src/components/SignUp.js
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser, setLoading, setError } from '../../redux/features/userSlice';
import Image from "../../assets/images/signup.png";
import api from "../../components/util/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (passwordStrength < 3) {
      toast.error("Password is too weak. Please choose a stronger password.");
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await api.post("user/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      
      if (response.data.success) {
        dispatch(setUser(response.data.data));
        toast.success("User registered successfully!");
        navigate('/login');
      }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.message || error.message
      );
      dispatch(setError(error.response?.data?.message || "Registration failed"));
      toast.error("Registration failed. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center section-container min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-[50%] flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <img
            src={Image}
            alt="Profile"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[50%] bg-white flex items-center justify-center p-6 md:p-0 relative">
        <div className="w-full max-w-md mt-5">
          {/* Header */}
          <h2 className="text-center text-dark text-3xl font-bold mb-6">
            Create Account
          </h2>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm">
            <button
              onClick={handleGoogleSignIn}
              className="px-3 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="h-4"
              />
              <p className="line-clamp-1">Sign up with Google</p>
            </button>
            <button className="px-4 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="h-4"
              />
              <p className="line-clamp-1">Sign up with Facebook</p>
            </button>
          </div>
          <div className="text-center text-sm text-gray-500 mb-4">- OR -</div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-text text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-text text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-text text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-text text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-text text-sm">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primaryBlue hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
