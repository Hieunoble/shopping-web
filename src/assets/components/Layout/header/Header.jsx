import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Products from './headerMenu/Products'

import Search from './header-icons/search/Search'
import Users from './header-icons/user/Users'
import Cart from './header-icons/cart/Cart.jsx'
import MenuTest from './headerMenu/MenuTest'
// import HeadingMenu from './layoutMenu/HeadingMenu'
import "../header/HeaderStyle.scss"
import { headingRoutes } from '../../../route'

const Header = ({ ...props }) => {
  const [menu, setMenu] = useState(headingRoutes)

  const activeOpenSubMenu = (index) => {
    setMenu({ ...menu, activeMenu: menu.objects[index] })
  }

  const handleOpenSubMenu = (index) => {
    if (menu.objects[index] === menu.activeMenu) {
      return 'active'
    } else if (menu.objects[index] !== menu.activeMenu || !menu.objects[index]) {
      return ''
    }
  }

  const handleCloseSubMenu = (index) => {
    setMenu({ ...menu, activeMenu: null })
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

            <MenuTest
              headingRoutes={headingRoutes}
              activeOpenSubMenu={(e, index) => activeOpenSubMenu(e, index)}
              handleOpenSubMenu={handleOpenSubMenu}
              handleCloseSubMenu={handleCloseSubMenu}
            />

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