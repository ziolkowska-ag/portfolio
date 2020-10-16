import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: ${props => (props.theme === "green" ? "green" : "white")};
    height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyle
