import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";

let states = {};

function _getM2(initialValue, key) {
  if (states[key] === undefined) {
    states[key] = initialValue;
  }
  return states[key];
}

function _setM2(v, key) {
  states[key] = v;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function Title() {
  let countH = _getM2(0, "H");
  let countW = _getM2(0, "W");
  const onClickH = () => {
    console.log("clickedH", countH);
    countH = countH + 1;
    _setM2(countH, "H");
  };
  const onClickW = () => {
    console.log("clickedW", countW);
    countW = countW + 1;
    _setM2(countW, "W");
  };
  console.log("updatedH", countH);
  console.log("updatedW", countW);
  return (
    <>
      <button onClick={onClickH}>+</button>
      <h1>Hello+{countH}</h1>
      <button onClick={onClickW}>+</button>
      <h1>World+{countW}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <Title />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
