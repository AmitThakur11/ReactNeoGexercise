import "./styles.css";
import { useState } from "react";

export default function Counter() {
  var [count, setCount] = useState(0);
  var add = () => {
    count = count + 1;
    setCount(count);
  };
  var sub = () => {
    count = count - 1;
    setCount(count);
  };
  return (
    <div className="Counter">
      <h2>EX(1). A simple Counter</h2>
      <h1>{count}</h1>
      <button className="add" onClick={add}>
        +
      </button>
      <button className="sub" onClick={sub}>
        -
      </button>
    </div>
  );
}
