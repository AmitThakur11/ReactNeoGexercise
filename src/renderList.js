import "./styles.css";
import React from "react";
import Btn from "./button";

export default function App() {
  var Data = ["APPPLE","BALL","CAT","DOG","ELEPHANT"];
  return (
    <div  style = {{padding:"1rem 0 1rem",backgroundColor:"#32456f", marginBottom:"1rem;"}}className="App">
      <h2>EX: Like in a List</h2>
      {
        Data.map((item)=>{
          return(
          <div style={{
            backgroundColor:"#43574f",
            border:" 1px solid black",
            margin:"auto",
            padding:"13px",
            marginBottom:"1rem",
            width:"10rem"}}>
            <h2>{item}</h2>
            <Btn />
            
            <br/>
          </div>
          );
        })
      }
      
    </div>
  );
}
