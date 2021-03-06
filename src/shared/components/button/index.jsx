import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button button-${props.type} ${props.size}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
