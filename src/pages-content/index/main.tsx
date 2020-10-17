import React from "react"
import styled from "styled-components"
import Burger from "../../shared-components/burger"
import Socials from "../../shared-components/Socials"
import DecorativeSection from "./DecorativeSection"
import Navigation from "./Navigation"


const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const StyledBurger = styled(Burger)`
  margin: 20px;
  cursor: pointer;
  visibility: hidden;

  @media (max-width: 855px) {
    visibility: visible;
  }
`

const Main = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledBurger />
        <Navigation />
      </Nav>
      <DecorativeSection />
      <Socials />
    </Wrapper>
  )
}

export default Main
