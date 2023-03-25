import React, { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id, title, price } = data;
  //   console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    console.log(name, email, phone, address, message);
    // console.log(phone);
    const orders = {
      name: name,
      email: email,
      serviceId: _id,
      serviceName: title,
      price,
      phone: phone,
      address: address,
      message: message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order success");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h3 className="text-2xl font-bold">Service: {title}</h3>
      <h3 className="text-2xl font-bold">Price: ${price}</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-3">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input border border-gray-200 w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your phone number"
            className="input border border-gray-200 w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input border border-gray-200 w-full "
            readOnly
          />
          <input
            type="text"
            name="address"
            placeholder="Your address"
            className="input border border-gray-200 w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full mt-4"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="btn mb-10 bg-orange-500 border-none hover:bg-orange-400"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
