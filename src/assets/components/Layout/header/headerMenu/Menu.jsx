import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './HeaderStyle.scss'


const Menu = ({ ...props }) => {
  const headerMenu = props.headingRoutes.objects

  return (
    <div className='menu-wrapper'>
      {headerMenu?.map((menu, index) => {
        // console.log(menu);
        return (
          <div className="menu" key={menu.title} >
            <div
              className="menu-item menu-dropdown"
              onMouseEnter={() => props.activeOpenSubMenu(index)}
              onMouseLeave={props.handleCloseSubMenu}
            >
              <Link to={menu.path} >
                {menu.title}
                {menu.subMenu && <RiArrowDropDownLine className='dropIcon' />}
              </Link>
              <ul className={'sub_menu' + ' ' + props.handleOpenSubMenu(index)}>
                {
                  menu.subMenu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link to={menu.title}>{subMenu.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        )
      }

      )}

      <Outlet />
    </div >


  )
}

export default Menu