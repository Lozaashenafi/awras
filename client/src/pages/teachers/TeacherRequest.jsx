import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import image1 from "../../assets/images/request1.png";
import image2 from "../../assets/images/request2.png";
import image3 from "../../assets/images/request3.png";

const TeacherRequest = () => {
  const [profileImage, setProfileImage] = useState(null);
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen ">
      {/* Left side images */}
      <div className="flex flex-col space-y-4 w-full md:w-1/2 p-8 relative h-screen">
        <img
          src={image2}
          alt="Instructor 2"
          className="w-60 absolute top-5 z-10 "
        />
        <img
          src={image1}
          alt="Instructor 1"
          className="w-60 absolute right-48 top-44 z-20"
        />
        <img
          src={image3}
          alt="Instructor 3"
          className="w-60 absolute bottom-5 z-10"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2  py-6">
        <h2 className="text-xl font-bold text-gray-800">Instructor Form</h2>
        <p className="text-gray-600 text-sm mt-1">
          Once this request is sent, the review team will look into it and
          respond with a confirmation message via email in 24 hours.
        </p>
        <div className="pl-5">
          {/* Gender Selection */}
          <div className="mt-2 flex gap-6 pb-4">
            <label className="block text-base text-gray-700">Gender</label>
            <div className="flex space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="h-3 w-3" />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" className="h-3 w-3" />
                <span className="text-sm">Female</span>
              </label>
            </div>
          </div>

          {/* Profile Image Upload */}
          <div className="mb-4">
            <label className="block text-sm mb-2">PROFILE IMAGE</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-primaryBlue
                      hover:file:bg-blue-100"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </div>

          {/* Contact and Social Links */}
          <div className="mt-3">
            <label className="block text-sm  text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="+251"
              className=" mt-2 p-2  border rounded-md w-3/5"
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm  text-gray-700">
              Telegram Link
            </label>
            <input
              type="text"
              placeholder="Add a link"
              className=" w-3/5 mt-2 p-2 border rounded-md"
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm  text-gray-700">
              LinkedIn Link
            </label>
            <input
              type="text"
              placeholder="Add a link"
              className=" w-3/5 mt-2 p-2 border rounded-md"
            />
          </div>

          {/* Bio */}
          <div className="mt-3">
            <label className="block text-sm  text-gray-700">Bio</label>
            <textarea
              placeholder="Add a bio (less than 100 words)"
              className=" w-3/5 mt-2 p-2 border rounded-md"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-40 mt-6 bg-primaryBlue text-white py-2 rounded-md flex items-center justify-center font-medium hover:bg-secondBlue">
            REQUEST →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherRequest;
