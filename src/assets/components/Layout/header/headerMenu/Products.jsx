import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './HeaderStyle.scss'


const Products = ({ ...props }) => {

  return (
    <div
      className="menu"
      onMouseMove={props.handleopenSubMenu}
    >
      <div
        className="menu-item menu-dropdown" >
        <Link
          to={'/all-products'}
        >
          Products
          <RiArrowDropDownLine className='dropIcon' />
        </Link>
      </div>
      {
        props.openSubmenu &&
        (
          <ul className='sub_menu isActive'>
            <li><Link to={'all-products'}>Shirts</Link></li>
            <li><Link to={'/'}>Jeans</Link></li>
            <li><Link to={'all-products'}>Sets</Link></li>
            <li><Link to={'all-products'}>Bags</Link></li>
            <li><Link to={'all-products'}>Shoes</Link></li>
            <li><Link to={'all-products'}>Others</Link></li>
          </ul>
        )
      }
      <Outlet />
    </div>
  )
}

export default Products