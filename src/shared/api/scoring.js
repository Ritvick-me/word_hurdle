import axios from "axios";
import { http } from "./http";

const backend_base_URL = process.env.REACT_APP_BACKEND_URL;

export const updateScore = async (email, score) => {
  const res = await http.post(`${backend_base_URL}/leaderboard/storeData`, {
    email: email,
    score: score,
  });
  return res.data;
};
