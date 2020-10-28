import React from "react"
import styled from "styled-components"
import Contact from "./Contact"
import GitHub from "./GitHub"
import LinkedIn from "./LinkedIn"

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-bottom: 10px;
  right: 20px;
  bottom: 0;

  @media (max-width: 415px) {
    width: 90%;
    right: 50%;
    transform: translateX(50%);
  }
`

const StyledContact = styled(Contact)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`

const StyledLinkedIn = styled(LinkedIn)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`

const StyledGithub = styled(GitHub)`
  height: 40px;
  width: 40px;
  cursor: pointer;
`

interface ISocials {
  className?: string
  isWhite?: boolean
}

const Socials = ({ className, isWhite }: ISocials) => {
  return (
    <Wrapper className={className}>
      <StyledContact color={isWhite ? "white" : undefined} />
      <StyledLinkedIn />
      <StyledGithub />
    </Wrapper>
  )
}

export default Socials
