import React from "react"
import styled from "styled-components"
import MyPicture from "../pages-content/about/MyPicture"
import AboutMe from "../pages-content/about/AboutMe"
import Layout from "../shared-components/Layout"
import Socials from "../shared-components/Socials"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (max-width: 1230px) {
    flex-direction: column;
    top: 80%;
  }
`

const StyledSocials = styled(Socials)`
  margin-top: 20px;

  @media (max-width: 1230px) {
    bottom: -65%;
  }
`

export default function About() {
  return (
    // temporary solution for socials section, waiting to implements redux/ or other solution
    <Layout title="ABOUT" hideSocials>
      <Wrapper>
        <MyPicture />
        <AboutMe />
      </Wrapper>
      <StyledSocials />
    </Layout>
  )
}
