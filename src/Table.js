import React from "react";

function Table() {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Category</th>
          <th>BMI (kg/m2)</th>
        </tr>
        <tr>
          <td>Underweight (Severe thinness)</td>
          <td> &lt; 16.0</td>
        </tr>
        <tr>
          <td>Underweight (Moderate thinness)</td>
          <td>16.0 – 16.9</td>
        </tr>
        <tr>
          <td>Underweight (Mild thinness)</td>
          <td>17.0 – 18.4</td>
        </tr>
        <tr>
          <td>Normal range</td>
          <td>18.5 – 24.9</td>
        </tr>
        <tr>
          <td>Overweight (Pre-obese)</td>
          <td>25.0 – 29.9</td>
        </tr>
        <tr>
          <td>Obese (Class I)</td>
          <td>30.0 – 34.9</td>
        </tr>
        <tr>
          <td>Obese (Class II)</td>
          <td>35.0 – 39.9</td>
        </tr>
        <tr>
          <td>Obese (Class III)</td>
          <td>&#8805;40.0</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
