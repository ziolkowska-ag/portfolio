import React, { useEffect, useRef } from "react"
import gsap, { TweenMax } from "gsap"
import styled from "styled-components"
import Sapiens from "./Sapiens"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 1150px) and (min-width: 1025px) {
    top: 10%;
  }
`

const TextWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 80vw;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 20%;
  right: 3%;

  @media (max-width: 1024px) {
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    align-items: flex-start;
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
const SpecialIntroText = styled.p<{ withBg?: boolean }>`
  background: ${({ withBg }) => (withBg ? "#0e555b" : "")};
  color: ${({ withBg }) => (withBg ? "#e0e0e0" : "#0e555b")};
  text-align: end;
  font-size: 4.5vw;

  @media (max-width: 1024px) {
    font-size: 8vw;
  }

  text-transform: uppercase;
  line-height: initial;
  letter-spacing: 0.3em;
  word-spacing: 9999999px;
  padding: 0 10px;
  border-bottom: ${({ withBg }) => (withBg ? "none" : "1px solid #0e555b")};
`;

interface IDecorativeSection {
  className?: string
}

const DecorativeSection = ({ className }: IDecorativeSection) => {
  let agnieszka = useRef() as React.MutableRefObject<HTMLInputElement>
  let ziolkowska = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    TweenMax.fromTo(
      agnieszka.current,
      2,
      { opacity: "0", x: "150" },
      { opacity: "1", x: "0" }
    )
    TweenMax.fromTo(
      ziolkowska.current,
      2,
      { opacity: "0", x: "-150" },
      { opacity: "1", x: "0" }
    )
  }, [])

  return (
    <Wrapper className={className}>
      <Sapiens />
      <TextWrapper>
        <SpecialIntroText
          withBg
          ref={(element: HTMLInputElement) => {
            agnieszka.current = element
          }}
        >
          Agnieszka
        </SpecialIntroText>
        <SpecialIntroText
          ref={(element: HTMLInputElement) => {
            ziolkowska.current = element
          }}
        >
          Ziolkowska
        </SpecialIntroText>
        <IntroText>a front-end developer</IntroText>
      </TextWrapper>
    </Wrapper>
  )
}

export default DecorativeSection
