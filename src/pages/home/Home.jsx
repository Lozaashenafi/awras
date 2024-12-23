import React from "react";
import Header from "../../components/Root/Header";
import Hero from "../../components/Root/Hero";
import "./Home.css";
import OurService from "../../components/Root/OurService";
import PopularClasses from "../../components/Root/PopularClasses";
import Footer from "../../components/Root/Footer";
import Tutors from "../../components/Root/Tutors";
import TestimonialSlider from "../../components/Root/TestimonialSlider";
import BlogSection from "../../components/Root/BlogSection";

function Home() {
  return (
    <>
      <Hero />
      <OurService />
      <PopularClasses />
      <Tutors />
      <TestimonialSlider />
      <BlogSection />
    </>
  );
}

export default Home;
