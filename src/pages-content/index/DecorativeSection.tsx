import React from "react"
import styled from "styled-components"
import Sapiens from "./../../assets/sapiens.png"
import Quote from "./Quote"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledImg = styled.img`
  height: 750px;
  filter: drop-shadow(2px 4px 6px grey);
`

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 20%;
  flex-direction: column;
  align-items: flex-end;
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
      <StyledImg src={Sapiens} />={" "}
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
