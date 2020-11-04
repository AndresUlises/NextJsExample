import { LOGIN_USER_DATA } from "../constants/login";

export const INIT_STATE = {
  email: "",
  password: "",
};
const login = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_USER_DATA:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default login;
