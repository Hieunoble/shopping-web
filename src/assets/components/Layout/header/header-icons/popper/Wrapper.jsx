import React from 'react'
import WrapperStyle from './WrapperStyle.css'

const Wrapper = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper