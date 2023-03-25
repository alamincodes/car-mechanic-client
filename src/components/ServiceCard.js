import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[208px]" />
      </figure>
      <div className="card-body mt-4">
        <h2 className="card-title text-2xl font-bold">{title}</h2>

        <div className="card-actions items-center justify-between">
          <h2 className="text-orange-500 font-bold text-xl">Price: ${price}</h2>
          <Link to={`/service/${_id}`}>
            <ArrowRightIcon className="w-6 text-orange-500 font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
