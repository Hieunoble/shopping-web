import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import "./HeaderStyle.scss"


const SaleUp = () => {
  return (
    <div className="menu">
      <div className="menu-item menu-dropdown">
        <Link to={'/saleUp'}>
          Sale up to 70%
          <RiArrowDropDownLine className='dropIcon' />
        </Link>
      </div>
      <ul className='sub_menu isActive'>
        <li><Link to={'all-products'}>Summer Product</Link></li>
        <li><Link to={'/'}>75%</Link></li>
        <li><Link to={'all-products'}>50%</Link></li>
        <li><Link to={'all-products'}>30%</Link></li>
        <li><Link to={'all-products'}>sales off%</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default SaleUp