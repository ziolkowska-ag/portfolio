import React from "react"
import styled from "styled-components"
import Sapiens from "./../../assets/sapiens.png"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const StyledImg = styled.img`
  height: 100vh;
  filter: drop-shadow(2px 4px 6px grey);
  position: absolute;
  left: -5%;
  top: -10%;

  @media (max-width: 1335px) {
    height: 70vh;
    top: -5%;
    left: 0;
  }

  @media (max-width: 1150px) {
    height: 50vh;
    top: -5%;
    left: 0;
  }

  @media (max-width: 505px) {
    height: 40vh;
    top: 5%;
  }

  @media (max-width: 395px) {
    height: 30vh;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TextWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 3%;
  top: 5%;

  @media (max-width: 1024px) {
      top: 25%
  }

  @media (max-width: 855px) {
    height: 50vh;
    top: 35%;
  }

  @media (max-width: 623px) {
    top: 50%;
  }

  @media (max-width: 505px) {
    top: 55%;
  }

  @media (max-width: 395px) {
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    align-items: center;
  }
`

const IntroText = styled.p<{ size?: string }>`
  font-size: ${({ size }) => (size ? size : "2rem")};
  line-height: 2.5em;

  @media (max-width: 623px) {
    font-size: ${({ size }) => (size ? "2rem" : "1.5rem")};
  }

  @media (max-width: 395px) {
    font-size: ${({ size }) => (size ? "1.5rem" : "1rem")};
  }
`

interface IDecorativeSection {
  className?: string
}

const DecorativeSection = ({ className }: IDecorativeSection) => {
  return (
    <Wrapper>
      <StyledImg src={Sapiens} />
      <TextWrapper>
        {/* use the animation of different languages saying hello */}
        <IntroText size="3rem">&lt;Hello /&gt;</IntroText>
        <IntroText>I’m Agnieszka,</IntroText>
        <IntroText>a front-end developer</IntroText>
        <IntroText>with a passion</IntroText>
        <IntroText>for simplistic and modern UI</IntroText>
      </TextWrapper>
    </Wrapper>
  )
}

export default DecorativeSection
