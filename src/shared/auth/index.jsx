import React, { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import UserContext from "../contexts/userContext";
import { getUser, fetchAccessToken } from "../api/auth";

const Auth = () => {
  const location = useLocation();
  const search = location.search;
  const history = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    loginUser();
  }, [location]);

  const loginUser = async (props) => {
    try {
      const code = new URLSearchParams(search).get("code");
      const state = new URLSearchParams(search).get("state");
      const stateKey = localStorage.getItem(state);

      if (!stateKey || !code) {
        props.history.push("/");
        return;
      }

      localStorage.removeItem(state);

      let userToken = null;

      userToken = await fetchAccessToken(code);

      if (userToken) {
        if (userToken.userExists === false) {
          history.push({
            pathname: "/new-user",
            state: {
              userToken: userToken,
              redirect: stateKey,
            },
          });
          return;
        }

        localStorage.setItem("access_token", "Bearer " + userToken.accessToken);
        document.cookie = `access_token = ${userToken.accessToken}`;
        localStorage.setItem(
          "token",
          JSON.stringify({
            expires_in:
              new Date().getTime() +
              userToken.refreshTokenValidityInMilliSeconds * 30,
            refresh_token:
              userToken.refreshToken !== undefined
                ? userToken.refreshToken
                : null,
            userExists: userToken.userExists,
          })
        );
        const userData = await getUser();
        setUser(userData);
        props.history.push(stateKey);
      }
    } catch (err) {
      console.log(err);
      props.history.push("/");
      return;
    }
  };

  return <div>index</div>;
};

export default Auth;
