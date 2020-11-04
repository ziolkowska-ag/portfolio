import React from "react"
import useWindowWidth from "../hooks/useWinWidth"
import Layout from "../shared-components/Layout"
import ContactContent from "../pages-content/contact/index"

export default function Contact() {
  const windowSize = useWindowWidth()

  return (
    <Layout title="CONTACT" hideSocials>
      {windowSize !== 0 && <ContactContent />}
    </Layout>
  )
}
