import React, { useState } from 'react'

const IconTest = ({ ...props }) => {
  const headerIcon = props.iconRoutes
  return (
    <div className="header-detail header-icon">
      {headerIcon.objects?.map((icon, index) => {
        return <div
          key={icon.id}
          className={'icon-action' + ' ' + props.handleOpenIconAction(index)}
          onClick={() => props.activeIconMenu(index)}
          // isShow={props.isShow}
        >
          <icon.Icon />
        </div>

      }
      )}
    </div >
  )
}

export default IconTest