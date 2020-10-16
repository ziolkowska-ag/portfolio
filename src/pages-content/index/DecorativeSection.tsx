import React from "react"
import styled from "styled-components"
import Sapiens from "./../../assets/sapiens.png"


const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const StyledImg = styled.img`
  height: 100vh;
  filter: drop-shadow(2px 4px 6px grey);
  position: absolute;
  left: -5%;
  top: -10%;
`

const TextWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 3%;
  top: 5%;
`

const IntroText = styled.p<{ size?: string }>`
  font-size: ${({ size }) => (size ? size : "36px")};
  line-height: 2.5em;
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
        <IntroText size="48px">&lt;Hello /&gt;</IntroText>
        <IntroText>I’m Agnieszka,</IntroText>
        <IntroText>a front-end developer</IntroText>
        <IntroText>with a passion</IntroText>
        <IntroText>for simplistic and modern UI</IntroText>
      </TextWrapper>
    </Wrapper>
  )
}

export default DecorativeSection
