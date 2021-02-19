import "./styles.css";
import { useState } from "react";

export default function PassVerify() {
  var [pass, setPass] = useState("");
  var [pass1, setPass1] = useState("");
  var [pass2, setPass2] = useState("");
  var [opt, setOpt] = useState("show");
  var [col, setCol] = useState("");
  var [show, setShow] = useState("password");
  var inp1 = (event) => {
    var input1 = event.target.value;
    setPass1(input1);
  };
  var inp2 = (event) => {
    var input2 = event.target.value;
    setPass2(input2);
  };
  var verify = () => {
    if (pass1 === pass2) {
      setPass("Password Verified");
      setCol("green");
    } else {
      setPass("ERROR : Incorrect Password");
      setCol("red");
    }
  };

  var reset = () => {
    setPass("");
    setPass1("");
    setPass2("");
  };

  var display = () => {
    if (show === "password") {
      setShow("");
      setOpt("Hide");
    } else {
      setShow("password");
      setOpt("show");
    }
  };
  return (
    <div className="PassVerify">
      <h2>EX(3). Password Match</h2>
      <p style={{ color: col }}>{pass}</p>
      <form>
        <input
          className="pass"
          onChange={inp1}
          type={show}
          placeholder="PASSWORD"
        />
        <br />
        <input
          className="pass"
          onChange={inp2}
          type={show}
          placeholder=" CONFIRM PASSWORD"
        />
        <br />
        <input type="reset" onClick={reset}></input>
      </form>
      <button onClick={verify}>Verify</button>
      <button onClick={display}>{opt}</button>
    </div>
  );
}
