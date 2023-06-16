import React from 'react'
import './BoxImgStyle.scss'

const BoxImg = ({ ...props }) => {
  // console.log(props.imgUrl);
  return (
    <div className="product-box-img">
      {
        props.imgUrl ?
          <img src={props.imgUrl} alt="" />
          :
        props.propsData.category.image &&
        <img src={props.propsData.category.image} alt="" />
      }
    </div>
  )
}

export default BoxImg