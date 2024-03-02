import React from "react";
import "./appCss/Cards.css"; // Importing CSS for styling the cards

const Cards = ({ foods }) => {
  return (
    <div className="card-container">
      {foods.map((food, index) => (
        <div className="card" key={index}>
          <div className="image_food">
            <img src={food.image} alt=" no image Food" className="food-image" />
          </div>
          <div className="info_item">
            <div className="name">{food.name}</div>
            <div className="cla">${food.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
