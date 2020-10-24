//https://freefrontend.com/css-product-cards/
import React from "react";
import "./card.css";

export default function ProductItem({ item }) {
  return (
    <div class="wrapper">
      <div class="product-img">
        <img src={item.imgUrl} height="420" width="327" alt={item.name} />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{item.name}</h1>
          <h2>by Ben's Pets</h2>
          <p>{item.descriptions}</p>
        </div>
        <div class="product-price-btn">
          <p>
            $<span>{item.price}</span>
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}
