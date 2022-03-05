import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

import { Button } from "../";
import CONSTANTS from "../../utils/constants";

const { GOOGLE_AUTH_URL, GOOGLE_SCOPE } = CONSTANTS.URL;

const Navbar = () => {
  const location = useLocation();

  const signInWithGoogle = () => {
    const stateKey = Math.random().toString().substr(2, 8);

    console.log(location.pathname);

    localStorage.setItem(stateKey, location.pathname ? location.pathname : "/");

    window.location.href = `${GOOGLE_AUTH_URL}?response_type=code&client_id=${
      process.env.REACT_APP_GOOGLE_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(
      process.env.REACT_APP_REDIRECT_URI
    )}&state=${stateKey}&scope=${GOOGLE_SCOPE}`;
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

export default Navbar;
