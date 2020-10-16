import React from "react"
import styled from "styled-components"
import Burger from "../../shared-components/burger"
import Contact from "../../shared-components/contact"
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

const StyledContact = styled(Contact)`
  height: 50px;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;

  @media (max-width: 855px) {
    right: unset;
    left: 0;
  }

  @media (max-width: 505px) {
    display: none;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledBurger />
        <Navigation />
      </Nav>
      <DecorativeSection />
      <StyledContact />
    </Wrapper>
  )
}

export default Main