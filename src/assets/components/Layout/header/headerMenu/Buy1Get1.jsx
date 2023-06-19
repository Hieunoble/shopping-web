import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import HeaderStyle from './HeaderStyle.scss'

const Buy1Get1 = () => {
  return (
    <Link to={'./buy1Get1'} className='menu'>
      <div className='menu-item'>
        <a href="">Buy 1 Get 1</a>
        {/* <RiArrowDropDownLine className='dropIcon' />
         */}
      </div>
    </Link>
  )
}

export default Buy1Get1