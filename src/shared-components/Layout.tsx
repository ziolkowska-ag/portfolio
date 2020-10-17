import React from "react"
import styled from "styled-components"
import GlobalStyle from "../globalStyles"
import { Helmet } from "react-helmet"
import Navigation from "./Navigation"
import Burger from "./Burger"
import Socials from "./Socials"

const MainWrapper = styled.div`
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
  visibility: hidden;

  @media (max-width: 855px) {
    visibility: visible;
  }
`

interface ILayout {
  children: React.ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <MainWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - aboue</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle theme="green" />
      <Nav id="nav">
        <StyledBurger />
        <Navigation />
      </Nav>
      {children}
      <Socials />
    </MainWrapper>
  )
}

export default Layout
