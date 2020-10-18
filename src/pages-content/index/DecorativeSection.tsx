import React, { useEffect, useRef } from "react"
import gsap, { TweenMax, Power2 } from "gsap"
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
  let sapiens = useRef()
  let hello = useRef()
  const tl = gsap.timeline({delay: 1.5, repeat:-1, repeatDelay:1});

  const changeText = () => {
    tl.fromTo(hello.current, {opacity: 0}, {opacity: 1, textContent: "<Hello />"})
    tl.fromTo(hello.current, {opacity: 0}, {opacity: 1, textContent: "<Hola />"}, "+=2")
    tl.fromTo(hello.current, {opacity: 0}, {opacity: 1, textContent: "<Ciao />"}, "+=2")
    tl.fromTo(hello.current, {opacity: 0}, {opacity: 1, textContent: "<Sault />"}, "+=2")    
  }

  useEffect(() => {
    TweenMax.fromTo(sapiens.current, 2, { opacity: 0 }, { opacity: 1 })
    changeText()
  }, [])

  return (
    <Wrapper className={className}>
      <StyledImg src={Sapiens} ref={input => (sapiens.current = input)} />
      <TextWrapper>
        <IntroText size="3rem" ref={input => (hello.current = input)}>
          &lt;Hello /&gt;
        </IntroText>
        <IntroText>I’m Agnieszka,</IntroText>
        <IntroText>a front-end developer</IntroText>
        <IntroText>with passion</IntroText>
        <IntroText>for simplistic and modern UI</IntroText>
      </TextWrapper>
    </Wrapper>
  )
}

export default DecorativeSection
