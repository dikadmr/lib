import axios from "axios";
import { API_LOGIN } from "./API";

type LoginCallback = (success: boolean, data: any) => void;

export const login = async (
  username: string,
  password: string,
  callback: LoginCallback
) => {
  try {
    console.log(username, password);
    console.log("API URL:", API_LOGIN);
    const response = await axios.post(API_LOGIN, { username, password });
    console.log(response);
    callback(true, response.data);
  } catch (error) {
    callback(false, error);
  }
};
