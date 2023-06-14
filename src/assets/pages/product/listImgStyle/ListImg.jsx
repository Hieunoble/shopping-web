import React from 'react'
import './listImg.scss'

const ListImg = ({ ...props }) => {
  return (
    <div className="product-list-img">
      {props.propsData.images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt="" />
        </div>
      ))}
    </div>
  )
}

export default ListImg