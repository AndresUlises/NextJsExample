import { REGISTER_USER_DATA } from "../constants/register";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  birthday: "",
};
const register = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case REGISTER_USER_DATA:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export default register;
