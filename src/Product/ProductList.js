import React from "react";
import ProductItem from "./ProductItem";
import useFetchData from "./useFetchData";

export default function ProductList() {
  const { docs } = useFetchData("public/data/products");
  const products = docs;
  console.log(products);
  return (
    <div className="product-container">
      {products &&
        products.map((item) => <ProductItem key={item.id} item={item} />)}
    </div>
  );
}
