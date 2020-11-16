import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  padding: 0;
}

* {
  font-family: 'Sans Serif';
  box-sizing: inherit;
}

*::before,
*::after {
  box-sizing: inherit;
}

h1, h2, h3, h4, h5, p {
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  background: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;