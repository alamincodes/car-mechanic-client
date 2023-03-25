import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
const Main = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
