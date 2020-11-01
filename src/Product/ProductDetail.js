import React from "react";


import { data } from "../Data/data";

export default function ProductDetail(props) {
    const productUid = window.location.href.split('/').pop();
    console.log("props: ", productUid)
    console.log("data: ",data);
    const productData = (data.products).filter(item=> item.uid.toString() === productUid? true:false)[0];
    // console.log("props: ", props)

    if(!productData) return <div></div>
    console.log("productData: ", productData)


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
                  <p>{productData.descriptions}</p>
              </div>
              <div>
                  <p>{productData.productSummary}</p>
              </div>
              <div className="product-price-btn">
                  <p>
                      $<span>{productData.price}</span>
                  </p>
                  <button type="button">buy now</button>
              </div>
          </div>
      </div>

  );
}
