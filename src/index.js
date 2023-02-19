import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
