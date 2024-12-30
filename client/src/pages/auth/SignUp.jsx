import React from "react";
import Image from "../../assets/images/signup.png";

const SignUp = () => {
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
            <button className="px-3 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="h-4"
              />
              Sign up with Google
            </button>
            <button className="px-4 py-2 bg-slate-50 border border-gray-300 rounded-lg flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="h-4"
              />
              Sign up with Facebook
            </button>
          </div>
          <div className="text-center text-sm text-gray-500 mb-4">- OR -</div>
          {/* Form */}
          <form className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-text text-sm">First Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
              <div className="flex-1">
                <label className="block text-text text-sm">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-text text-sm">Email</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
              />
            </div>
            <div>
              <label className="block text-text text-sm">Password</label>
              <input
                type="password"
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
              />
            </div>
            <div>
              <label className="block text-text text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border-b border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-primaryBlue"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-primaryBlue hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
