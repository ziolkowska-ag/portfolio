import React from "react"
import styled from "styled-components"
import useWindowWidth from "../hooks/useWinWidth"
import Layout from "../shared-components/Layout"
import ErrorCompotent from "../shared-components/ErrorCompotent"

const StyledErrorCompotent = styled(ErrorCompotent)`
  width: 70vw;
  margin: 5vh auto 0;
`

export default function ErrorPage() {
  const windowSize = useWindowWidth()

  return (
    <Layout title="404">
      {windowSize !== 0 && (
      <StyledErrorCompotent />
      )}
    </Layout>
  )
}
