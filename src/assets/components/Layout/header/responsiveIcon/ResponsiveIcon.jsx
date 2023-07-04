import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

import "./ResponsiveIconStyle.scss"
import DropDownMenu from './DropDownMenu';

const ResponsiveIcon = ({ ...props }) => {
  return (
    <div>
      <div className='responsive'>
        <AiOutlineMenu 
          onClick={props.handleOpenReponsiveMenu}
        />
      </div>
      {
        props.responsiveMenu &&
        <div className="responsive-menu">
          <DropDownMenu
            headingRoutes={props.headingRoutes}
          />
        </div>
      }
    </div>
  )
}

export default ResponsiveIcon