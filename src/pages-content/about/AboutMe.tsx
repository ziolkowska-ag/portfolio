import React from "react"
import styled from "styled-components"
import CV from "../../shared-components/CV"
// @ts-ignore - temp solution
import CVFile from "./../../assets/other/agnieszka_ziolkowska.pdf"

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
  line-height: 2rem;

  border-right: 0.5px solid #0e555b;
  border-left: 0.5px solid #0e555b;

  @media (max-width: 570px) {
    text-align: center;
    margin-top: 30px;
  }
`

const StyledTitle = styled.h1`
  text-transform: uppercase;
`

const HighlightedText = styled.span`
  font-style: italic;
  font-size: 20px;
  background: #0e555b;
  color: #fffff0;
  padding: 0 5px;
`

const CVWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  width: 200px;
  text-align: right;

  a {
    color: #0e555b;
    text-decoration: none;
  }
`

const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Hello, </StyledTitle>
        <p>I am an aspiring front-end developer based in </p>
        <HighlightedText>Gdańsk, Poland</HighlightedText>
        <p>I have experience in bulding React based webapps and websites -</p>
        <p>using both <HighlightedText>JS and TS</HighlightedText> ,</p>
        <p>
          making use of <HighlightedText>css-in-js</HighlightedText> solutions,
          mainly styled-components,
        </p>
        <p>
          writing unit tests with <HighlightedText>Cypress</HighlightedText>{" "}
          framework,
        </p>
        <p>
          bringing to life beautiful designs based on{" "}
          <HighlightedText>Figma</HighlightedText> projects,
        </p>
        <p>.. and all that while knowing how to <HighlightedText>Scrum</HighlightedText></p>
      </Wrapper>
      <CVWrapper>
        <a href={CVFile} download>
          <p>You can download my <HighlightedText>resume</HighlightedText> here:</p>
          <CV />
        </a>
      </CVWrapper>
    </>
  )
}

export default AboutMe
