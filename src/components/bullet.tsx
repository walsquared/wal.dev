import * as React from 'react'

const Bullet = (props) => {
  return (
    <svg width={10} height={10} viewBox='0 0 10 10' fill='none' {...props}>
      <circle cx={5} cy={5} r={4.5} fill='#EBAF16' stroke='#14110F' />
    </svg>
  )
}

export default Bullet
