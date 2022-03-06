import React from "react";
import "./index.css";

const Key = (props) => {
  return (
    <div
      className={`key key-${props.type}`}
      onClick={() => props.pressKey(props.text)}
    >
      {props.text}
    </div>
  );
};

export default Key;
