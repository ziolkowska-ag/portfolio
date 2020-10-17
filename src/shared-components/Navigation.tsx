import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  position: absolute;
  right: 3%;
  top: 20px;

  @media (max-width: 855px) {
    display: none;
  }
`

const ListItem = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
  color: #0E555B;
`

interface INavigation {
  className?: string
}

const Navigation = ({ className }: INavigation) => {
  return (
    <StyledList>
      <ListItem to="/">HOME</ListItem>
      <ListItem to="/about">ABOUT</ListItem>
      <ListItem to="/contact">CONTACT</ListItem>
    </StyledList>
  )
}

export default Navigation
