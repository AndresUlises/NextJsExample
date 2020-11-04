import { REGISTER_USER_DATA } from "../constants/register";

export const setRegisterAction = (payload) => {
  return {
    type: REGISTER_USER_DATA,
    payload: payload,
  };
};
