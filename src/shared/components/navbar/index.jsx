import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";

import HowTo from "../../../assets/vector/HowTo.svg";
import BajajLogo from "../../../assets/vector/BajajLogo.svg";
import { Button, Avatar, PopupInfo } from "..";
import CONSTANTS from "../../utils/constants";
import UserContext from "../../contexts/userContext";

const { GOOGLE_AUTH_URL, GOOGLE_SCOPE } = CONSTANTS.URL;

const Navbar = () => {
  const [openInfoModal, setOpenInfoModal] = React.useState(false);
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
      <PopupInfo
        openInfoModal={openInfoModal}
        setOpenInfoModal={setOpenInfoModal}
      />
      <div className="navbar-title">
        <Link to="/">
          {/* <h1>LeWord</h1> */}
          <img src={BajajLogo} alt="Bajaj Finserv Health Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        {/* <ul>
          <Link to="/leaderboards">
            <li>Leaderboards</li>
            <span>
              <img src={Leaderboards} alt="Visit Birdle leaderboards" />
            </span>
          </Link>
        </ul> */}
        {/* {!user && (
          <Button onClick={signInWithGoogle} type="primary">
            Sign in <span>with Google</span>
          </Button>
        )}
        {user && (
          <Avatar
            avatar={user.avatar}
            alt={user.firstName + " " + user.lastName}
          />
        )} */}
        <img
          src={HowTo}
          alt="How to play Bajaj Health wordle"
          onClick={() => setOpenInfoModal(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
