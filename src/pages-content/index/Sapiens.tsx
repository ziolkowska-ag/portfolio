import React, { useEffect, useRef } from "react"
import { TweenMax } from "gsap"
import styled from "styled-components"
// @ts-ignore - temp solution 
import pic from "./../../assets/sapiens.png"

const StyledImg = styled.img`
  height: 95vh;
  filter: drop-shadow(2px 4px 6px grey);

  position: absolute;
  left: -3%;
  top: -10%;

  @media (max-width: 1450px) {
    height: 80vh;
    top: 0;
    left: 0;
  }

  @media (max-width: 1150px) {
    height: 50vh;
    top: -5%;
    left: 0;
  }

  @media (max-width: 570px) {
    height: 35vh;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 415px) {
    height: 30vh;
  }
`
interface ISapiens {
  className?: string
}

const Sapiens = ({ className }: ISapiens) => {
  let sapiens = useRef() as React.MutableRefObject<HTMLImageElement>

  useEffect(() => {
    TweenMax.fromTo(sapiens.current, 2, { opacity: 0 }, { opacity: 1 })
  }, [])

  return (
    <StyledImg
      src={pic}
      ref={(element: HTMLImageElement) => (sapiens.current = element)}
      className={className}
    />
  )
}

export default Sapiens
