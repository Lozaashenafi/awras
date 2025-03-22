import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Home from "./pages/home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RootLayout from "./layout/RootLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import SignUp from "./pages/auth/SignUp";
import Teachers from "./pages/teachers/Teachers";
import ScrollToTop from "./components/util/ScrollToTop";
import TeachersLayout from "./layout/TeachersLayout";
import AddCourse from "./pages/addCourse/AddCourse";
import CourseInfo from "./pages/addCourse/CourseInfo";
import CourseIntro from "./pages/addCourse/CourseIntro";
import CourseStructure from "./pages/addCourse/CourseStructure";
import AddCourseLayout from "./layout/AddCourseLayout";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseDetail from "./pages/courses/CourseDetail";
import TeacherRequest from "./pages/teachers/TeacherRequest";
import CoursePage from "./pages/courses/CoursePage";
import Dashboard from "./pages/student/Dashboard";
import StudentsLayout from "./layout/StudentsLayout";
import PublicRoute from "./components/auth/PublicRoute";
import RedirectToHome from "./components/util/RedirectToHome";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop />
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/teachers" element={<TeachersLayout />}>
              <Route index element={<Teachers />} />
            </Route>
          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
            <Route path="/profile" element={<Profile />} />
          </Route>


          <Route path="/course" element={<AddCourseLayout />}>
            <Route index element={<AddCourse />} />
            <Route path="info" element={<CourseInfo />} />
            <Route path="intro" element={<CourseIntro />} />
            <Route path="structure" element={<CourseStructure />} />
          </Route>
          <Route path="/request" element={<TeacherRequest />} />
          <Route path="/student" element={<StudentsLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
