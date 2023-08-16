import { createGlobalStyle } from "styled-components";
import fonts from "google-fonts";

fonts.add({
  'Poppins': ['400', '400Regular']
})

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
  }
  html,body, #root{
    height: 100%;
  }
  body{
    background-color: #2B1887;
    color: #333;
  }
  ul{
    list-style: none;
  }
  p{
    color: white
  }
`;