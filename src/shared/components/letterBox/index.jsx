import React from "react";
import "./index.css";

const LetterBox = (props) => {
  return (
    <div className={`letterBox letterBox-${props.type}`}>{props.children}</div>
  );
};

export default LetterBox;
