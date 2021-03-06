import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import reduxStore from "../redux/index";

const store = reduxStore();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;
