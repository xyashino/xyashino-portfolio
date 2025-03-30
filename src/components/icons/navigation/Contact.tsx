import React, { SVGProps } from 'react'

export const Contact: React.FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.875 22q-3.9 0-7.338-1.475t-6-4.038q-2.562-2.562-4.05-6T2 3.126q-.025-.45.3-.788T3.1 2H7q.45 0 .775.338t.325.812q0 1.1.15 2.075t.475 1.85q.125.275.05.562t-.3.538l-2.5 2.5q1.075 2.2 3.05 4.175t4.25 3.15l2.5-2.5q.225-.225.525-.3t.6.05q.925.3 1.913.463t2.037.162q.475 0 .813.35t.337.85V20.9q0 .45-.325.775t-.8.325ZM20 12q0-3.35-2.325-5.675T12 4V2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12h-2Zm-4 0q0-1.65-1.175-2.825T12 8V6q2.5 0 4.25 1.75T18 12h-2Z"
    ></path>
  </svg>
)
