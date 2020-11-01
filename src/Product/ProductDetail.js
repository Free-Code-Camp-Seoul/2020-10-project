import React from "react";
import {addInCart} from "../common/lib/localStorage";

import { data } from "../Data/data";

export default function ProductDetail(props) {
    const productUid = window.location.href.split('/').pop();
    console.log("props: ", productUid)
    console.log("data: ",data);
    const productData = (data.products).filter(item=> item.uid.toString() === productUid? true:false)[0];
    // console.log("props: ", props)

    if(!productData) return <div></div>
    console.log("productData: ", productData);
    const buyProduct=()=>{
        addInCart({userId:'sam', productId:productData.uid, quantity:1});
    }


  return (
      <div className="wrapper">

          <div className="product-img">
              <img src={productData.imgUrl} height="420" width="327" alt={productData.name}
                   // onClick={e => goToProductDetails(productData.name)}
              />
          </div>
          <div className="product-info">
              <div className="product-text">
                  <h1>{productData.name}</h1>
                  <h2>by Ben's Pets</h2>
                  <p>{productData.description}</p>
              </div>
              <div>
                  <p>{productData.productSummary}</p>
                  <p> Price  $<span>{productData.price}</span>              </p>
              </div>
              <div className="product-price-btn" onClick={e=>buyProduct()}>
                  <button type="button">buy now</button>
              </div>
          </div>
      </div>

  );
}
