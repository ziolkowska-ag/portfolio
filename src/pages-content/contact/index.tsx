import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
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
`

const StyledContact = styled(Contact)`
  width: 40px;
  height: auto;
  margin: 10px 0 20px;
`

const StyledLinked = styled(LinkedIn)`
  width: 40px;
  height: auto;
  margin: 10px 0 20px;
`

const StyledGit = styled(GitHub)`
  width: 40px;
  height: auto;
  margin: 10px 0 20px;
`

const ContactContant = () => {
  return (
    <MainWrapper>
      <Wrapper>
        Contact me here:
        <StyledContact />
      </Wrapper>
      <Wrapper>
        Find me here:
        <StyledLinked />
      </Wrapper>
      <Wrapper>
        Take a look at my code here:
        <StyledGit />
      </Wrapper>
    </MainWrapper>
  )
}

export default ContactContant
