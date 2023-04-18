import React from 'react';
import './searchfood.css';

const FoodItem = ({ image, name, quantity, price }) => (
    <div className="food-item">
        <div className="food-image-container">
            <img src={image} alt={name} className="food-image" />
        </div>
        <div className="food-details">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Rs. {price}</p>
            <p>Meal: Breakfast</p> {/* add the new text here */}
        </div>
    </div>
);

function SearchFood() {
    // You can add or modify the food items data here
    const foodItemsData = [
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Pizza',
            quantity: 12,
            price: 120,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Burger',
            quantity: 8,
            price: 80,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Pizza',
            quantity: 12,
            price: 120,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Burger',
            quantity: 8,
            price: 80,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Pizza',
            quantity: 12,
            price: 120,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Burger',
            quantity: 8,
            price: 80,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Pizza',
            quantity: 12,
            price: 120,
        },
        {
            image:
                'https://drive.google.com/uc?export=view&id=1N3fapWDFTjmcE5l5Ub2Zq2JVv0LoR_sr',
            name: 'Burger',
            quantity: 8,
            price: 80,
        },

        // ...other food items
    ];

    return (
        <div className="search-food">
            {foodItemsData.map((item, index) => (
                <FoodItem
                    key={index}
                    image={item.image}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                />
            ))}
        </div>
    );
}

export default SearchFood;
