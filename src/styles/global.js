import { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Josefin+Sans:wght@300&family=Raleway:wght@400;500&family=Roboto:wght@300&display=swap'); */

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Raleway', 'Fredoka', 'Josefin Sans', sans-serif;
  }

  html, body, #root{
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

  h1, h2, h3, h4, h5, h6 {
      font-size: 1rem;
      font-weight: 400;
  }

  
  h1 {
      font-size: ${theme.fontSizes.$5xl};
      @media only screen and (max-width: ${theme.breakpoints.$lg}){
          font-size: ${theme.fontSizes.$4xl};

      }
      @media only screen and  (max-width: ${theme.breakpoints.$md}){
          font-size: ${theme.fontSizes.$3xl};
      }   
      @media only screen and  (max-width: ${theme.breakpoints.$sm}){
          font-size: ${theme.fontSizes.$2xl};
      }   
  }

  h2{
      font-size: ${theme.fontSizes.$4xl};
      @media only screen and (max-width: ${theme.breakpoints.$lg}){
          font-size: ${theme.fontSizes.$3xl};
      }
      @media only screen and (max-width: ${theme.breakpoints.$md}){
          font-size: ${theme.fontSizes.$2xl};
      }
      @media only screen and  (max-width: ${theme.breakpoints.$sm}){
          font-size: ${theme.fontSizes.$xl};
      }  
  }

  h3{
      font-size: ${theme.fontSizes.$3xl};
      @media only screen and (max-width: ${theme.breakpoints.$lg}){
          font-size: ${theme.fontSizes.$xl};
      }
      @media only screen and (max-width: ${theme.breakpoints.$md}){
          font-size: ${theme.fontSizes.$xl};
      }
      @media only screen and  (max-width: ${theme.breakpoints.$sm}){
          font-size: ${theme.fontSizes.$lg};
      }  
  }

  h4{
      font-size: ${theme.fontSizes.$2xl};
      @media only screen and (max-width: ${theme.breakpoints.$lg}){
          font-size: ${theme.fontSizes.$xl};
      }
      @media only screen and (max-width: ${theme.breakpoints.$md}){
          font-size: ${theme.fontSizes.$lg};
      }
      @media only screen and  (max-width: ${theme.breakpoints.$sm}){
          font-size: ${theme.fontSizes.$md};
      }  
  }

  h5 {
      font-size: ${theme.fontSizes.$xl};
      @media only screen and (max-width: ${theme.breakpoints.$lg}){
          font-size: ${theme.fontSizes.$lg};
      }
      @media only screen and (max-width: ${theme.breakpoints.$md}){
          font-size: ${theme.fontSizes.$md};
      }
      @media only screen and  (max-width: ${theme.breakpoints.$sm}){
          font-size: ${theme.fontSizes.$sm};
      }  
  }


`;

export default GlobalStyles;
