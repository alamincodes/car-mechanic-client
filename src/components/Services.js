import React, { useContext, useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { AuthContext } from "../context/AuthProvider";
import Loading from "./Loading";
const Services = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");

  const searchRef = useRef();

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://car-mechanic-server-coral.vercel.app/services?search=${search}&order=${
        ascending ? "ascending" : "descending"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [search, ascending]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="my-28">
      <div className="text-center">
        <h4 className="text-orange-500 text-lg font-bold">Services</h4>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        {/* search field*/}
        <div>
          <input type="text" ref={searchRef} name="" className="border " />
          <button
            onClick={handleSearch}
            className="btn btn-sm ml-1 btn-primary"
          >
            Search
          </button>
        </div>
        {/* ascending button */}
        <button
          onClick={() => setAscending(!ascending)}
          className="btn capitalize"
        >
          {ascending ? "Low to High" : "High to low"}
        </button>
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
