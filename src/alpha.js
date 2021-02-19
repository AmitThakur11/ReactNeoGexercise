import "./styles.css";
import { useState } from "react";

export default function Alpha() {
  var [pass, setPass] = useState("");
  var [out, setOut] = useState("");
  var [col, setColor] = useState("");

  var passTracker = (event) => {
    var password = event.target.value;
    setPass(password);
  };
  var checkAlpha = () => {
    var pattern = /[0-9]/g;
    var pattern1 = /[a-z]/g;
    var result1 = pass.match(pattern);
    var result2 = pass.match(pattern1);
    if (result1 === null || result2 === null) {
      setOut(" Error: Not Alphanumeric");
      setColor("red");
    } else {
      setOut("Pass : Alphanumeric");
      setColor("green");
    }
  };

  return (
    <div className="Alpha">
      <h2>EX(4). Check whether password is Alphanumeric or not ?</h2>
      <input onChange={passTracker} placeholder="PASSWORD" />
      <br />
      <br />
      <button onClick={checkAlpha}>check</button>
      <p style={{ color: col }}>{out}</p>
    </div>
  );
}
