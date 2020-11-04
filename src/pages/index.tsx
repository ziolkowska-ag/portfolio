import React from "react"
import Layout from "../shared-components/Layout"
import DecorativeSection from "./../pages-content/index/DecorativeSection"
import useWindowWidth from "../hooks/useWinWidth"

export default function Home() {
  const windowSize = useWindowWidth()

  return (
    <Layout title="HOME">
      {windowSize !== 0 && <DecorativeSection />}
    </Layout>
  )
}
