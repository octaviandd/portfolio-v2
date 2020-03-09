/** @format */
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 92.5%;
    height: 100%;
  }

  body {
    background-color: #c76972;
    box-sizing: border-box;
    font-family: "Sen", sans-serif;
  }

  .color-border{
    color: white;
  }


`;

export default GlobalStyles;
