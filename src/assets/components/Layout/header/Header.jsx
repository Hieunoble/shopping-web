import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { headingRoutes, iconRoutes } from '../../../route'
import Menu from './headerMenu/Menu.jsx'
import "../header/HeaderStyle.scss"
import IconTest from './header-icons/IconTest'

const Header = ({ ...props }) => {
  const [menu, setMenu] = useState(headingRoutes)
  const [iconMenu, setIconMenu] = useState(iconRoutes)

  //Menu Action handlers
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
  const handleCloseSubMenu = () => {
    setMenu({ ...menu, activeMenu: null })
  }

  // Icon Action handlers
  const [isShow, setIsShow] = useState(false)
  const activeIconMenu = (index) => {
    setIsShow(!isShow)
    setIconMenu({ ...iconMenu, activeIcon: iconMenu.objects[index] })
  }
  const handleOpenIconAction = (index) => {
    if (iconMenu.objects[index] === iconMenu.activeIcon) {
      return 'active'
    } else {
      return ''
    }
  }
  const handleCloseIconAction = (index) => {
    if (iconMenu.objects[index] === iconMenu.activeIcon) {
      setIconMenu({ ...iconMenu, activeIcon: null })
      return ''
    }
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

            <Menu
              headingRoutes={headingRoutes}
              activeOpenSubMenu={(e, index) => activeOpenSubMenu(e, index)}
              handleOpenSubMenu={handleOpenSubMenu}
              handleCloseSubMenu={handleCloseSubMenu}
            />

            <div className="header-detail header-icon">
              <IconTest
                isShow={isShow}
                iconRoutes={iconRoutes}
                activeIconMenu={(index) => activeIconMenu(index)}
                handleOpenIconAction={(index) => handleOpenIconAction(index)}
                handleCloseIconAction={(index) => handleCloseIconAction(index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header