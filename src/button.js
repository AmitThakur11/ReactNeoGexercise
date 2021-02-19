import "./styles.css";
import React, { useState } from "react";

export default function Btn() {
  var [col, setCol] = useState("white");
  var [text, setText] = useState("LIKE");
  var like = () => {
    if (col === "white") {
      setCol("lightBlue");
      setText("DISLIKE");
    } else {
      setCol("white");
      setText("Like");
    }
  };
  return (
    <div>
      <button onClick={like} style={{ outline: "none", backgroundColor: col }}>
        {text}
      </button>
    </div>
  );
}
