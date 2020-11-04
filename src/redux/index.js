import { combineReducers, createStore } from "redux";
import login from "./reducers/login";
import register from "./reducers/register";

const store = () => {
  return createStore(combineReducers({ login, register }));
};

export default store;
