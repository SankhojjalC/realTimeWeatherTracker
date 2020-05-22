import React from "react";
import CurrentLocation from "./Components/CurrentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/SankhojjalC/weatherApp-Reactjs">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a><em>Sankhojjal Chatterjee</em></a>
      </div>
    </React.Fragment>
  );
}

export default App;
