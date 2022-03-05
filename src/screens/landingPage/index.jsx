import React from "react";
import BajajIcon from "../../assets/vector/BajajIcon.svg";
import "./index.css";

import {} from "./components";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-body">
        <div className="landing-blob"></div>
        <img
          className="landing-body-bajaj-logo"
          src={BajajIcon}
          alt="Bajaj Finserv Health Word Hurdle game similar to wordle"
        />
        <div className="landing-glass">asdasd</div>
      </div>
    </div>
  );
};

export default Landing;
