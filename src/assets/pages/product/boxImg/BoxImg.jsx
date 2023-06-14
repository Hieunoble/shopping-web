import React from 'react'
import './BoxImgStyle.scss'

const BoxImg = ({ ...props }) => {

  return (
    <div className="product-box-img">
      <img src={props.propsData.category.image} alt="" />
    </div>
  )
}

export default BoxImg