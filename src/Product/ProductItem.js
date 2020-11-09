//https://freefrontend.com/css-product-cards/
import React, { useContext } from "react";
import "./card.css";
import { useHistory } from "react-router-dom";
import CartContext from "../Cart/models/CartContext";

export default function ProductItem({ item }) {
  const history = useHistory();
  const goToProductDetails = (productId) => {
    if (!productId) return;
    history.push(`products/${productId}`);
  };
  const { buyProduct } = useContext(CartContext);

  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src={item.url}
          height="210"
          width="300"
          alt={item.name}
          onClick={(e) => goToProductDetails(item.uid)}
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{item.name}</h1>
          <h2>by Ben's Pets</h2>
          <p>{item.description}</p>
          <p>
            $<span>{item.price}</span>
          </p>
        </div>
        <div
          className="product-price-btn"
          onClick={(e) => buyProduct({ productData: item })}
        >
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}
