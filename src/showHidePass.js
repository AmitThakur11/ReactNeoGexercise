import "./styles.css";
import { useState } from "react";

export default function ShowHide() {
  var [pass, setPass] = useState("");
  var [pass1, setPass1] = useState("");
  var [opt, setOpt] = useState("show");
  var [show, setShow] = useState("password");
  var inp1 = (event) => {
    var input1 = event.target.value;
    setPass1(input1);
  };
  var inp2 = (event) => {
    var input2 = event.target.value;
    setPass2(input2);
  };

  var display = () => {
    if (show === "password") {
      setShow("");
      setOpt("Hide Password");
    } else {
      setShow("password");
      setOpt("Show Password");
    }
  };
  return (
    <div className="ShowHide">
      <h2>EX(6). Show/Hide Password Match</h2>
      <input
        className="pass"
        onChange={inp1}
        type={show}
        placeholder="PASSWORD"
      />
      <br />

      <button onClick={display}>{opt}</button>
    </div>
  );
}
