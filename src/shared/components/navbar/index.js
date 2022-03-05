import React from "react";
import "./index.css";

import { Button } from "../";

const index = () => {
  const signInWithGoogle = () => {
    console.log("sadasd");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Wordle</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li className="navbar-links">How to play?</li>
          <li className="navbar-links">Leaderboards</li>
        </ul>
        <Button
          onClick={signInWithGoogle}
          type="primary"
          title="Sign in with Google"
        />
      </div>
    </nav>
  );
};

export default index;
