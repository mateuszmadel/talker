import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin:0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }
  @media screen and (max-width: 480px){
    html,body{
      overflow-x: hidden;
    }
  }
`;

export default GlobalStyle;
