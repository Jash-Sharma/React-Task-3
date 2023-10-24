import React, { useState } from "react";
import "./App.css";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "cyan",
  "orange",
  "violet",
  "pink",
  "darkblue",
  "magenta",
  "teal",
  "lime",
  "olive",
  "brown",
  "maroon",
];
function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="back">
      <div className="App shadow-lg d-flex " style={{ backgroundColor: selectedColor }}>
        <h1>Color Picker</h1>
        <div className="color-palette">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box shadow-lg "
              style={{ backgroundColor: color }}
              onClick={() => changeColor(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
