import { css } from "styled-components";
import * as er from "@emotion/react";

export const commonStyles = css`
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem;
  transition: box-shadow 150ms ease-in-out;
  &:hover,
  &:focus-within {
    box-shadow: 0 0 0 5px #ffffff55;
  }
`;

export const linkButtonStyles = css`
  cursor: pointer;
  background-color: #7875ff;
  border: none;
  text-decoration: none;
  color: white;
  &:active {
    filter: brightness(70%);
  }
  ${commonStyles}
`;

export const buttonStyles = css`
  cursor: pointer;
  background-color: #7875ff;
  border: none;
  color: white;
  &:active {
    filter: brightness(70%);
  }
  ${commonStyles}
`;

export const videoStyles = er.css`
  background-color: black;
  object-fit: cover;
`;

export const globalStyles = er.css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #323232;
    color: white;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
