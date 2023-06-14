import React from 'react'
import { useLocation } from 'react-router'

import './ItemStyle.scss'
import ListImg from './listImgStyle/ListImg'
import BoxImg from './boxImg/BoxImg'
import ProductForm from './productForm/ProductForm'

const Item = ({ ...props }) => {
  //need to render this component

  const location = useLocation()
  const propsData = location.state

  return (
    <div className='product-wrapper'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md">
            <div className="row-product-detail">
              <div className="product-content-img">
                <div className="product-gallery">
                  <ListImg
                    propsData={propsData}
                  />
                  <BoxImg
                    propsData={propsData}
                  />
                </div>
              </div>
              <div className="product-content-desc">
                <div className="product-title">
                  <h1>{propsData.title}</h1>
                  <span>{propsData.updatedAt}</span>
                </div>
                <div className="product-price ">
                  <span>{propsData.price}</span>
                </div>
                <ProductForm />
                <div className="product-description"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item