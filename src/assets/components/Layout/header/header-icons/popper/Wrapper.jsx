import React from 'react'
import './WrapperStyle.scss'

const Wrapper = ({ children }) => {
  return (
    <div className='wrapper-popper'>
      {children}
    </div>
  )
}

export default Wrapper