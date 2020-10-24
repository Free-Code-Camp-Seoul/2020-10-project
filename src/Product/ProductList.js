import React from "react";
import ProductItem from "./ProductItem";

import { data } from "../Data/data";

export default function ProductList() {
  const products = data.products;
  return (
    <div className="product-container">
      {products &&
        products.map((item) => <ProductItem key={item.id} item={item} />)}
    </div>
  );
}
