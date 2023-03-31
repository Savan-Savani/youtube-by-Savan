import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./_base.scss";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <Helmet>
      <meta
        name="google-site-verification"
        content="YKCJ7R1TzohJNu5er1VY0HqotmCCXiRXvzfxDdTsBlQ"
      />
    </Helmet>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </div>
);
