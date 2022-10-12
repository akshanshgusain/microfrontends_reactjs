import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app

const mount = (ele) => {
  ReactDOM.render(<App />, ele);
};

// If we are in dev. and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const ele = document.querySelector("#_marketing-dev-root");

  if (ele) {
    mount(ele);
  }
}

// We are running through container and we should export the mount function
export { mount };
