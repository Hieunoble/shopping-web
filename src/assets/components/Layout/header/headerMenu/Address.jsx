import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'


const Address = () => {
  return (
    <div className="menu">
      <div className="menu-item menu-dropdown">
        <a href="">
          Address
          <RiArrowDropDownLine className='dropIcon' />
        </a>
      </div>
      <ul className='sub_menu isActive'>
        <li><Link to={'all-products'}>Hanoi</Link></li>
        <li><Link to={'all-products'}>Bac Ninh</Link></li>
        <li><Link to={'all-products'}>Thanh Hoa</Link></li>
        <li><Link to={'all-products'}>Nam Dinh</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Address