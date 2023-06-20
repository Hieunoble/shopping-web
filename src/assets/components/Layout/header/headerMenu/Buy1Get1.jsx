import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import HeaderStyle from './HeaderStyle.scss'

const Buy1Get1 = () => {
  return (
    <div className='menu'>
      <div className='menu-item'>
        <Link
          to={'/buy1Get1'}
        >Buy 1 Get 1
        </Link>
        {/* <RiArrowDropDownLine className='dropIcon' />
         */}
      </div>
    </div>
  )
}

export default Buy1Get1