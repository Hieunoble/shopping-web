import React from 'react'
import Products from './headerMenu/Products'
import Buy1Get1 from './headerMenu/Buy1Get1'
import SaleUp from './headerMenu/SaleUp'
import Address from './headerMenu/Address'
import Policies from './headerMenu/Policies'
import Search from './header-icons/search/Search'
import Users from './header-icons/user/Users'
import Cart from './header-icons/cart/Cart.jsx'
import HeaderStyle from "../header/HeaderStyle.scss"

const Header = () => {
  return (
    <div className='main-header'>
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
              <Products />
              <Buy1Get1 />
              <SaleUp />
              <Address />
              <Policies />
            </div>
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