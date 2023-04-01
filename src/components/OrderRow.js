import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
  //   console.log(order);
  const { name, serviceName, phone, serviceId, _id, price, status } = order;
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://car-mechanic-server-coral.vercel.app/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, []);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              {service?.img && (
                <img src={service.img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          onClick={() => handleUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
