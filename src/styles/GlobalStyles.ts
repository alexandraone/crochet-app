import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  padding: 0;
  background-color: #f7f7f7;

}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, p {
  padding: 0;
  margin: 0;
}

h1,h2,h3 {
  font-family: 'Verdana';
}

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

html, body {
  font-family: 'Cormorant Garamond', 'Arial';
  font-weight: 500;

}

`;

export default GlobalStyle;
