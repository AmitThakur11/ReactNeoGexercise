import "./styles.css";
import { useState } from "react";

export default function DisableSubmit() {
  var [disable, setDisable] = useState(false);
  var [pass1, setPass1] = useState("");
  var [pass2, setPass2] = useState("");
  var [col, setCol] = useState("");
  var inp1track = (event) => {
    var input1 = event.target.value;
    setPass1(input1);
  };
  var inp2track = (event) => {
    var input2 = event.target.value;
    setPass2(input2);
  };
  var reset = () => {
    setPass1("");
    setPass2("");
    setDisable(false);
    setCol("");
  };

  var submit = () => {
    if (pass1 === pass2) {
      console.log(
        ` %cSUCCESS :: password : ${pass1} || confirmed password : ${pass2}`,
        "color: lightGreen"
      );
      setDisable(false);
    } else {
      console.log("ERROR");
      alert("password wrong");
      console.log(
        ` %cFAILURE :: password : ${pass1} || confirmed password : ${pass2}`,
        "color:red"
      );
      setDisable(true);
      setCol("red");
    }
  };
  return (
    <div className="disableSubmit">
      <h2>(EX5). Disable Submit Button</h2>
      <form>
        <input
          style={{ color: col }}
          type="password"
          placeholder="PASSWORD"
          onChange={inp1track}
        />
        <br />
        <br />
        <input
          style={{ color: col }}
          type="password"
          placeholder="CONFIRM PASSWORD"
          onChange={inp2track}
        />
        <br />
        <br />
        <input type="reset" onClick={reset}></input>
      </form>
      <button disabled={disable} onClick={submit}>
        Submit
      </button>
    </div>
  );
}
