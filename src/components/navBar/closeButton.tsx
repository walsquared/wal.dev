import * as React from 'react'

const CloseButton = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='{2}'
      {...props}
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <g fill='#fbfbfb'>
        <path d='M18.788 18.788a1.2 1.2 0 000-1.697L6.909 5.212a1.2 1.2 0 10-1.697 1.697l11.879 11.879a1.2 1.2 0 001.697 0z' />
        <path d='M18.788 5.212a1.2 1.2 0 00-1.697 0L5.212 17.091a1.2 1.2 0 101.697 1.697L18.788 6.909a1.2 1.2 0 000-1.697z' />
      </g>
    </svg>
  )
}

export default CloseButton
