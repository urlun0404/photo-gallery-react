import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Josefin+Sans:wght@300&family=Raleway:wght@400;500&family=Roboto:wght@300&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Raleway', 'Fredoka', 'Josefin Sans', sans-serif;
  }

  html, body{
    width: 100%;
    height: 100%;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  ul {
    list-style-type: none;
  }

  input {
    &:focus{
      outline:none
    }
  }

`;

export default GlobalStyles;
