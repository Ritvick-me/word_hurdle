import axios from "axios";
import { http } from "./http";

const backend_base_URL = process.env.REACT_APP_BACKEND_URL;

export const checkWord = async (word) => {
  const response = await axios({
    method: "post",
    url: `${backend_base_URL}/word/validity`,
    data: {
      word: word, // This is the body part
    },
  })
    .then((res) => {
      return res.data.validity;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const getNewWord = async () => {
  const response = await axios({
    method: "post",
    url: `${backend_base_URL}/word/getAWord`,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};
