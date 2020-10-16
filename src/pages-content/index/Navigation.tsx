import React from "react"
import styled from "styled-components"

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

const ListItem = styled.li`
  font-size: 1.75rem;
  cursor: pointer;
`

interface INavigation {
  className?: string
}

const Navigation = ({ className }: INavigation) => {
  return (
    <StyledList>
      <ListItem>HOME</ListItem>
      <ListItem>ABOUT</ListItem>
      <ListItem>CONTACT</ListItem>
    </StyledList>
  )
}

export default Navigation
