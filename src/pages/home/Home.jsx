import React from "react";
import Header from "../../components/Root/Header";
import Hero from "../../components/Root/Hero";
import "./Home.css";
import OurService from "../../components/Root/OurService";
import PopularClasses from "../../components/Root/PopularClasses";
import Footer from "../../components/Root/Footer";
import Tutors from "../../components/Root/Tutors";
import TestimonialSlider from "../../components/Root/TestimonialSlider";

function Home() {
  return (
    <>
      <div className="homepage-container bg-white min-h-screen  flex flex-col items-center">
        <Header />
        <Hero />
        <OurService />
        <PopularClasses />
        <Tutors />
        <TestimonialSlider />
        <Footer />
      </div>
    </>
  );
}

export default Home;
