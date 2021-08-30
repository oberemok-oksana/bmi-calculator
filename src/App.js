import React from "react";
import "./App.css";
import Table from "./Table";

function getBMIDescription(BMI) {
  if (BMI < 16) {
    return "Underweight (Severe thinness)";
  } else if (BMI >= 16 && BMI < 16.9) {
    return "Underweight (Moderate thinness)";
  } else if (BMI > 17 && BMI < 18.4) {
    return "Underweight (Mild thinness)";
  } else if (BMI > 18.5 && BMI < 24.9) {
    return "Normal range";
  } else if (BMI > 25 && BMI < 29.9) {
    return "Overweight (Pre-obese)";
  } else if (BMI > 30 && BMI < 34.9) {
    return "Obese (Class I)";
  } else if (BMI > 35 && BMI < 39.9) {
    return "Obese (Class II)";
  } else {
    return "Obese (Class III)";
  }
}

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
    setHeight("");
    setWeight("");
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
      {BMI ? (
        <p>
          Your BMI: <strong>{BMI}</strong>. {getBMIDescription(BMI)}{" "}
        </p>
      ) : (
        <p>Enter your data to count a BMI</p>
      )}
      <Table />
    </div>
  );
}

export default App;
