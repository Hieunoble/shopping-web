import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { headingRoutes, iconRoutes } from '../../../route'
import "../header/HeaderStyle.scss"
import Menu from './headerMenu/Menu.jsx'
import IconTest from './header-icons/IconTest'
import ResponsiveIcon from './responsiveIcon/ResponsiveIcon.jsx'


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
  const activeIconMenu = (index) => {
    setIconMenu({ ...iconMenu, activeIcon: iconMenu.objects[index] })
    // console.log(iconMenu.objects);
  }
  const handleOpenIconAction = (index) => {
    if (iconMenu.objects[index] === iconMenu.activeIcon) {
      iconMenu.isShow = !iconMenu.isShow
      if (iconMenu.isShow) {
        return 'active'
      } else {
        return ''
      }
    }
  }
  const handleCloseIconAction = (index) => {
    if (iconMenu.objects[index] === iconMenu.activeIcon) {
      setIconMenu({ ...iconMenu, activeIcon: null })
      return ''
    }
  }

  //Responsive
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  const handleOpenReponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu)
  }

  return (
    <div className='main-header'>
      <div className="topbar">
        <p>Freeship for 500k plus bill</p>
      </div>
      <div className="header">
        <div className="header-container">
          <div className="header-flex">

            <div className='responsiveIcon'>
              <ResponsiveIcon
                headingRoutes={headingRoutes}
                responsiveMenu={responsiveMenu}
                handleOpenReponsiveMenu={handleOpenReponsiveMenu}
              />
            </div>

            <Link to='/' className=" header-detail header-logo">
              <img src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" alt="" />
            </Link>

            <Menu
              className='menu'
              headingRoutes={headingRoutes}
              activeOpenSubMenu={(e, index) => activeOpenSubMenu(e, index)}
              handleOpenSubMenu={handleOpenSubMenu}
              handleCloseSubMenu={handleCloseSubMenu}
            />

            <div className="header-detail header-icon">
              <IconTest
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