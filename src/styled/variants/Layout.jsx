import { css } from "styled-components";

export const Flow = css`
  *:where(:not(:first-child)) {
    margin-top: ${({ space }) => space || "1em"};
  }
`;
