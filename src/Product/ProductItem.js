//https://freefrontend.com/css-product-cards/
import React from "react";
import "./card.css";
import { useHistory } from 'react-router-dom'
export default function ProductItem({ item }) {
    const history = useHistory();
    const goToProductDetails = (productId) =>{
        if(!productId) return;
        history.push(`products/${productId}`)
    }
  return (
    <div class="wrapper">

      <div class="product-img"  >
        <img src={item.imgUrl} height="420" width="327" alt={item.name} onClick={e=>goToProductDetails(item.uid)} />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{item.name}</h1>
          <h2>by Ben's Pets</h2>
          <p>{item.description}</p>
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
