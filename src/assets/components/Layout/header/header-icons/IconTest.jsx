import React, { useState } from 'react'

const IconTest = ({ ...props }) => {
  const headerIcon = props.iconRoutes
  return (
    <div className="header-detail header-icon">
      {headerIcon.objects?.map((icon, index) => {
        return <div
          key={icon.id}
          className={'icon-action' + ' ' + props.handleOpenIconAction(index)}
          onClick={(e) => props.activeIconMenu(index,e)}
        >
          <icon.Icon />
        </div>

      }
      )}
    </div >
  )
}

export default IconTest