import "./styles.css";
import { useState } from "react";

export default function ReSize() {
  var [size, setSize] = useState(16);
  var [info, setInfo] = useState("");
  var addSize = () => {
    size = size + 8;
    setSize(size);
    setInfo("");
  };
  var subSize = () => {
    if (size === 8) {
      setInfo("can't reduce more");
    } else {
      size = size - 8;
      setSize(size);
    }
  };
  return (
    <div className="ReSize">
      <h2>EX(7). Resize the text</h2>
      <p>
        Size : {size} px
        <br />
        <span style={{ color: "red" }}>{info}</span>
      </p>
      <button className="add" onClick={addSize}>
        +
      </button>
      <button onClick={subSize}>-</button>
      <br />
      <br />
      <textarea
        style={{
          fontSize: size,
          border: "2px solid black",
          textAlign: "left",
          outline: "none",
          height: "15rem",
          width: "20rem"
        }}
        placeholder="TYPE HERE!"
      />
      <br />
      <br />
    </div>
  );
}
