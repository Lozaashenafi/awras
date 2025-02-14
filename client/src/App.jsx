import React from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/teachers" element={<TeachersLayout />}>
          <Route index element={<Teachers />} />
        </Route>
        <Route path="/course" element={<AddCourseLayout />}>
          <Route index element={<AddCourse />} />
          <Route path="info" element={<CourseInfo />} />
          <Route path="intro" element={<CourseIntro />} />
          <Route path="structure" element={<CourseStructure />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
