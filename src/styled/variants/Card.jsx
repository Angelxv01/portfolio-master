import { css } from "styled-components";
import { Cover } from "../unstyled/Card";

export const someCard = css`
  grid-auto-flow: row;
  grid-template-columns: max-content auto;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "cover header" "cover body";
  width: 80%;
  margin: 1em auto;
  padding: 2em;
  gap: 1em;
  border-radius: 0.5em;
  background-color: white;
  ${Cover} {
    display: block;
  }
`;

export const cssCover = css`
  width: 300px;
  aspect-ratio: 1;
  object-position: center;
  object-fit: cover;
`;
