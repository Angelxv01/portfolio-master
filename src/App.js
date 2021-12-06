import React from "react";
import styled from "styled-components";
import { ff, fs, fw } from "./styled/helpers/typography";

const StyledUser = styled.div`
  ${fs("TITLE")}
  ${fw("SEMI_BOLD")}
`;

function App() {
  return <StyledUser>Hello</StyledUser>;
}

export default App;
