import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Root/Header";
import Footer from "../components/Root/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
