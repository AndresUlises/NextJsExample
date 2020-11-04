import { LOGIN_USER_DATA } from "../constants/login";

export const setLoginAction = (payload) => {
  return {
    type: LOGIN_USER_DATA,
    payload: payload,
  };
};
