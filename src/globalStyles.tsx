import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: ${props => (props.theme === "green" ? "#0E555B" : "white")};
    height: 100vh;
    overflow: hidden;
    background-color: #FFFFF0;

  }

  .hide {
      display: none;
  }
`
export default GlobalStyle
