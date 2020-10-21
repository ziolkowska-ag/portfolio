import React from "react"
import styled from "styled-components"
import Layout from "../shared-components/Layout"
import CV from "../shared-components/CV"
import Me from "./../assets/ja.jpg"
import CVFile from "./../assets/other/agnieszka_ziolkowska.pdf"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const StyledPicture = styled.img`
  width: 15vw;
  border-radius: 5%;
  filter: drop-shadow(8px 8px 10px #0e555b);
  margin-right: 70px;
`
const AboutMe = styled.div``

const StyledCV = styled(CV)`
`;

export default function About() {
  return (
    <Layout title="ABOUT">
      <Wrapper>
        <StyledPicture src={Me} alt="Photo of the author" />
        <AboutMe>
          <h2>Hello, I am Agnieszka</h2>
          <p>I am a front-end developer based in Poland</p>
          <p>I have experience with bulding React based webapps and websites</p>
          <p>...</p>
          <p>And here is more about me (dowload CV):</p>
          <a href={CVFile} download><StyledCV /></a>
        </AboutMe>
      </Wrapper>
    </Layout>
  )
}
