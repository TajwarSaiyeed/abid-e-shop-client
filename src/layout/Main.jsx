import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <div className="lg:px-20">
      <Navbar />
      <div className="h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
