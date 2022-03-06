import React from "react";
import "./index.css";

import { Button } from "../";

const NavBar = () => {
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
        <Button onClick={signInWithGoogle} type="primary">
          Sign in with Google
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
