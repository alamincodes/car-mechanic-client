import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);

  const [orders, seOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://car-mechanic-server-coral.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        seOrder(data.reverse());
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure delete service");

    if (confirmation) {
      fetch(`https://car-mechanic-server-coral.vercel.app/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainder = orders.filter((order) => order._id !== id);
            seOrder(remainder);
          }
        });
    }
  };
  const handleUpdate = (id) => {
    fetch(`https://car-mechanic-server-coral.vercel.app/order/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approve" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remainder = orders.filter((order) => order._id !== id);
          const approving = orders.find((order) => order._id === id);
          approving.status = "Approve";
          const newOrders = [approving, ...remainder];
          seOrder(newOrders);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {user?.email &&
            orders.map((order) => (
              <OrderRow
                order={order}
                handleDelete={handleDelete}
                key={order._id}
                handleUpdate={handleUpdate}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
