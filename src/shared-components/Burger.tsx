import React from "react"


interface IBurger {
    className?: string,
    onClick?: () => void,
}
const Burger = ({ className, onClick }: IBurger) => {
  return (
      <svg
        width="66"
        height="64"
        viewBox="0 0 66 64"
        fill="none" 
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="34" r="29.5" fill="none" stroke="#0E555B" />
        <circle cx="30" cy="30" r="29.5" stroke="#0E555B" />
        <line
          x1="23"
          y1="30.75"
          x2="43"
          y2="30.75"
          stroke="black"
          strokeWidth="0.5"
        />
        <line
          x1="23"
          y1="35.75"
          x2="43"
          y2="35.75"
          stroke="black"
          strokeWidth="0.5"
        />
      </svg>
  )
}

export default Burger
