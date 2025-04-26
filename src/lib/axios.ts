import Cookies from 'js-cookie';
import axios from "axios";
import { isTokenExpired } from './jwt';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

function clearTokens() {
  Cookies.remove("token");
  Cookies.remove("refreshToken");
}

api.interceptors.request.use(
  async function (config) {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");

    if (token) {
      const isTokenExpiredFlag = isTokenExpired(token); 
      if (isTokenExpiredFlag) {
        if (refreshToken) {
          const isRefreshTokenExpiredFlag = isTokenExpired(refreshToken); 
          if (isRefreshTokenExpiredFlag) {
            clearTokens();
          } else {
            try {
              const { newToken, newRefreshToken} = await refreshAccessToken(refreshToken);
              Cookies.set("token", newToken);
              Cookies.set("refreshToken", newRefreshToken);
            } catch (error) {
              clearTokens();
            }
          }
        } else {
          clearTokens();
        }
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

async function refreshAccessToken(refreshToken: string) {
  try {
    // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
    //   refreshToken,
    // });
    // return {
    //   newToken: response.data.token,  
    //   newRefreshToken: response.data.refreshToken, 
    // };
    return {
      newToken: "testToken",
      newRefreshToken: "testRefreshToken"
    };
  } catch (error) {
    throw error;
  }
}

export default api;
