import React from "react"
import Main from "../pages-content/index/Main"
import GlobalStyle from './../globalStyles';
import { Helmet } from "react-helmet"


export default function Home() {
  return (
    <main>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio - home</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle theme="green"/>
      <Main />
    </main>
  )
}
