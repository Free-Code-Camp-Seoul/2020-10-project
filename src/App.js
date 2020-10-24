import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./Main/Main";
import Navbar from "./Navigation/Navbar";
import Routes from "./Navigation/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
