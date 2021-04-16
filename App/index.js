import React from "react";
import Navigation from "./config/Navigation";
import { Provider } from "react-redux";
import store from "./store/store";

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
