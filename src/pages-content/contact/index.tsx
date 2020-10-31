import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TweenMax } from "gsap"
import Contact from "../../shared-components/Contact"
import GitHub from "../../shared-components/GitHub"
import LinkedIn from "../../shared-components/LinkedIn"

const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;

  & p {
    font-size: 24px;
  }
`

const StyledContact = styled(Contact)`
  width: 80px;
  height: auto;
  margin: 10px 0 20px;
`

const StyledLinked = styled(LinkedIn)`
  width: 80px;
  height: auto;
  margin: 10px 0 20px;
`

const StyledGit = styled(GitHub)`
  width: 80px;
  height: auto;
  margin: 10px 0 20px;
`

const ContactContant = () => {
  let contact = useRef()
  let linked = useRef()
  let github = useRef()

  useEffect(() => {
    TweenMax.fromTo(
      contact,
      2,
      { opacity: "0", x: "150" },
      { opacity: "1", x: "0" }
    )
    TweenMax.fromTo(
      linked,
      2,
      { opacity: "0", x: "-150" },
      { opacity: "1", x: "0" },
    )
    TweenMax.fromTo(
      github,
      2,
      { opacity: "0", x: "150" },
      { opacity: "1", x: "0" }
    )
  }, [])

  return (
    <MainWrapper>
      <Wrapper>
        <p
          ref={element => {
            contact = element
          }}
        >
          Contact me here:
        </p>
        <StyledContact />
      </Wrapper>
      <Wrapper>
        <p
          ref={element => {
            linked = element
          }}
        >
          or here:
        </p>
        <StyledLinked />
      </Wrapper>
      <Wrapper>
        <p
          ref={element => {
            github = element
          }}
        >
          Or find me here:
        </p>

        <StyledGit />
      </Wrapper>
    </MainWrapper>
  )
}

export default ContactContant
