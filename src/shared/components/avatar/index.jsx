import React from "react";
import "./index.css";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <img src={props.avatar} alt={props.alt} />
    </div>
  );
};

export default Avatar;
