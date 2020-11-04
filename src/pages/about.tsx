import React from "react"
import styled from "styled-components"
import Layout from "../shared-components/Layout"
import MyPicture from "../pages-content/about/MyPicture"
import AboutMe from "../pages-content/about/AboutMe"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (max-width: 570px) {
    flex-direction: column;
  }
`

export default function About() {
  return (
    <Layout title="ABOUT">
      <Wrapper>
        <MyPicture />
        <AboutMe />
      </Wrapper>
    </Layout>
  )
}
