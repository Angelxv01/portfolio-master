import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import Theme from "./styled/Theme";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
