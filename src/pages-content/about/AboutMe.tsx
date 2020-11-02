import React from "react"
import styled from "styled-components"
import CV from "../../shared-components/CV"
// @ts-ignore - temp solution 
import CVFile from "./../../assets/other/agnieszka_ziolkowska.pdf"


const Wrapper = styled.div`
  text-align: right;
  padding: 30px;

  @media (max-width: 570px) {
      text-align: center;
      margin-top: 30px;
  }
`

const AboutMe = () => {
  return (
    <Wrapper>
      <h2>Hello, I am Agnieszka</h2>
      <p>I am a front-end developer based in Poland</p>
      <p>I have experience with bulding React</p>
      <p>based webapps and websites</p>
      <p>...</p>
      <p>And here is more about me (dowload CV):</p>
      <a href={CVFile} download>
        <CV />
      </a>
    </Wrapper>
  )
}

export default AboutMe
