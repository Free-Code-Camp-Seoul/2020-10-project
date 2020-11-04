//https://freefrontend.com/css-product-cards/
import React, { useContext } from "react";
import "./card.css";
import { useHistory } from 'react-router-dom';
import CartContext from "../Cart/models/CartContext";

export default function ProductItem({ item }) {
    const history = useHistory();
    const goToProductDetails = (productId) =>{
        if(!productId) return;
        history.push(`products/${productId}`)
    }
    const {buyProduct} = useContext(CartContext);

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
            <p>
                $<span>{item.price}</span>
            </p>
        </div>
        <div class="product-price-btn" onClick={e=>buyProduct({productData:item})}>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}
