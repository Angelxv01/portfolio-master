import { css, useTheme } from "styled-components";

export function fs(key) {
  return css`
    font-size: ${(props) => props.theme.font.size[key] || "unset"};
  `;
}

export function fw(key) {
  return css`
    font-weight: ${(props) => props.theme.font.weight[key] || "unset"};
  `;
}

export function ff(key) {
  return css`
    font-family: ${(props) => props.theme.font.family[key] || "unset"};
  `;
}

export function lh(key) {
  return css`
    line-height: ${(props) => props.theme.lineHeight[key] || "unset"};
  `;
}
