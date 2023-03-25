import React from "react";
import Img1 from "../assets/images/about_us/person.jpg";
import Img2 from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero my-32">
        <div className="hero-content flex-col lg:flex-row">
          <div className="relative md:w-1/2">
            <img
              src={Img1}
              alt=""
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <img
              src={Img2}
              alt=""
              className="md:absolute md:left-[150px] border-[10px] border-white top-40 max-w-[300px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-orange-500 font-bold text-lg">About Us</h2>
            <h1 className="text-5xl font-bold">
              We are qualified <br /> & of experience <br /> in this field{" "}
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="pb-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-orange-500 border-none">
              Get more Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
