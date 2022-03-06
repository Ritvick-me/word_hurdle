import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import UserContext from "../contexts/userContext";
import { getUser, fetchAccessToken } from "../api/auth";

const Auth = (props) => {
  const location = useLocation();
  const search = location.search;
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    loginUser();
  }, [location]);

  const loginUser = async () => {
    try {
      const code = new URLSearchParams(search).get("code");
      const state = new URLSearchParams(search).get("state");
      const stateKey = localStorage.getItem(state);

      if (!stateKey || !code) {
        navigate("/");
        return;
      }

      localStorage.removeItem(state);

      let userToken = null;

      userToken = await fetchAccessToken(code);

      if (userToken) {
        localStorage.setItem(
          "access_token",
          "Bearer " + userToken.access_token
        );
        document.cookie = `access_token = ${userToken.access_token}`;
        localStorage.setItem(
          "token",
          JSON.stringify({
            expires_in: new Date().getTime() + userToken.expires_in * 30,
            refresh_token:
              userToken.refresh_token !== undefined
                ? userToken.refresh_token
                : null,
            userExists:
              userToken.userExists === undefined ? true : userToken.userExists,
          })
        );
        let userData = null;
        if (userToken.userExists === false) {
          console.log("user does not exist on our db");
          navigate({
            pathname: "/new-user",
            state: {
              userToken: userToken,
              redirect: stateKey,
            },
          });
          userData = await getUser(userToken.userExists);
          return;
        }
        console.log("user exists in our db already");
        userData = await getUser(userToken.userExists);
        setUser(userData);
        navigate(stateKey);
      }
    } catch (err) {
      console.log(err);
      navigate("/");
      return;
    }
  };

  return <div>index</div>;
};

export default Auth;
