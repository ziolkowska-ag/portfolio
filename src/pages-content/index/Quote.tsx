import React from "react"

interface IQuote {
  className?: string
}

const Quote = ({ className }: IQuote) => {
  return (
    <svg
      width="540"
      height="57"
      viewBox="0 0 540 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="540" height="57" fill="#0E555B" />
      <path
        d="M128.196 23.236C128.4 23.296 128.556 23.41 128.664 23.578C128.784 23.734 128.844 23.926 128.844 24.154C128.844 24.442 128.754 24.676 128.574 24.856C128.394 25.036 128.172 25.126 127.908 25.126C127.62 25.126 127.386 25.036 127.206 24.856C127.038 24.664 126.954 24.43 126.954 24.154C126.954 24.01 126.966 23.872 126.99 23.74C127.026 23.596 127.092 23.392 127.188 23.128L127.944 20.644H128.808L128.196 23.236ZM131.256 23.236C131.46 23.296 131.616 23.41 131.724 23.578C131.844 23.734 131.904 23.926 131.904 24.154C131.904 24.442 131.814 24.676 131.634 24.856C131.454 25.036 131.232 25.126 130.968 25.126C130.68 25.126 130.446 25.036 130.266 24.856C130.098 24.664 130.014 24.43 130.014 24.154C130.014 24.01 130.026 23.872 130.05 23.74C130.086 23.596 130.152 23.392 130.248 23.128L131.004 20.644H131.868L131.256 23.236ZM140.433 34.108C139.185 34.108 138.051 33.832 137.031 33.28C136.023 32.716 135.231 31.948 134.655 30.976C134.091 30.004 133.809 28.912 133.809 27.7C133.809 26.488 134.091 25.396 134.655 24.424C135.231 23.452 136.023 22.69 137.031 22.138C138.051 21.574 139.185 21.292 140.433 21.292C141.681 21.292 142.803 21.568 143.799 22.12C144.807 22.672 145.599 23.44 146.175 24.424C146.751 25.396 147.039 26.488 147.039 27.7C147.039 28.912 146.751 30.01 146.175 30.994C145.599 31.966 144.807 32.728 143.799 33.28C142.803 33.832 141.681 34.108 140.433 34.108ZM140.433 32.92C141.429 32.92 142.329 32.698 143.133 32.254C143.937 31.798 144.567 31.174 145.023 30.382C145.479 29.578 145.707 28.684 145.707 27.7C145.707 26.716 145.479 25.828 145.023 25.036C144.567 24.232 143.937 23.608 143.133 23.164C142.329 22.708 141.429 22.48 140.433 22.48C139.437 22.48 138.531 22.708 137.715 23.164C136.911 23.608 136.275 24.232 135.807 25.036C135.351 25.828 135.123 26.716 135.123 27.7C135.123 28.684 135.351 29.578 135.807 30.382C136.275 31.174 136.911 31.798 137.715 32.254C138.531 32.698 139.437 32.92 140.433 32.92ZM158.287 24.532V34H157.063V32.272C156.727 32.848 156.265 33.298 155.677 33.622C155.089 33.934 154.417 34.09 153.661 34.09C152.425 34.09 151.447 33.748 150.727 33.064C150.019 32.368 149.665 31.354 149.665 30.022V24.532H150.943V29.896C150.943 30.892 151.189 31.648 151.681 32.164C152.173 32.68 152.875 32.938 153.787 32.938C154.783 32.938 155.569 32.638 156.145 32.038C156.721 31.426 157.009 30.58 157.009 29.5V24.532H158.287ZM166.852 33.424C166.612 33.64 166.312 33.808 165.952 33.928C165.604 34.036 165.238 34.09 164.854 34.09C163.966 34.09 163.282 33.85 162.802 33.37C162.322 32.89 162.082 32.212 162.082 31.336V25.612H160.39V24.532H162.082V22.462H163.36V24.532H166.24V25.612H163.36V31.264C163.36 31.828 163.498 32.26 163.774 32.56C164.062 32.848 164.47 32.992 164.998 32.992C165.262 32.992 165.514 32.95 165.754 32.866C166.006 32.782 166.222 32.662 166.402 32.506L166.852 33.424ZM177.759 34.09C176.847 34.09 176.025 33.886 175.293 33.478C174.561 33.058 173.985 32.482 173.565 31.75C173.145 31.018 172.935 30.19 172.935 29.266C172.935 28.342 173.145 27.514 173.565 26.782C173.985 26.05 174.561 25.48 175.293 25.072C176.025 24.664 176.847 24.46 177.759 24.46C178.671 24.46 179.493 24.664 180.225 25.072C180.957 25.48 181.527 26.05 181.935 26.782C182.355 27.514 182.565 28.342 182.565 29.266C182.565 30.19 182.355 31.018 181.935 31.75C181.527 32.482 180.957 33.058 180.225 33.478C179.493 33.886 178.671 34.09 177.759 34.09ZM177.759 32.956C178.431 32.956 179.031 32.806 179.559 32.506C180.099 32.194 180.519 31.756 180.819 31.192C181.119 30.628 181.269 29.986 181.269 29.266C181.269 28.546 181.119 27.904 180.819 27.34C180.519 26.776 180.099 26.344 179.559 26.044C179.031 25.732 178.431 25.576 177.759 25.576C177.087 25.576 176.481 25.732 175.941 26.044C175.413 26.344 174.993 26.776 174.681 27.34C174.381 27.904 174.231 28.546 174.231 29.266C174.231 29.986 174.381 30.628 174.681 31.192C174.993 31.756 175.413 32.194 175.941 32.506C176.481 32.806 177.087 32.956 177.759 32.956ZM188.307 21.634C187.755 21.634 187.335 21.784 187.047 22.084C186.771 22.384 186.633 22.828 186.633 23.416V24.532H189.549V25.612H186.669V34H185.391V25.612H183.699V24.532H185.391V23.362C185.391 22.498 185.637 21.814 186.129 21.31C186.633 20.806 187.341 20.554 188.253 20.554C188.613 20.554 188.961 20.608 189.297 20.716C189.633 20.812 189.915 20.956 190.143 21.148L189.711 22.102C189.339 21.79 188.871 21.634 188.307 21.634ZM199.909 34.09C198.973 34.09 198.133 33.886 197.389 33.478C196.657 33.07 196.081 32.5 195.661 31.768C195.241 31.024 195.031 30.19 195.031 29.266C195.031 28.342 195.241 27.514 195.661 26.782C196.081 26.05 196.657 25.48 197.389 25.072C198.133 24.664 198.973 24.46 199.909 24.46C200.725 24.46 201.451 24.622 202.087 24.946C202.735 25.258 203.245 25.72 203.617 26.332L202.663 26.98C202.351 26.512 201.955 26.164 201.475 25.936C200.995 25.696 200.473 25.576 199.909 25.576C199.225 25.576 198.607 25.732 198.055 26.044C197.515 26.344 197.089 26.776 196.777 27.34C196.477 27.904 196.327 28.546 196.327 29.266C196.327 29.998 196.477 30.646 196.777 31.21C197.089 31.762 197.515 32.194 198.055 32.506C198.607 32.806 199.225 32.956 199.909 32.956C200.473 32.956 200.995 32.842 201.475 32.614C201.955 32.386 202.351 32.038 202.663 31.57L203.617 32.218C203.245 32.83 202.735 33.298 202.087 33.622C201.439 33.934 200.713 34.09 199.909 34.09ZM205.987 20.644H207.265V34H205.987V20.644ZM219.353 24.532V34H218.129V32.272C217.793 32.848 217.331 33.298 216.743 33.622C216.155 33.934 215.483 34.09 214.727 34.09C213.491 34.09 212.513 33.748 211.793 33.064C211.085 32.368 210.731 31.354 210.731 30.022V24.532H212.009V29.896C212.009 30.892 212.255 31.648 212.747 32.164C213.239 32.68 213.941 32.938 214.853 32.938C215.849 32.938 216.635 32.638 217.211 32.038C217.787 31.426 218.075 30.58 218.075 29.5V24.532H219.353ZM227.918 33.424C227.678 33.64 227.378 33.808 227.018 33.928C226.67 34.036 226.304 34.09 225.92 34.09C225.032 34.09 224.348 33.85 223.868 33.37C223.388 32.89 223.148 32.212 223.148 31.336V25.612H221.456V24.532H223.148V22.462H224.426V24.532H227.306V25.612H224.426V31.264C224.426 31.828 224.564 32.26 224.84 32.56C225.128 32.848 225.536 32.992 226.064 32.992C226.328 32.992 226.58 32.95 226.82 32.866C227.072 32.782 227.288 32.662 227.468 32.506L227.918 33.424ZM234.985 33.424C234.745 33.64 234.445 33.808 234.085 33.928C233.737 34.036 233.371 34.09 232.987 34.09C232.099 34.09 231.415 33.85 230.935 33.37C230.455 32.89 230.215 32.212 230.215 31.336V25.612H228.523V24.532H230.215V22.462H231.493V24.532H234.373V25.612H231.493V31.264C231.493 31.828 231.631 32.26 231.907 32.56C232.195 32.848 232.603 32.992 233.131 32.992C233.395 32.992 233.647 32.95 233.887 32.866C234.139 32.782 234.355 32.662 234.535 32.506L234.985 33.424ZM245.221 29.662H237.301C237.373 30.646 237.751 31.444 238.435 32.056C239.119 32.656 239.983 32.956 241.027 32.956C241.615 32.956 242.155 32.854 242.647 32.65C243.139 32.434 243.565 32.122 243.925 31.714L244.645 32.542C244.225 33.046 243.697 33.43 243.061 33.694C242.437 33.958 241.747 34.09 240.991 34.09C240.019 34.09 239.155 33.886 238.399 33.478C237.655 33.058 237.073 32.482 236.653 31.75C236.233 31.018 236.023 30.19 236.023 29.266C236.023 28.342 236.221 27.514 236.617 26.782C237.025 26.05 237.577 25.48 238.273 25.072C238.981 24.664 239.773 24.46 240.649 24.46C241.525 24.46 242.311 24.664 243.007 25.072C243.703 25.48 244.249 26.05 244.645 26.782C245.041 27.502 245.239 28.33 245.239 29.266L245.221 29.662ZM240.649 25.558C239.737 25.558 238.969 25.852 238.345 26.44C237.733 27.016 237.385 27.772 237.301 28.708H244.015C243.931 27.772 243.577 27.016 242.953 26.44C242.341 25.852 241.573 25.558 240.649 25.558ZM249.065 26.386C249.365 25.75 249.809 25.27 250.397 24.946C250.997 24.622 251.735 24.46 252.611 24.46V25.702L252.305 25.684C251.309 25.684 250.529 25.99 249.965 26.602C249.401 27.214 249.119 28.072 249.119 29.176V34H247.841V24.532H249.065V26.386ZM255.033 32.128C255.309 32.128 255.537 32.224 255.717 32.416C255.897 32.596 255.987 32.824 255.987 33.1C255.987 33.244 255.963 33.4 255.915 33.568C255.879 33.736 255.819 33.928 255.735 34.144L254.979 36.628H254.115L254.727 34.018C254.535 33.958 254.379 33.85 254.259 33.694C254.139 33.526 254.079 33.328 254.079 33.1C254.079 32.824 254.169 32.596 254.349 32.416C254.529 32.224 254.757 32.128 255.033 32.128ZM266.547 21.634C265.995 21.634 265.575 21.784 265.287 22.084C265.011 22.384 264.873 22.828 264.873 23.416V24.532H267.789V25.612H264.909V34H263.631V25.612H261.939V24.532H263.631V23.362C263.631 22.498 263.877 21.814 264.369 21.31C264.873 20.806 265.581 20.554 266.493 20.554C266.853 20.554 267.201 20.608 267.537 20.716C267.873 20.812 268.155 20.956 268.383 21.148L267.951 22.102C267.579 21.79 267.111 21.634 266.547 21.634ZM270.957 24.532H272.235V34H270.957V24.532ZM271.605 22.462C271.341 22.462 271.119 22.372 270.939 22.192C270.759 22.012 270.669 21.796 270.669 21.544C270.669 21.304 270.759 21.094 270.939 20.914C271.119 20.734 271.341 20.644 271.605 20.644C271.869 20.644 272.091 20.734 272.271 20.914C272.451 21.082 272.541 21.286 272.541 21.526C272.541 21.79 272.451 22.012 272.271 22.192C272.091 22.372 271.869 22.462 271.605 22.462ZM280.631 24.46C281.819 24.46 282.761 24.808 283.457 25.504C284.165 26.188 284.519 27.19 284.519 28.51V34H283.241V28.636C283.241 27.652 282.995 26.902 282.503 26.386C282.011 25.87 281.309 25.612 280.397 25.612C279.377 25.612 278.567 25.918 277.967 26.53C277.379 27.13 277.085 27.964 277.085 29.032V34H275.807V24.532H277.031V26.278C277.379 25.702 277.859 25.258 278.471 24.946C279.095 24.622 279.815 24.46 280.631 24.46ZM296.664 20.644V34H295.44V32.128C295.056 32.764 294.546 33.25 293.91 33.586C293.286 33.922 292.578 34.09 291.786 34.09C290.898 34.09 290.094 33.886 289.374 33.478C288.654 33.07 288.09 32.5 287.682 31.768C287.274 31.036 287.07 30.202 287.07 29.266C287.07 28.33 287.274 27.496 287.682 26.764C288.09 26.032 288.654 25.468 289.374 25.072C290.094 24.664 290.898 24.46 291.786 24.46C292.554 24.46 293.244 24.622 293.856 24.946C294.48 25.258 294.99 25.72 295.386 26.332V20.644H296.664ZM291.894 32.956C292.554 32.956 293.148 32.806 293.676 32.506C294.216 32.194 294.636 31.756 294.936 31.192C295.248 30.628 295.404 29.986 295.404 29.266C295.404 28.546 295.248 27.904 294.936 27.34C294.636 26.776 294.216 26.344 293.676 26.044C293.148 25.732 292.554 25.576 291.894 25.576C291.222 25.576 290.616 25.732 290.076 26.044C289.548 26.344 289.128 26.776 288.816 27.34C288.516 27.904 288.366 28.546 288.366 29.266C288.366 29.986 288.516 30.628 288.816 31.192C289.128 31.756 289.548 32.194 290.076 32.506C290.616 32.806 291.222 32.956 291.894 32.956ZM307.472 34.09C306.704 34.09 305.966 33.982 305.258 33.766C304.562 33.538 304.016 33.256 303.62 32.92L304.196 31.912C304.592 32.224 305.09 32.482 305.69 32.686C306.29 32.878 306.914 32.974 307.562 32.974C308.426 32.974 309.062 32.842 309.47 32.578C309.89 32.302 310.1 31.918 310.1 31.426C310.1 31.078 309.986 30.808 309.758 30.616C309.53 30.412 309.242 30.262 308.894 30.166C308.546 30.058 308.084 29.956 307.508 29.86C306.74 29.716 306.122 29.572 305.654 29.428C305.186 29.272 304.784 29.014 304.448 28.654C304.124 28.294 303.962 27.796 303.962 27.16C303.962 26.368 304.292 25.72 304.952 25.216C305.612 24.712 306.53 24.46 307.706 24.46C308.318 24.46 308.93 24.544 309.542 24.712C310.154 24.868 310.658 25.078 311.054 25.342L310.496 26.368C309.716 25.828 308.786 25.558 307.706 25.558C306.89 25.558 306.272 25.702 305.852 25.99C305.444 26.278 305.24 26.656 305.24 27.124C305.24 27.484 305.354 27.772 305.582 27.988C305.822 28.204 306.116 28.366 306.464 28.474C306.812 28.57 307.292 28.672 307.904 28.78C308.66 28.924 309.266 29.068 309.722 29.212C310.178 29.356 310.568 29.602 310.892 29.95C311.216 30.298 311.378 30.778 311.378 31.39C311.378 32.218 311.03 32.878 310.334 33.37C309.65 33.85 308.696 34.09 307.472 34.09ZM313.741 24.532H315.019V34H313.741V24.532ZM314.389 22.462C314.125 22.462 313.903 22.372 313.723 22.192C313.543 22.012 313.453 21.796 313.453 21.544C313.453 21.304 313.543 21.094 313.723 20.914C313.903 20.734 314.125 20.644 314.389 20.644C314.653 20.644 314.875 20.734 315.055 20.914C315.235 21.082 315.325 21.286 315.325 21.526C315.325 21.79 315.235 22.012 315.055 22.192C314.875 22.372 314.653 22.462 314.389 22.462ZM330.383 24.46C331.571 24.46 332.501 24.802 333.173 25.486C333.857 26.17 334.199 27.178 334.199 28.51V34H332.921V28.636C332.921 27.652 332.681 26.902 332.201 26.386C331.733 25.87 331.067 25.612 330.203 25.612C329.219 25.612 328.445 25.918 327.881 26.53C327.317 27.13 327.035 27.964 327.035 29.032V34H325.757V28.636C325.757 27.652 325.517 26.902 325.037 26.386C324.569 25.87 323.897 25.612 323.021 25.612C322.049 25.612 321.275 25.918 320.699 26.53C320.135 27.13 319.853 27.964 319.853 29.032V34H318.575V24.532H319.799V26.26C320.135 25.684 320.603 25.24 321.203 24.928C321.803 24.616 322.493 24.46 323.273 24.46C324.065 24.46 324.749 24.628 325.325 24.964C325.913 25.3 326.351 25.798 326.639 26.458C326.987 25.834 327.485 25.348 328.133 25C328.793 24.64 329.543 24.46 330.383 24.46ZM342.543 24.46C343.431 24.46 344.235 24.664 344.955 25.072C345.675 25.468 346.239 26.032 346.647 26.764C347.055 27.496 347.259 28.33 347.259 29.266C347.259 30.214 347.055 31.054 346.647 31.786C346.239 32.518 345.675 33.088 344.955 33.496C344.247 33.892 343.443 34.09 342.543 34.09C341.775 34.09 341.079 33.934 340.455 33.622C339.843 33.298 339.339 32.83 338.943 32.218V37.492H337.665V24.532H338.889V26.404C339.273 25.78 339.777 25.3 340.401 24.964C341.037 24.628 341.751 24.46 342.543 24.46ZM342.453 32.956C343.113 32.956 343.713 32.806 344.253 32.506C344.793 32.194 345.213 31.756 345.513 31.192C345.825 30.628 345.981 29.986 345.981 29.266C345.981 28.546 345.825 27.91 345.513 27.358C345.213 26.794 344.793 26.356 344.253 26.044C343.713 25.732 343.113 25.576 342.453 25.576C341.781 25.576 341.175 25.732 340.635 26.044C340.107 26.356 339.687 26.794 339.375 27.358C339.075 27.91 338.925 28.546 338.925 29.266C338.925 29.986 339.075 30.628 339.375 31.192C339.687 31.756 340.107 32.194 340.635 32.506C341.175 32.806 341.781 32.956 342.453 32.956ZM349.864 20.644H351.142V34H349.864V20.644ZM354.698 24.532H355.976V34H354.698V24.532ZM355.346 22.462C355.082 22.462 354.86 22.372 354.68 22.192C354.5 22.012 354.41 21.796 354.41 21.544C354.41 21.304 354.5 21.094 354.68 20.914C354.86 20.734 355.082 20.644 355.346 20.644C355.61 20.644 355.832 20.734 356.012 20.914C356.192 21.082 356.282 21.286 356.282 21.526C356.282 21.79 356.192 22.012 356.012 22.192C355.832 22.372 355.61 22.462 355.346 22.462ZM363.456 34.09C362.52 34.09 361.68 33.886 360.936 33.478C360.204 33.07 359.628 32.5 359.208 31.768C358.788 31.024 358.578 30.19 358.578 29.266C358.578 28.342 358.788 27.514 359.208 26.782C359.628 26.05 360.204 25.48 360.936 25.072C361.68 24.664 362.52 24.46 363.456 24.46C364.272 24.46 364.998 24.622 365.634 24.946C366.282 25.258 366.792 25.72 367.164 26.332L366.21 26.98C365.898 26.512 365.502 26.164 365.022 25.936C364.542 25.696 364.02 25.576 363.456 25.576C362.772 25.576 362.154 25.732 361.602 26.044C361.062 26.344 360.636 26.776 360.324 27.34C360.024 27.904 359.874 28.546 359.874 29.266C359.874 29.998 360.024 30.646 360.324 31.21C360.636 31.762 361.062 32.194 361.602 32.506C362.154 32.806 362.772 32.956 363.456 32.956C364.02 32.956 364.542 32.842 365.022 32.614C365.502 32.386 365.898 32.038 366.21 31.57L367.164 32.218C366.792 32.83 366.282 33.298 365.634 33.622C364.986 33.934 364.26 34.09 363.456 34.09ZM369.675 24.532H370.953V34H369.675V24.532ZM370.323 22.462C370.059 22.462 369.837 22.372 369.657 22.192C369.477 22.012 369.387 21.796 369.387 21.544C369.387 21.304 369.477 21.094 369.657 20.914C369.837 20.734 370.059 20.644 370.323 20.644C370.587 20.644 370.809 20.734 370.989 20.914C371.169 21.082 371.259 21.286 371.259 21.526C371.259 21.79 371.169 22.012 370.989 22.192C370.809 22.372 370.587 22.462 370.323 22.462ZM379.495 33.424C379.255 33.64 378.955 33.808 378.595 33.928C378.247 34.036 377.881 34.09 377.497 34.09C376.609 34.09 375.925 33.85 375.445 33.37C374.965 32.89 374.725 32.212 374.725 31.336V25.612H373.033V24.532H374.725V22.462H376.003V24.532H378.883V25.612H376.003V31.264C376.003 31.828 376.141 32.26 376.417 32.56C376.705 32.848 377.113 32.992 377.641 32.992C377.905 32.992 378.157 32.95 378.397 32.866C378.649 32.782 378.865 32.662 379.045 32.506L379.495 33.424ZM389.601 24.532L384.867 35.134C384.483 36.022 384.039 36.652 383.535 37.024C383.031 37.396 382.425 37.582 381.717 37.582C381.261 37.582 380.835 37.51 380.439 37.366C380.043 37.222 379.701 37.006 379.413 36.718L380.007 35.764C380.487 36.244 381.063 36.484 381.735 36.484C382.167 36.484 382.533 36.364 382.833 36.124C383.145 35.884 383.433 35.476 383.697 34.9L384.111 33.982L379.881 24.532H381.213L384.777 32.578L388.341 24.532H389.601ZM390.912 34.09C390.648 34.09 390.42 33.994 390.228 33.802C390.048 33.61 389.958 33.376 389.958 33.1C389.958 32.824 390.048 32.596 390.228 32.416C390.42 32.224 390.648 32.128 390.912 32.128C391.176 32.128 391.404 32.224 391.596 32.416C391.788 32.596 391.884 32.824 391.884 33.1C391.884 33.376 391.788 33.61 391.596 33.802C391.404 33.994 391.176 34.09 390.912 34.09ZM394.446 20.554C394.722 20.554 394.95 20.65 395.13 20.842C395.31 21.022 395.4 21.25 395.4 21.526C395.4 21.67 395.376 21.826 395.328 21.994C395.292 22.15 395.238 22.336 395.166 22.552L394.392 25.036H393.528L394.158 22.444C393.954 22.384 393.792 22.276 393.672 22.12C393.552 21.952 393.492 21.754 393.492 21.526C393.492 21.238 393.582 21.004 393.762 20.824C393.942 20.644 394.17 20.554 394.446 20.554ZM397.506 20.554C397.782 20.554 398.01 20.65 398.19 20.842C398.37 21.022 398.46 21.25 398.46 21.526C398.46 21.67 398.436 21.826 398.388 21.994C398.352 22.15 398.298 22.336 398.226 22.552L397.452 25.036H396.588L397.218 22.444C397.014 22.384 396.852 22.276 396.732 22.12C396.612 21.952 396.552 21.754 396.552 21.526C396.552 21.238 396.642 21.004 396.822 20.824C397.002 20.644 397.23 20.554 397.506 20.554Z"
        fill="white"
      />
    </svg>
  )
}

export default Quote
