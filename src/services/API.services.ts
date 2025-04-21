import axios from "axios";
import { API_LOGIN } from "./API";

type LoginCallback = (success: boolean, data: any) => void;

export const login = async (
  username: string,
  password: string,
  callback: LoginCallback
) => {
  try {
    localStorage.setItem("lib_username", username);
    const response = await axios.post(API_LOGIN, { username, password });
    callback(true, response.data);
  } catch (error) {
    callback(false, error);
  }
};
