import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import "../fonts/fonts.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Navigation from "./Navigation"
import Burger from "./Burger"
import Socials from "./Socials"


const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat-Thin', sans-serif;
  }

  body {
    color: ${props => (props.theme === "green" ? "#0E555B" : "white")};
    height: 100vh;
    overflow: hidden;
    background-color: #FFFFF0;

  }

  .hide {
      display: none;
  }
`

const MainWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  z-index: 99;
`

const StyledBurger = styled(Burger)`
  margin: 20px;
  cursor: pointer;
  visibility: hidden;

  @media (max-width: 855px) {
    visibility: visible;
  }
`

const BurgerMenu = styled.div<{ display: string }>`
  height: 100vh;
  width: 100%;
  background: #0e555b;
  display: ${({ display }) => display};
  flex-direction: column;
`

const ListItem = styled(Link)`
  margin-top: 50px;
  margin-left: 10px;
  font-size: 2.75rem;
  text-decoration: none;
  color: white;
`

interface ILayout {
  children: React.ReactNode,
  title: string,
  hideSocials?: boolean,
}

const Layout = ({ children, title, hideSocials = false }: ILayout) => {
  const [openMenu, setIsOpenMenu] = useState(false);

  return (
    <MainWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | {title}</title>
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
        <StyledBurger onClick={() => setIsOpenMenu(!openMenu)} />
        <BurgerMenu display={!openMenu ? 'none' : 'flex'}>
          <ListItem to="/">HOME</ListItem>
          <ListItem to="/about">ABOUT</ListItem>
          <ListItem to="/contact">CONTACT</ListItem>
        </BurgerMenu>
        <Navigation />
      </Nav>
      {children}
      {!hideSocials && <Socials isWhite={openMenu && document.body.offsetWidth > 400} />}
    </MainWrapper>
  )
}

export default Layout
