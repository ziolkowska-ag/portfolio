import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  position: absolute;
  right: 3%;
  top: 20px;
  z-index: 999;

  @media (max-width: 855px) {
    display: none;
  }
`

const ListItem = styled(AniLink)`
  font-size: 1.75rem;
  text-decoration: none;
  color: #0E555B;
`

interface INavigation {
  className?: string
}

const Navigation = ({ className }: INavigation) => {
  return (
    <StyledList className={className}>
      <ListItem paintDrip to="/" hex="#0E555B">HOME</ListItem>
      <ListItem paintDrip to="/about" hex="#0E555B">ABOUT</ListItem>
      <ListItem paintDrip to="/contact" hex="#0E555B">CONTACT</ListItem>
    </StyledList>
  )
}

export default Navigation
