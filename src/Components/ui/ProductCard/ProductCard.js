import React from "react";
import "./ProductCard.css";
import Button from "../Button/Button";

export default function ProductCard({ image, name, size, gramm, description, price, onOrder, setProduct }) {
  return (
    <div className="card">

      <img src={image} alt={name} className="card-image" />

      <div className="card-body">
        <div className="card-header">
          <h2 className="card-name">{name}</h2>
          <div className="block">
          <p className="card-size">Ø{size}</p>
          <p className="card-gramm">от {gramm}</p>
          </div>
        </div>
        <p className="card-text">
          {description}
        </p>
        <div className="card-footer">
          <p className="card-price">{price} р.</p>
          <Button onClick={() => {
    setProduct({name, size, gramm, description, price});
    window.location.hash = "";
    window.location.hash = "#Order"; 
}} />
        </div>
      </div>
    </div>
  );
}
