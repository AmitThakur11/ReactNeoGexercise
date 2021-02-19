import "./styles.css";
import { useState } from "react";

export default function DarkMode() {
  var dark = "./src/images/dark.png";
  var [color1, setColor1] = useState("white");
  var [color2, setColor2] = useState("black");
  var change = () => {
    if (color1 === "white") {
      setColor1("black");
      setColor2("white");
    } else {
      setColor1("white");
      setColor2("black");
    }
  };

  return (
    <div style={{ backgroundColor: color1 }} className="DarkMode">
      <h2 style={{ color: color2 }}>EX(8). DARK MODE </h2>
      <button
        className="darkBtn"
        style={{ backgroundColor: color2, color: color1, border: 0 }}
        onClick={change}
      >
        SWITCH
      </button>
      <br />
      <br />
      <section style={{ color: color2, fontSize: "1rem" }}>
        "NEVER GIVE UP"
      </section>
    </div>
  );
}
