import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";

import { Button, Avatar } from "..";
import CONSTANTS from "../../utils/constants";
import UserContext from "../../contexts/userContext";

const { GOOGLE_AUTH_URL, GOOGLE_SCOPE } = CONSTANTS.URL;

const Navbar = () => {
  const { user } = useContext(UserContext);
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
          <Link to="/leaderboards">
            <li>Leaderboards</li>
          </Link>
        </ul>
        {!user && (
          <Button onClick={signInWithGoogle} type="primary">
            Sign in with Google
          </Button>
        )}
        {user && (
          <Avatar
            avatar={user.avatar}
            alt={user.firstName + " " + user.lastName}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
