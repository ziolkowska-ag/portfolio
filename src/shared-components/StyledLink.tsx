import React from "react"
import styled from "styled-components"

const Link = styled.a`
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`

interface IStyledLink {
  children?: React.ReactNode
  className?: string
  href?: string
  target?: string
}
const StyledLink = ({ children, className, href, target }: IStyledLink) => (
  <Link href={href} target={target} className={className}>{children}</Link>
)

export default StyledLink
