import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-28">
      <div className="text-center">
        <h4 className="text-orange-500 text-lg font-bold">Services</h4>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-2 mt-5 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-orange-500 border-orange-500">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
