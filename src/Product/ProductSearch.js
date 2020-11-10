import React, { useState } from "react";
import "../App.css";

export default function ProductSearch({ query, setQuery }) {
  // const [filter, setFilter] = useState("");

  const handleOnClick = (e) => {
    console.log("Handle Click");
    console.log(e.target.id);
    setQuery(e.target.id);
  };
  console.log(query);

  return (
    <div className="seach-menu">
      <ul className="search-menu-list">
        <li className="search-menu-item" onClick={handleOnClick} id={null}>
          All
        </li>
        <li className="search-menu-item" onClick={handleOnClick} id={"Cat"}>
          Cats
        </li>
        <li className="search-menu-item" onClick={handleOnClick} id={"Dog"}>
          Dogs
        </li>
        <li className="search-menu-item" onClick={handleOnClick} id={"Rabbit"}>
          Rabbits
        </li>
        <li className="search-menu-item" onClick={handleOnClick} id={"Spider"}>
          Spiders
        </li>
      </ul>
    </div>
  );
}
