import React from "react";
import "./style.css";

function  ScoreBoard (props) {
 
 console.log("props",props);
  return (
    <div className="Score">
      
      <h2>
        
        Current Score: <span id="CurrentScore">{props.children[0]} </span> Top Score: 
        <span id="topscore"> {props.children[2]}</span>
      </h2>{" "}
    </div>
  );
}

export default ScoreBoard;
