import axios from "axios";
import { http } from "./http";

const backend_base_URL = process.env.REACT_APP_BACKEND_URL;

export const getUser = async () => {
  const res = await http.get(`${backend_base_URL}/auth/user`);
  return res.data;
};

export const fetchAccessToken = async (code) => {
  const res = await axios.post(
    `${backend_base_URL}/auth/thirdPartyAuthentication`,
    {
      authCode: code,
    }
  );
  const token = res.data;
  if (token) {
    console.log("Token: ");
  }
  return token;
};
