import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
      box-sizing: border-box;
      outline: 0px;
      border: 0px;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    button {
      outline: 0;
      border: 0;
      cursor: pointer;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
      width: 100%;
      height: 100%;
      background-color: #eaeaea;
    }

    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    src: url('https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf') format('truetype');
  }

  h1,h2,h3,h4,h5,h6,p,div,input,button{
    font-family: 'Roboto';
  }
`