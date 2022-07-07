import React from "react";
import ReactDOM from "react-dom";

// router
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";

// styles
import "./assets/styles/fonts.fontawesome.min.css";
import "./assets/styles/main.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
