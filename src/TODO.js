import "./styles.css";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
export default function TODO() {
  var [Db, setDb] = useState([]);
  var [item, setItem] = useState("");

  var getInput = (event) => {
    setItem(event.target.value);
  };

  var add = () => {
    if (item === "") {
    } else {
      setDb((data) => {
        return [...data, item];
      });
    }
    setItem("");
  };

  return (
    <div  style={{paddingBottom:"13rem"}} className="App">
      <h2> EX. TODO LIST</h2>
      
      <br/>
      <input onChange={getInput} placeholder="ADD ITEM!" value={item} />
      <br/>
      <br/>
      <button onClick={add}>ADD</button>
      <h2><ol style={{ listStyle: "none", textAlign: "left" }}>
        {Db.map((item , index) => {
          return < TodoItem key={index} name={item} />
        })}
      </ol></h2>
      
    </div>
  );
}
