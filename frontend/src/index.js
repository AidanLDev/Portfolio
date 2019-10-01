import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import App from "./containers/App";

import "./index.css";

const app = (
  <HttpsRedirect>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HttpsRedirect>
);

ReactDOM.render(app, document.getElementById("root"));
