import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import HeaderStyle from './HeaderStyle.scss'


const Policies = () => {
  return (
    <div className="menu">
      <div className="menu-item menu-dropdown">
        <a href="">
          Policies
          <RiArrowDropDownLine className='dropIcon' />
        </a>
      </div>
      <ul className='sub_menu isActive'>
        <li><Link to={'all-products'}>Summer Product</Link></li>
        <li><Link to={'all-products'}>75%</Link></li>
        <li><Link to={'all-products'}>50%</Link></li>
        <li><Link to={'all-products'}>30%</Link></li>
        <li><Link to={'all-products'}>sales off%</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Policies