import React, { useState } from 'react'
import Products from './headerMenu/Products'
import Buy1Get1 from './headerMenu/Buy1Get1'
import SaleUp from './headerMenu/SaleUp'
import Address from './headerMenu/Address'
import Policies from './headerMenu/Policies'
import Search from './header-icons/search/Search'
import Users from './header-icons/user/Users'
import Cart from './header-icons/cart/Cart.jsx'
import HeadingMenu from './layoutMenu/HeadingMenu'
import "../header/HeaderStyle.scss"
import { Link } from 'react-router-dom'

const Header = (children) => {

  const [openSubmenu, setOpenSubmenu] = useState(false)

  const handleOpenSubMenu = () => {
    setOpenSubmenu(!openSubmenu)
  }


  return (
    <div className='main-header'>
      <div className="topbar">
        <p>Freeship for 500k plus bill</p>
      </div>
      <div className="header">
        <div className="header-container">
          <div className="header-flex">
            <Link to='/' className=" header-detail header-logo">
              <img src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" alt="" />
            </Link>
            <Products
              openSubmenu={openSubmenu}
              setOpenSubmenu={setOpenSubmenu}
              handleOpenSubMenu={handleOpenSubMenu}
            />
            <Buy1Get1
              openSubmenu={openSubmenu}
              setOpenSubmenu={setOpenSubmenu}
              handleOpenSubMenu={handleOpenSubMenu} />
            <SaleUp
              openSubmenu={openSubmenu}
              setOpenSubmenu={setOpenSubmenu}
              handleOpenSubMenu={handleOpenSubMenu} />
            <Address
              openSubmenu={openSubmenu}
              setOpenSubmenu={setOpenSubmenu}
              handleOpenSubMenu={handleOpenSubMenu} />
            <Policies
              openSubmenu={openSubmenu}
              setOpenSubmenu={setOpenSubmenu}
              handleOpenSubMenu={handleOpenSubMenu} />
            <div className="header-detail header-icon">
              <Search />
              <Users />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header