import React from "react";
import "./index.css";

import BajajIcon from "../../assets/vector/BajajIcon.svg";

const NewUser = () => {
  return (
    <div className="newUser">
      <div className="newUser-body">
        <div className="newUser-blob"></div>
        <img
          className="newUser-body-bajaj-logo"
          src={BajajIcon}
          alt="Bajaj Finserv Health Word Hurdle game"
        />
        <div className="newUser-glass">Loading...</div>
      </div>
    </div>
  );
};

export default NewUser;
