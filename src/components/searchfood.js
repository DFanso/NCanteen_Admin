import React, { useEffect, useState } from "react";
import axios from "axios";
import "./searchfood.css";

const FoodItem = ({ image, name, quantity, price, _id, mealType }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(_id);
    alert("ID copied to clipboard: " + _id);
  };

  return (
    <div className="food-item">
      <div className="food-image-container">
        <img src={image} alt={name} className="food-image" />
      </div>
      <div className="food-details">
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>Rs. {price}</p>
        <p>Meal: {mealType}</p>
        <button onClick={copyToClipboard}>Copy ID</button>
      </div>
    </div>
  );
};

function SearchFood() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:1214/api/food-items/list/canteen", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setFoodItems(response.data.foodItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="search-food">
      {foodItems.map((item, index) => (
        <FoodItem
          key={index}
          image={item.imageUrl}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          _id={item._id}
          mealType={item.mealType}
        />
      ))}
    </div>
  );
}

export default SearchFood;
