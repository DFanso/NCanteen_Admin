import React, { useState } from "react";
import axios from "axios";
import "./orderSearch.css";

function OrderHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderHistoryData, setOrderHistoryData] = useState([]);

  async function handleUpdateStatus(orderId, status) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://20.2.80.190:1214/api/checkouts/update/${orderId}`,
        { status: status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.order) {
        const updatedOrders = orderHistoryData.map((order) =>
          order._id === response.data.order._id ? response.data.order : order
        );
        setOrderHistoryData(updatedOrders);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  }

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!searchTerm) {
      alert("Please enter the Order ID");
      return;
    }
    console.log(`Update Order ID: ${searchTerm}`);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://20.2.80.190:1214/api/order-history/fetch/${searchTerm}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.order) {
        setOrderHistoryData([response.data.order]);
      } else {
        setOrderHistoryData([]);
      }
    } catch (error) {
      console.error("Error fetching order:", error);
      setOrderHistoryData([]);
    }
  }

  return (
    <div className="order-history">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">Search for order:</label>
          <input
            type="text"
            id="search-input"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter order ID"
          />
          <button type="submit" style={{ backgroundColor: "#6EC130" }}>
            Search
          </button>
        </form>
      </div>
      <div className="order-list">
        {orderHistoryData.map((order) => (
          <div className="order-item" key={order._id}>
            <br></br>
            <div className="order-header">
              <span className="order-id">Order ID: {order._id}</span>
              <br></br>
              <span className="order-date">Date: {order.createdAt}</span>{" "}
              <br></br>
              <span className="order-date">Status: {order.status}</span>{" "}
              <br></br>
              <span className="order-total">
                Total: ${(order.price ?? 0).toFixed(2)}
              </span>
            </div>
            <div className="order-items">
              <span className="order-item-label">Items: </span>
              <ul className="order-item-list">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
            {order.status === "Pending" && (
              <div className="order-status-buttons">
                <button
                  onClick={() => handleUpdateStatus(order._id, "Delivered")}
                >
                  Delivered
                </button>
                <button
                  className="order-cancelled-button"
                  onClick={() => handleUpdateStatus(order._id, "Canceled")}
                >
                  Canceled
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
