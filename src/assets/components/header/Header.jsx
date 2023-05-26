import React from 'react'
import HeaderStyle from "./HeaderStyle.css"
import MenuProduct from './header-menu/MenuProduct'
import Buy1Get1 from './header-menu/Buy1Get1'
import SaleUp from './header-menu/SaleUp'
import Address from './header-menu/Address'
import Policies from './header-menu/Policies'
import Search from './header-icons/Search'
import Cart from './header-icons/Cart'
import Users from './header-icons/Users'

const Header = () => {
  return (
    <div>
      <div className="topbar">
        <p>Freeship for 500k plus bill</p>
      </div>
      <div className="header">
        <div className="header-container">
          <div className="header-flex">
            <div className=" header-detail header-logo">
              <img src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" alt="" />
            </div>
            <div className=" header-detail header-menu">
              <MenuProduct />
              <Buy1Get1 />
              <SaleUp />
              <Address />
              <Policies />
            </div>
            <div className="header-detail header-icon">
              <Search />
              <Cart />
              <Users />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header