import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [color, setColor] = useState(true);

  const clickHandle = () => {
    setColor(!color);
  };

  return (
    <>
      <button
        onClick={clickHandle}
        style={{ backgroundColor: color ? "green" : "red" }}
      >
        Click to change color!
      </button>
      <Child />
    </>
  );
}
