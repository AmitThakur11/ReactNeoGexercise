import "./styles.css";
import { useState } from "react";

export default function CharCounter() {
  var [chr, setChr] = useState(0);
  var [col, setCol] = useState("green");
  var checkLength = (event) => {
    var c = event.target.value.length;
    var rem = 10 - c;
    if (c <= 10) {
      setChr(rem);
      setCol("green");
    } else {
      setChr(rem);
      setCol("red");
    }
  };

  return (
    <div className="CharCounter">
      <h2>EX(2). Character counter (Twitter)</h2>
      <textarea onChange={checkLength} placeholder="enter input"></textarea>

      <h2>
        <pre style={{ color: "Blue" }}>limit : 10 </pre>
        <pre style={{ color: col }}>Char left : {chr}</pre>
      </h2>
    </div>
  );
}
