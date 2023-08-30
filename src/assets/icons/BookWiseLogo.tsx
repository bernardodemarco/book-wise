import { ComponentProps } from 'react'

type BookWiseLogoProps = ComponentProps<'svg'>

export function BookWiseLogo(props: BookWiseLogoProps) {
  return (
    <svg
      width={232}
      height={58}
      viewBox="0 0 232 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.9">
        <path
          d="M38 51.6L36.8 50.6C32.8 46.8 30 44.4 30 41.4C30 39 32 37 34.4 37C35.8 37 37.2 37.6 38 38.6C38.8 37.6 40.2 37 41.6 37C44 37 46 38.8 46 41.4C46 44.4 43.2 46.8 39.2 50.6L38 51.6Z"
          fill="#50B2C0"
        />
        <path
          d="M36 9C38.2 9 40 10.8 40 13V31.16L38 31L36 31.16V13H26V29L21 24.5L16 29V13H12V45H26.16C26.4 46.44 26.9 47.78 27.6 49H12C9.8 49 8 47.2 8 45V13C8 10.8 9.8 9 12 9H36Z"
          fill="#8381D9"
        />
        <path
          d="M62.815 41V15.62H73.903C76.567 15.62 78.631 16.208 80.095 17.384C81.559 18.536 82.291 20.144 82.291 22.208C82.291 23.576 81.943 24.752 81.247 25.736C80.551 26.72 79.591 27.44 78.367 27.896C79.807 28.304 80.923 29.024 81.715 30.056C82.531 31.064 82.939 32.348 82.939 33.908C82.939 36.164 82.171 37.916 80.635 39.164C79.123 40.388 77.011 41 74.299 41H62.815ZM67.243 26.384H73.111C76.255 26.384 77.827 25.172 77.827 22.748C77.827 20.324 76.255 19.112 73.111 19.112H67.243V26.384ZM67.243 37.508H73.723C76.891 37.508 78.475 36.236 78.475 33.692C78.475 31.148 76.891 29.876 73.723 29.876H67.243V37.508ZM95.1961 41.36C93.3721 41.36 91.7881 40.988 90.4441 40.244C89.1001 39.5 88.0561 38.444 87.3121 37.076C86.5681 35.684 86.1961 34.052 86.1961 32.18C86.1961 30.308 86.5681 28.688 87.3121 27.32C88.0561 25.952 89.1001 24.896 90.4441 24.152C91.7881 23.408 93.3721 23.036 95.1961 23.036C97.0201 23.036 98.6041 23.408 99.9481 24.152C101.292 24.896 102.336 25.952 103.08 27.32C103.824 28.688 104.196 30.308 104.196 32.18C104.196 34.052 103.824 35.684 103.08 37.076C102.336 38.444 101.292 39.5 99.9481 40.244C98.6041 40.988 97.0201 41.36 95.1961 41.36ZM95.1961 37.94C96.5401 37.94 97.6201 37.46 98.4361 36.5C99.2521 35.516 99.6601 34.076 99.6601 32.18C99.6601 30.26 99.2521 28.832 98.4361 27.896C97.6201 26.936 96.5401 26.456 95.1961 26.456C93.8521 26.456 92.7721 26.936 91.9561 27.896C91.1401 28.832 90.7321 30.26 90.7321 32.18C90.7321 34.076 91.1401 35.516 91.9561 36.5C92.7721 37.46 93.8521 37.94 95.1961 37.94ZM115.938 41.36C114.114 41.36 112.53 40.988 111.186 40.244C109.842 39.5 108.798 38.444 108.054 37.076C107.31 35.684 106.938 34.052 106.938 32.18C106.938 30.308 107.31 28.688 108.054 27.32C108.798 25.952 109.842 24.896 111.186 24.152C112.53 23.408 114.114 23.036 115.938 23.036C117.762 23.036 119.346 23.408 120.69 24.152C122.034 24.896 123.078 25.952 123.822 27.32C124.566 28.688 124.938 30.308 124.938 32.18C124.938 34.052 124.566 35.684 123.822 37.076C123.078 38.444 122.034 39.5 120.69 40.244C119.346 40.988 117.762 41.36 115.938 41.36ZM115.938 37.94C117.282 37.94 118.362 37.46 119.178 36.5C119.994 35.516 120.402 34.076 120.402 32.18C120.402 30.26 119.994 28.832 119.178 27.896C118.362 26.936 117.282 26.456 115.938 26.456C114.594 26.456 113.514 26.936 112.698 27.896C111.882 28.832 111.474 30.26 111.474 32.18C111.474 34.076 111.882 35.516 112.698 36.5C113.514 37.46 114.594 37.94 115.938 37.94ZM128.653 41V15.62H133.153V30.884H133.225L140.317 23.396H145.753L137.761 31.82L146.257 41H140.749L133.225 33.152H133.153V41H128.653ZM155.369 41L146.405 15.62H151.157L157.457 34.34L164.081 15.62H167.501L173.981 34.592L180.461 15.62H184.961L175.925 41H172.109L165.665 22.676L159.185 41H155.369ZM187.743 19.616V15.224H192.783V19.616H187.743ZM188.031 41V23.396H192.531V41H188.031ZM203.651 41.36C202.163 41.36 200.771 41.18 199.475 40.82C198.179 40.46 197.099 39.944 196.235 39.272L197.387 36.32C198.275 36.92 199.271 37.388 200.375 37.724C201.479 38.036 202.583 38.192 203.687 38.192C204.839 38.192 205.691 38 206.243 37.616C206.819 37.208 207.107 36.68 207.107 36.032C207.107 35.024 206.363 34.376 204.875 34.088L201.275 33.404C198.227 32.828 196.703 31.244 196.703 28.652C196.703 27.5 197.015 26.504 197.639 25.664C198.287 24.824 199.175 24.176 200.303 23.72C201.431 23.264 202.727 23.036 204.191 23.036C205.439 23.036 206.639 23.216 207.791 23.576C208.943 23.912 209.927 24.428 210.743 25.124L209.519 28.076C208.823 27.5 207.983 27.044 206.999 26.708C206.039 26.372 205.115 26.204 204.227 26.204C203.051 26.204 202.175 26.408 201.599 26.816C201.047 27.224 200.771 27.764 200.771 28.436C200.771 29.492 201.455 30.14 202.823 30.38L206.423 31.064C207.983 31.352 209.159 31.88 209.951 32.648C210.767 33.416 211.175 34.448 211.175 35.744C211.175 37.496 210.491 38.876 209.123 39.884C207.755 40.868 205.931 41.36 203.651 41.36ZM223.461 41.36C221.469 41.36 219.753 40.988 218.313 40.244C216.873 39.5 215.757 38.444 214.965 37.076C214.197 35.708 213.813 34.088 213.813 32.216C213.813 30.392 214.185 28.796 214.929 27.428C215.697 26.06 216.741 24.992 218.061 24.224C219.405 23.432 220.929 23.036 222.633 23.036C225.129 23.036 227.097 23.828 228.537 25.412C230.001 26.996 230.733 29.156 230.733 31.892V33.224H218.133C218.469 36.368 220.269 37.94 223.533 37.94C224.517 37.94 225.501 37.796 226.485 37.508C227.469 37.196 228.369 36.716 229.185 36.068L230.445 39.092C229.605 39.788 228.549 40.34 227.277 40.748C226.005 41.156 224.733 41.36 223.461 41.36ZM222.813 26.096C221.493 26.096 220.425 26.504 219.609 27.32C218.793 28.136 218.301 29.24 218.133 30.632H226.989C226.893 29.168 226.485 28.052 225.765 27.284C225.069 26.492 224.085 26.096 222.813 26.096Z"
          fill="url(#paint0_linear_517_8)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_517_8"
          x1={60}
          y1="29.5686"
          x2={232}
          y2="29.5686"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7FD1CC" />
          <stop offset={1} stopColor="#9694F5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
