import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, loading } = useContext(AuthContext);

  const [orders, seOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => seOrder(data.reverse()));
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure delete service");

    if (confirmation) {
      fetch(`http://localhost:5000/order/${id}`, {
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
    fetch(`http://localhost:5000/order/${id}`, {
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
  if (loading) {
    return <div>Loading...</div>;
  }
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
