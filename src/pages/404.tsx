import React from "react"
import styled from "styled-components"
import Layout from "../shared-components/Layout"
import ErrorCompotent from '../shared-components/ErrorCompotent'


const StyledErrorCompotent = styled(ErrorCompotent)`
    width: 70vw;
    margin: 5vh auto 0;
`;

export default function ErrorPage() {
  return (
    <Layout title="404">
        <StyledErrorCompotent />
    </Layout>
  )
}
