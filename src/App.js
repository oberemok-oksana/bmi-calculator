import React from "react";
import "./App.css";
import Table from "./Table";

function App() {
  return (
    <div className="App">
      <div className="inputWrapper">
        <input className="input" placeholder="Weight" />
        <input className="input" placeholder="Height" />
      </div>
      <button className="button">Count</button>
      <p>Your BMI: .</p>
      <Table />
    </div>
  );
}

export default App;
