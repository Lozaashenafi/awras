import React from "react";
import Header from "../../components/Root/Header";
import Hero from "../../components/Root/Hero";
import "./Home.css";
import OurService from "../../components/Root/OurService";
import PopularClasses from "../../components/Root/PopularClasses";
import Footer from "../../components/Root/Footer";

function Home() {
  return (
    <>
      <div className="homepage-container bg-white min-h-screen  flex flex-col items-center">
        <Header />
        <Hero />
        <OurService />
        <PopularClasses />
        <Footer />
      </div>
    </>
  );
}

export default Home;
