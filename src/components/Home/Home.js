import React from "react";
import About from "../About";
import Carousel from "../Carousel";
import Products from "../Products";
import Services from "../Services";
const Home = () => {
  return (
    <div className="">
      <Carousel />
      <About />
      <Services />
      <Products />
    </div>
  );
};

export default Home;
