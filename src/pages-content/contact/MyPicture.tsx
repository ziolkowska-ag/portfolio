import React from "react"
import styled from "styled-components"
import ReactIcon from "./../../shared-components/React"
import Me from "./../../assets/ja.jpg"

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  max-width: 200px;
`

const StyledPicture = styled.img`
  max-width: 200px;
  border-radius: 15%;
  filter: drop-shadow(8px 8px 10px #0e555b);
  margin-right: 40px;

  @media (max-width: 570px) {
    margin: 10px auto;
  }
`

const StyledReactIcon = styled(ReactIcon)`
  position: absolute;
  left: -10px;
  top: -35px;
`
const MyPicture = () => {
  return (
    <Wrapper>
      <StyledPicture src={Me} alt="Photo of the author" />
      <StyledReactIcon />
    </Wrapper>
  )
}

export default MyPicture
