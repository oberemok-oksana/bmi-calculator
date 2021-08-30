import React from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [BMI, setBMI] = React.useState(null);

  function typeWeight(e) {
    setWeight(e.target.value);
  }
  function typeHeight(e) {
    setHeight(e.target.value);
  }
  function countBMI() {
    const heightInMeter = height / 100;
    const bmi =
      parseInt((weight / (heightInMeter * heightInMeter)) * 100) / 100;
    setBMI(bmi);
  }

  return (
    <div className="App">
      <div className="inputWrapper">
        <input
          value={weight}
          onChange={typeWeight}
          className="input"
          placeholder="Weight"
        />
        <input
          value={height}
          onChange={typeHeight}
          className="input"
          placeholder="Height"
        />
      </div>
      <button onClick={countBMI} className="button">
        Count
      </button>
      {BMI ? <p>Your BMI: {BMI} </p> : <p>Enter your data to count a BMI</p>}
      <Table />
    </div>
  );
}

export default App;
