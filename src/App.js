import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navigation/Navbar";
import Routes from "./Navigation/Routes";
import CartContext from "./Cart/models/CartContext";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <CartContext.Provider>
          <Navbar />
          <Routes />
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
