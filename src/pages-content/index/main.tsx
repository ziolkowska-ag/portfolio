import React from "react"
import styled from "styled-components"
import Arrow from "../../shared-components/Arrow"
import Burger from "../../shared-components/burger"
import Contact from "../../shared-components/contact"
import Sapiens from "./../../assets/sapiens.png"

const Wrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  position: relative;
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

const StyledArrow = styled(Arrow)`
  position: absolute;
  bottom: 35%;
  right: 10%;
  `;

const StyledImg = styled.img`
  height: 750px;
  filter: drop-shadow(2px 4px 6px grey);
`;

const Main = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledBurger />
      </Nav>
      <StyledImg src={Sapiens} />
      <StyledArrow />
      <StyledContact />
    </Wrapper>
  )
}

export default Main
