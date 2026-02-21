import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../redux/features/userSlice";
import defaultAvatar from "../../assets/images/Avatar.png";
import { toast, ToastContainer } from "react-toastify";
import api from "../../components/util/api";
import { base } from "motion/react-client";

const Profile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    user?.profile?.imageUrl || null
  );
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    gender: user?.gender || "MALE",
    phoneNumber: user?.phoneNumber || "",
    profilePicture: null,
    // telegram: user?.telegram || '',
    // linkedin: user?.linkedin || '',
    // bio: user?.bio || ''
  });
  const genderOptions = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
  ];

  // Initialize user data
  useEffect(() => {
    if (user?.profile?.imageUrl) {
      setPreviewImage(user.profile.imageUrl);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current.click();
    } 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        
        reader.onload = (event) => {
          const base64String = event.target.result;
          console.log(base64String);
          
          setPreviewImage(base64String);
          setFormData(prev => ({
            ...prev,
            profilePicture: base64String
          }));
        };
        
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error handling image:", error);
        toast.error("Failed to process image");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting profile picture length:', formData.profilePicture?.length);
      
      const body = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        imageUrl: formData.profilePicture,
        phoneNumber: formData.phoneNumber,
      };
      
      const updatedProfile = await api.put(
        `https://awrasbackend.awrasacademy.org/api/user/update/${user?.id}`,
        body
      );
      
      dispatch(setUser(updatedProfile.data.data));
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      gender: user?.gender || "MALE",
      phoneNumber: user?.phoneNumber || "",
      profilePicture: null,
    });
    setPreviewImage(user?.profile?.imageUrl || null);
    setIsEditing(false);
  };

  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith("blob:")) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const renderViewMode = () => (
    <>
      <div className="flex flex-col mb-8">
        <img
          src={previewImage || defaultAvatar}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-primaryBlue object-cover"
        />
        <h2 className="mt-4 text-2xl font-semibold">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Gender</h3>
            <p className="mt-1">
              {formData.gender === "MALE" ? "Male" : "Female"}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
            <p className="mt-1">{formData.phoneNumber || `-`}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Telegram</h3>
            <p className="mt-1">{formData.telegram || `-`}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">LinkedIn</h3>
            <p className="mt-1">{formData.linkedin || `-`}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Bio</h3>
            <p className="mt-1 whitespace-pre-wrap">{formData.bio || `-`}</p>
          </div>
        </div>
      </div>
    </>
  );

  const renderEditMode = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex w-max flex-col mb-8">
        <div
          className="relative group cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={previewImage || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-primaryBlue object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <i className="fas fa-camera text-white text-2xl"></i>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
            required
          >
            {genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md border-gray-300 focus:border-primaryBlue focus:outline-none p-2"
            required
          />
        </div>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primaryBlue text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">Profile</h1>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-white text-primaryBlue px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-edit mr-2"></i>Edit Profile
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-white text-primaryBlue px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
          <p className="text-sm mt-1 opacity-90">
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white shadow rounded-b-lg p-6">
          {isEditing ? renderEditMode() : renderViewMode()}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
