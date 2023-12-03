import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
