import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import Global from "./styled/global";
import NormalTheme from "./styled/NormalTheme";

ReactDOM.render(
  <ThemeProvider theme={NormalTheme}>
    <Global />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
