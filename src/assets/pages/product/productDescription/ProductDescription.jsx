import React from 'react'
import './ProductDescriptionStyle.scss'

const ProductDescription = ({ ...props }) => {
  // console.log(props.propsData);
  return (
    <div className="product-description">
      <div className="product-title">
        <h2>Description</h2>
      </div>
      <div className="description-content">
        <div className="description-detail">
          <h2>
            <strong>Title</strong>
            <br />
            {props.propsData.title}
          </h2>
          <p>
            <strong>Detail</strong>
            <br />
            {props.propsData.description}
          </p>
          <p>
            <strong>Update at</strong>
            <br />
            {props.propsData.updatedAt}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription