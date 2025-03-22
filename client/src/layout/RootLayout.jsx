import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Root/Header";
import Footer from "../components/Root/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <div className="relative top-14 mb-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
