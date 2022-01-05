import { css } from "styled-components";
import { Cover } from "../unstyled/Card";

export const someCard = css`
  grid-auto-flow: row;
  grid-template-columns: max-content auto;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "cover header" "cover body";
  min-width: 60%;
  margin: 1em auto;
  padding: 2em;
  gap: 1em;
  border-radius: 0.5em;
  background-color: #ededed;
  & > ${Cover} {
    display: block;
  }
`;

export const otherCard = css`
  max-width: 20em;
  margin: 1em auto;
  padding: 1.5em;
  gap: 1em;
  border-radius: 0.5em;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "cover" "header" "body";
  & > ${Cover} {
    display: block;
  }
`;

export const cssCover = css`
  aspect-ratio: 1;
  object-position: center;
  object-fit: cover;
  border-radius: 0.5em;
`;
