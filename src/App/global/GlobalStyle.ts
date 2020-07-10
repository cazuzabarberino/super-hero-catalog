import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.color.secondary};
    color:  ${({ theme }) => theme.color.fontSecondary};
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
