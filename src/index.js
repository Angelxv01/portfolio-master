import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "styled-components";
import NormalTheme from "./styled/NormalTheme";

ReactDOM.render(
  <ThemeProvider theme={NormalTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
