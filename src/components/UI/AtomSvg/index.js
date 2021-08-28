import * as React from "react"
import { dot } from "./styles.module.scss"
function AtomSvg(props) {
  return (
    <svg
      width={1004}
      height={1004}
      viewBox="0 0 1004 1004"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M502.28 590.404c49.318-.191 89.142-40.326 88.951-89.643-.191-49.317-40.326-89.141-89.643-88.95-49.317.191-89.141 40.325-88.95 89.642.191 49.318 40.325 89.142 89.642 88.951z"
        className={dot}
      />
      <g clipRule="evenodd" stroke="#00D1FF" strokeWidth={5}>
        <path d="M501.232 319.549c119.893-.465 231.337 16.307 315.427 44.892 101.317 34.442 163.732 87.001 163.917 134.811.193 49.822-65.52 106.17-174.036 142.592-82.041 27.534-190.085 42.161-303.893 42.602-116.686.452-227.232-12.455-310.414-40.521-105.24-35.516-168.764-92.09-168.953-140.963-.184-47.422 59.011-100.044 158.636-135.212 84.177-29.714 198.236-47.732 319.3-48.201h.016z" />
        <path d="M343.534 411.464c59.494-104.091 129.695-192.253 196.467-250.818 80.45-70.562 157.163-98.37 198.67-74.65 43.258 24.723 59.241 109.801 36.58 221.998-17.115 84.827-58.437 185.725-114.911 284.535-57.903 101.308-124.308 190.623-190.169 248.643-83.341 73.425-164.085 100.192-206.517 75.94-41.174-23.515-57.185-101.097-37.879-204.969 16.312-87.765 57.684-195.572 117.74-300.681l.019.002z" />
        <path d="M344.391 594.019c-60.467-103.509-101.77-208.378-119.178-295.475-20.955-104.939-6.738-185.291 34.547-209.403 43.022-25.13 124.713 3.511 210.598 79.178 64.936 57.207 131.721 143.381 189.125 241.657 58.853 100.757 103.065 202.896 120.444 288.931 21.991 108.875 4.857 192.194-37.346 216.844-40.949 23.918-116.15-.946-196.498-69.549-67.888-57.961-140.627-147.647-201.692-252.185v.002z" />
      </g>
    </svg>
  )
}

export default AtomSvg