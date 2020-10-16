import React from "react"

interface IArrow {
  className?: string
}

const Arrow = ({ className }: IArrow) => {
  return (
    <svg
      width="664"
      height="25"
      viewBox="0 0 664 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M463.115 13.0582C463.699 12.4711 463.697 11.5214 463.11 10.9369L453.543 1.41266C452.956 0.828208 452.006 0.830363 451.421 1.41748C450.837 2.00459 450.839 2.95434 451.426 3.53879L459.931 12.0048L451.465 20.5093C450.88 21.0964 450.882 22.0462 451.469 22.6306C452.057 23.2151 453.006 23.2129 453.591 22.6258L463.115 13.0582ZM1.0034 14.5461L462.055 13.5L462.049 10.5L0.996597 11.5461L1.0034 14.5461Z"
        fill="#0E555B"
      />
    </svg>
  )
}

export default Arrow
