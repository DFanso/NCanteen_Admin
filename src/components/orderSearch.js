import React, { useState } from 'react';
import './orderSearch.css';

function OrderHistory() {
    const [searchTerm, setSearchTerm] = useState(''); // state to track search term
    const orderHistoryData = []; // array to hold order history data

    function handleInputChange(event) {
        setSearchTerm(event.target.value); // update search term when input changes
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent default form submission behavior
        console.log(`Search term: ${searchTerm}`); // replace with your search functionality
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
                    <button type="submit" style={{ backgroundColor: '#6EC130' }}>
                        Search
                    </button>
                </form>
            </div>
            <div className="order-list">
                {orderHistoryData.map((order) => (
                    <div className="order-item" key={order.id}>
                        <div className="order-header">
                            <span className="order-id">Order ID: {order.id}</span>
                            <span className="order-date">Date: {order.date}</span>
                            <span className="order-total">Total: ${order.total.toFixed(2)}</span>
                        </div>
                        <div className="order-items">
                            <span className="order-item-label">Items: </span>
                            <ul className="order-item-list">
                                {order.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderHistory;
