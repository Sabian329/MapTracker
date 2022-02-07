import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./app/Root/Root";
import { store } from "./app/Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
