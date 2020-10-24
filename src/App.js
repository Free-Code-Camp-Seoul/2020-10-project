import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

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
