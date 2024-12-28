import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RootLayout from "./layout/RootLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import ScrollToTop from "./components/util/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
