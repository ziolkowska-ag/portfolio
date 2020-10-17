import React from "react"
import Main from "../pages-content/index/Main"
import GlobalStyle from "./../globalStyles"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - home</title>
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
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle theme="green" />
      <Main />
    </main>
  )
}
