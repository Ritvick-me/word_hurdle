import React from "react";
import "./index.css";

const index = (props) => {
  return (
    <button onClick={props.onClick} className={"button button-" + props.type}>
      {props.title}
    </button>
  );
};

export default index;
