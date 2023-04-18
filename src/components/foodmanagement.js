import React, { useState } from 'react';
import './foodmanagement.css';

function FoodManagement() {
    const [addFoodName, setAddFoodName] = useState('');
    const [addQuantity, setAddQuantity] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addMealType, setAddMealType] = useState('');
    const [addURL, setAddURL] = useState('');
    const [updateFoodId, setUpdateFoodId] = useState('');
    const [updateFoodName, setUpdateFoodName] = useState('');
    const [updateQuantity, setUpdateQuantity] = useState('');
    const [updatePrice, setUpdatePrice] = useState('');
    const [updateMealType, setUpdateMealType] = useState('');
    const [updateURL, setUpdateURL] = useState('');
    const [removeFoodId, setRemoveFoodId] = useState('');

    function handleInputChange(setter) {
        return (event) => setter(event.target.value);
    }

    function handleAddFoodSubmit(event) {
        event.preventDefault();
        console.log(`Add Food Name: ${addFoodName}`);
        console.log(`Add Quantity: ${addQuantity}`);
        console.log(`Add Price: ${addPrice}`);
        console.log(`Add Meal Type: ${addMealType}`);
        console.log(`Add URL: ${addURL}`);
    }

    function handleUpdateFoodSubmit(event) {
        event.preventDefault();
        console.log(`Update Food ID: ${updateFoodId}`);
        console.log(`Update Food Name: ${updateFoodName}`);
        console.log(`Update Quantity: ${updateQuantity}`);
        console.log(`Update Price: ${updatePrice}`);
        console.log(`Update Meal Type: ${updateMealType}`);
        console.log(`Update URL: ${updateURL}`);
    }

    function handleRemoveFoodSubmit(event) {
        event.preventDefault();
        console.log(`Remove Food ID: ${removeFoodId}`);
    }

    return (
        <div className="food-management">
            <form onSubmit={handleAddFoodSubmit}>
                <label htmlFor="add-food-name" className="addlabel">Add Food</label>
                <div className="input-group">
                    <input
                        type="text"
                        id="add-food-name"
                        value={addFoodName}
                        onChange={handleInputChange(setAddFoodName)}
                        placeholder="Enter food name"
                    />
                    <input
                        type="number"
                        id="add-quantity"
                        value={addQuantity}
                        onChange={handleInputChange(setAddQuantity)}
                        placeholder="Enter quantity"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        id="add-price"
                        value={addPrice}
                        onChange={handleInputChange(setAddPrice)}
                        placeholder="Enter price"
                    />
                    <select
                        id="add-meal-type"
                        className="selectMealBox"
                        value={addMealType}
                        onChange={handleInputChange(setAddMealType)}
                    >
                        <option value="">Meal type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <input
                    type="text"
                    id="add-url"
                    value={addURL}
                    onChange={handleInputChange(setAddURL)}
                    placeholder="Enter URL"
                />
                <button type="submit" className="addBtn">Add Food</button>
            </form>
            <form onSubmit={handleUpdateFoodSubmit}>
                <label htmlFor="update-food-id" className="upRemlabel">Update & Remove Food</label>
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
                <button type="submit" className="updateBtn">Update Food</button>
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