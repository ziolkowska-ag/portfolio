import React from "react"
import styled from "styled-components"
import Arrow from "../../shared-components/Arrow"
import Burger from "../../shared-components/burger"
import Contact from "../../shared-components/contact"
import DecorativeSection from "./DecorativeSection"


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
`

const StyledContact = styled(Contact)`
  height: 50px;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
`;

const Main = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledBurger />
      </Nav>
      <DecorativeSection />
      <StyledContact />
    </Wrapper>
  )
}

export default Main
