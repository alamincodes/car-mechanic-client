import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
const ProductCard = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={img}
          alt="Shoes"
          className="bg-[#F3F3F3] px-14 py-4 rounded-xl h-[208px]"
        />
      </figure>
      <div className="card-body mt-4">
        <div className="card-actions items-center flex-col">
          <div className="flex items-center">
            <StarIcon className="text-yellow-400 w-5" />
            <StarIcon className="text-yellow-400 w-5" />
            <StarIcon className="text-yellow-400 w-5" />
            <StarIcon className="text-yellow-400 w-5" />
            <StarIcon className="text-yellow-400 w-5" />
          </div>
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <h2 className="text-orange-500 font-bold text-xl">Price: ${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
