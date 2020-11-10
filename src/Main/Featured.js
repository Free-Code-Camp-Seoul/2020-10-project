import React from "react";
import ProductItem from "../Product/ProductItem";
import useFeaturedData from "./useFeaturedData";

export default function Featured() {
  const { docs } = useFeaturedData("public/data/products");
  const products = docs;
  console.log(products);
  return (
    <div>
      <h1>Featured Products</h1>
      <div page-container>
        <div className="product-container">
          {products &&
            products.map((item) => <ProductItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}
