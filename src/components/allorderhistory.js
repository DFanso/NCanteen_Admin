import React, { useState, useEffect } from "react";
import axios from "axios";
import "./allorderhistory.css";

function AllOrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:1214/api/order-history/canteen/id",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data && response.data.orderHistory) {
          setOrders(response.data.orderHistory);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Order ID copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="all-order-history">
      {orders.map((order, index) => (
        <div key={index} className="order-box">
          <p>
            <strong>Order ID:</strong>
            <button onClick={() => copyToClipboard(order._id)}>
              Copy Order ID
            </button>
          </p>

          {order.items.map((item, itemIndex) => (
            <div key={itemIndex} className="item-box">
              <p>
                <strong>Food Name:</strong> {item.name}
              </p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Price:</strong> Rs.{item.price}
              </p>
            </div>
          ))}

          <p>
            <strong>Total Price:</strong> Rs.{order.price}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Time:</strong> {order.createdAt}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllOrderHistory;
