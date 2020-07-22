import * as React from 'react'

const MenuButton = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit={2}
      {...props}
    >
      <path fill='none' d='M0 0h24v24H0z' />
      <g fill='#14110f'>
        <path d='M21.559 12a1.2 1.2 0 00-1.2-1.2h-16.8a1.201 1.201 0 000 2.4h16.8a1.2 1.2 0 001.2-1.2zM21.641 4.999a1.2 1.2 0 00-1.2-1.2h-16.8a1.2 1.2 0 100 2.4h16.8c.662 0 1.2-.538 1.2-1.2zM21.641 19.001c0-.662-.538-1.2-1.2-1.2h-16.8a1.2 1.2 0 000 2.4h16.8a1.2 1.2 0 001.2-1.2z' />
      </g>
    </svg>
  )
}

export default MenuButton
