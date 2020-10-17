import React from "react"
import styled from "styled-components"
import Sapiens from "./../../assets/sapiens.png"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 1150px) and (min-width: 1025px) {
    top: 10%;
  }
`

const StyledImg = styled.img`
  height: 100vh;
  filter: drop-shadow(2px 4px 6px grey);
  position: absolute;
  left: -3%;
  top: -10%;

  @media (max-width: 1450px) {
    height: 80vh;
    top: 0;
    left: 0;
  }

  @media (max-width: 1150px) {
    height: 50vh;
    top: -5%;
    left: 0;
  }

  @media (max-width: 570px) {
    height: 35vh;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 415px) {
    height: 25vh;
    top: 0;
  }
`

const TextWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 3%;

  @media (max-width: 1024px) {
    top: 25%;
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

  @media (max-width: 540px) {
    top: 35%;
  }

  @media (max-width: 415px) {
    left: 50%;
    top: 30%;
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
    font-size: ${({ size }) => (size ? "1.75rem" : "1.25rem")};
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
        <IntroText size="3rem" className="hide">
          &lt;Hola /&gt;
        </IntroText>
        <IntroText size="3rem" className="hide">
          &lt;Cześć /&gt;
        </IntroText>
        <IntroText size="3rem" className="hide">
          &lt;Ciao /&gt;
        </IntroText>

        <IntroText>I’m Agnieszka,</IntroText>
        <IntroText>a front-end developer</IntroText>
        <IntroText>with a passion</IntroText>
        <IntroText>for simplistic and modern UI</IntroText>
      </TextWrapper>
    </Wrapper>
  )
}

export default DecorativeSection
