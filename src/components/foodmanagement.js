import React, { useState } from "react";
import "./foodmanagement.css";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1214/api", // Updated baseURL
});

function FoodManagement() {
  const [addFoodName, setAddFoodName] = useState("");
  const [addQuantity, setAddQuantity] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addMealType, setAddMealType] = useState("");
  const [addURL, setAddURL] = useState("");
  const [updateFoodId, setUpdateFoodId] = useState("");
  const [updateFoodName, setUpdateFoodName] = useState("");
  const [updateQuantity, setUpdateQuantity] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateMealType, setUpdateMealType] = useState("");
  const [updateURL, setUpdateURL] = useState("");
  const [removeFoodId, setRemoveFoodId] = useState("");

  function handleInputChange(setter) {
    return (event) => setter(event.target.value);
  }

  async function handleAddFoodSubmit(event) {
    event.preventDefault();
    /**/
    if (!addFoodName || !addQuantity || !addPrice || !addMealType || !addURL) {
      alert("Please fill all fields");
      return;
    }
    console.log(`Add Food Name: ${addFoodName}`);
    console.log(`Add Quantity: ${addQuantity}`);
    console.log(`Add Price: ${addPrice}`);
    console.log(`Add Meal Type: ${addMealType}`);
    console.log(`Add URL: ${addURL}`);

    const token = localStorage.getItem("token");

    const data = {
      name: addFoodName,
      quantity: addQuantity,
      price: addPrice,
      mealType: addMealType,
      imageUrl: addURL,
    };

    console.log("Data to be sent:", data); // Added console.log to show the data

    try {
      const response = await api.post("/food-items/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Food item added successfully", response.data);
      alert("Added Successfully");
    } catch (error) {
      console.error("Error adding food item", error);
    }
  }

  async function handleUpdateFoodSubmit(event) {
    event.preventDefault();
    /**/
    if (!updateFoodId) {
      alert("Please enter the food ID");
      return;
    }
    console.log(`Update Food ID: ${updateFoodId}`);

    const token = localStorage.getItem("token");

    try {
      const response = await api.put(
        `/food-items/update/${updateFoodId}`,
        {
          name: updateFoodName,
          quantity: updateQuantity,
          price: updatePrice,
          mealType: updateMealType,
          imageUrl: updateURL,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Food item updated successfully", response.data);
      alert("Updated Successfully");
    } catch (error) {
      console.error("Error updating food item", error);
    }
  }

  async function handleRemoveFoodSubmit(event) {
    event.preventDefault();
    /**/
    if (!removeFoodId) {
      alert("Please enter the food ID");
      return;
    }
    console.log(`Remove Food ID: ${removeFoodId}`);

    const token = localStorage.getItem("token");

    try {
      const response = await api.delete(`/food-items/delete/${removeFoodId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Food item removed successfully", response.data);
      alert("Removed Successfuly");
    } catch (error) {
      console.error("Error removing food item", error);
    }
  }

  return (
    <div className="food-management">
      <form onSubmit={handleAddFoodSubmit}>
        <label htmlFor="add-food-name" className="addlabel">
          Add Food
        </label>
        <div className="input-group">
          <input
            type="text"
            id="add-food-name"
            value={addFoodName}
            onChange={handleInputChange(setAddFoodName)}
            placeholder="Enter food name"
            required
          />
          <input
            type="number"
            id="add-quantity"
            value={addQuantity}
            onChange={handleInputChange(setAddQuantity)}
            placeholder="Enter quantity"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            id="add-price"
            value={addPrice}
            onChange={handleInputChange(setAddPrice)}
            placeholder="Enter price"
            required
          />
          <select
            id="add-meal-type"
            className="selectMealBox"
            value={addMealType}
            onChange={handleInputChange(setAddMealType)}
          >
            <option value="">Meal type</option>
            <option value="breakfast">breakfast</option>
            <option value="lunch">lunch</option>
            <option value="dinner">dinner</option>
          </select>
        </div>
        <input
          type="text"
          id="add-url"
          value={addURL}
          onChange={handleInputChange(setAddURL)}
          placeholder="Enter URL"
        />
        <button type="submit" className="addBtn">
          Add Food
        </button>
      </form>
      <form onSubmit={handleUpdateFoodSubmit}>
        <label htmlFor="update-food-id" className="upRemlabel">
          Update & Remove Food
        </label>
        <div className="input-group">
          <input
            type="text"
            id="update-food-id"
            value={updateFoodId}
            onChange={handleInputChange(setUpdateFoodId)}
            placeholder="Enter food ID"
          />
          <input
            type="text"
            id="update-food-name"
            value={updateFoodName}
            onChange={handleInputChange(setUpdateFoodName)}
            placeholder="Enter food name"
          />
          <input
            type="text"
            id="update-quantity"
            value={updateQuantity}
            onChange={handleInputChange(setUpdateQuantity)}
            placeholder="Enter quantity"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            id="update-price"
            value={updatePrice}
            onChange={handleInputChange(setUpdatePrice)}
            placeholder="Enter price"
          />
          <select
            id="update-meal-type"
            value={updateMealType}
            onChange={handleInputChange(setUpdateMealType)}
          >
            <option value="">Select meal type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <input
            type="text"
            id="update-url"
            value={updateURL}
            className="urlInputBox"
            onChange={handleInputChange(setUpdateURL)}
            placeholder="Enter URL"
          />
        </div>
        <button type="submit" className="updateBtn">
          Update Food
        </button>
      </form>
      <form onSubmit={handleRemoveFoodSubmit}>
        {/* <label htmlFor="remove-food-id" className="removeFood-label">Remove Food</label> */}
        <input
          type="text"
          id="remove-food-id"
          value={removeFoodId}
          onChange={handleInputChange(setRemoveFoodId)}
          placeholder="Enter food ID"
        />
        <button type="submit">Remove Food</button>
      </form>
    </div>
  );
}

export default FoodManagement;
