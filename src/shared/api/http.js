import axios from "axios";

export const http = axios.create();

const backend_base_URL = process.env.REACT_APP_BACKEND_URL;

// ----------------------------------------------------------------
//                     Default Axios with Token
// ----------------------------------------------------------------
http.interceptors.request.use(
  async function (recdConfig) {
    const config = recdConfig;
    const access_token = localStorage.getItem("access_token");
    try {
      const token = localStorage.getItem("token");

      if (access_token) {
        const Tokens = JSON.parse(token);
        if (Tokens) {
          const { refresh_token, provider, expires_in } = Tokens;
          if (refresh_token && new Date().getTime() + 5 * 6000 > expires_in) {
            const res = await axios.post(
              backend_base_URL + "/auth/refreshToken",
              {
                refreshToken: refresh_token,
              }
            );
            const newUserToken = res.data;

            const newTokenObj = {
              provider: provider,
              expires_in: new Date().getTime() + 1000 * 30 * 7,
              refresh_token,
            };
            localStorage.setItem("access_token", newUserToken.access_token);
            localStorage.setItem("token", JSON.stringify(newTokenObj));
          }
        }

        config.headers.common.Authorization = `${access_token}`;
        config.headers.common[
          "x-authorization-provider"
        ] = `${Tokens.provider}`;
      }
      return config;
    } catch (err) {
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
