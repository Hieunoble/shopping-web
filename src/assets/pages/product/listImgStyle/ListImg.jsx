import React from 'react'
import { useLocation } from 'react-router'

import './listImg.scss'

const ListImg = ({ ...props }) => {

  return (
    <div className="product-list-img">
      <div>
        <img
          src={props.propsData.category.image}
          alt=""
          onClick={props.handleShowCurrentImg}
        />
      </div>
      {props.propsData.images.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt=""
            onClick={props.handleChangeImg}
          />
        </div>
      ))}
    </div>
  )
}

export default ListImg