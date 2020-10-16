import React from "react"

interface IContact {
  className?: string
}

const Contact = ({ className }: IContact) => {
  return (
    <a href="mailto:ziolkowska.ag@gmail.com">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 203.97 198.38"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0E555B"
          d="M197.045,181.055H6.926c-3.819,0-6.926-3.106-6.926-6.925V35.235c0-0.8,0.477-1.523,1.211-1.838
       c0.736-0.315,1.588-0.162,2.167,0.389l98.607,93.749l98.606-93.749c0.579-0.551,1.432-0.704,2.167-0.389
       c0.734,0.315,1.211,1.038,1.211,1.838V174.13C203.97,177.949,200.863,181.055,197.045,181.055 M4,39.896V174.13
       c0,1.613,1.312,2.925,2.926,2.925h190.119c1.612,0,2.925-1.312,2.925-2.925V39.896l-96.606,91.848c-0.772,0.734-1.984,0.734-2.756,0
       L4,39.896z"
        />
        <path
          fill="#0E555B"
          d="M101.986,132.294c-0.496,0-0.992-0.184-1.378-0.551L0.623,36.684c-0.398-0.377-0.622-0.901-0.622-1.449
       c0-3.818,3.107-6.925,6.926-6.925h190.118c3.818,0,6.925,3.107,6.925,6.925c0,0.548-0.225,1.072-0.622,1.449l-99.984,95.06
       C102.978,132.11,102.482,132.294,101.986,132.294 M4.101,34.472l97.885,93.063l97.883-93.063c-0.336-1.244-1.476-2.162-2.824-2.162
       H6.927C5.577,32.31,4.438,33.228,4.101,34.472 M201.97,35.234h0.01H201.97z"
        />
        <path
          fill="#0E555B"
          d="M197.044,181.055H6.926c-3.819,0-6.926-3.106-6.926-6.925c0-0.548,0.225-1.072,0.622-1.449l73.043-69.447
       c0.772-0.735,1.984-0.735,2.756,0l25.564,24.301l25.564-24.301c0.771-0.735,1.984-0.735,2.756,0l73.043,69.447
       c0.397,0.377,0.622,0.901,0.622,1.449C203.97,177.949,200.863,181.055,197.044,181.055 M4.101,174.893
       c0.336,1.244,1.476,2.162,2.825,2.162h190.118c1.349,0,2.489-0.918,2.825-2.162l-70.942-67.45l-25.563,24.301
       c-0.771,0.734-1.983,0.734-2.756,0l-25.564-24.301L4.101,174.893z"
        />
        <path
          fill="#0E555B"
          d="M148.529,45.854H86.47c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h62.06c1.104,0,2,0.896,2,2
       C150.529,44.959,149.634,45.854,148.529,45.854"
        />
        <path
          fill="#0E555B"
          d="M75.881,45.854h-20.44c-1.105,0-2-0.896-2-2c0-1.104,0.895-2,2-2h20.44c1.104,0,2,0.896,2,2
       C77.881,44.959,76.985,45.854,75.881,45.854"
        />
        <path
          fill="#0E555B"
          d="M14.807,128.354c-1.104,0-2-0.896-2-2V89.661c0-1.105,0.896-2,2-2s2,0.895,2,2v36.693
       C16.807,127.458,15.911,128.354,14.807,128.354"
        />
      </svg>
    </a>
  )
}

export default Contact
