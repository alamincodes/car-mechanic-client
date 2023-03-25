import React from "react";
import img1 from "../assets/images/products/1.png";
import img2 from "../assets/images/products/2.png";
import img3 from "../assets/images/products/3.png";
import img4 from "../assets/images/products/4.png";
import img5 from "../assets/images/products/5.png";
import img6 from "../assets/images/products/6.png";
import ProductCard from "./ProductCard";
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Car Engine Plug",
      price: 20,
      img: img1,
    },
    {
      id: 2,
      name: "Car Air Filter",
      price: 20,
      img: img2,
    },
    {
      id: 3,
      name: "Cools Led Light",
      price: 20,
      img: img3,
    },
    {
      id: 4,
      name: "Cools Led Light",
      price: 20,
      img: img4,
    },
    {
      id: 5,
      name: "Cools Led Light",
      price: 20,
      img: img5,
    },
    {
      id: 6,
      name: "Cools Led Light",
      price: 20,
      img: img6,
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h4 className="text-orange-500 text-lg font-bold">Popular Products</h4>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-2 mt-5 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-orange-500 border-orange-500">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
