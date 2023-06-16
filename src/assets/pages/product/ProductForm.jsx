import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Handle change color here

import './ProductFormStyle.scss'
import ListImg from './listImgStyle/ListImg'
import BoxImg from './boxImg/BoxImg'
import ProductDetail from './productDetail/ProductDetail'
import ProductDescription from './productDescription/ProductDescription'

const Item = ({ ...props }) => {
  const location = useLocation()
  const propsData = location.state

  const [imgUrl, setImgUrl] = useState('')
  const imgUrls = propsData.images
  const currentUrl = propsData.category.image

  const [sizeColor, setSizeColor] = useState('')
  const [active, setActive] = useState(false)

  const handleChangeImg = (e) => {
    const listUrl = e.target.src
    const newUrl = imgUrls.filter((item) => {
      return item === listUrl
    })
    setImgUrl(newUrl)
  }

  const handleShowCurrentImg = () => {
    setImgUrl(currentUrl)
  }

  const handleChangeSizeColor = () => {
    setSizeColor('#000')
    setActive(!active)
  }

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
                    imgUrl={imgUrl}
                    handleChangeImg={(e) => handleChangeImg(e)}
                    handleShowCurrentImg={handleShowCurrentImg}
                  />
                  <BoxImg
                    propsData={propsData}
                    imgUrl={imgUrl}
                  />
                </div>
              </div>
              <div className="product-content-desc">
                <div className="product-title">
                  <h1>{propsData.title}</h1>
                  <span>{propsData.updatedAt}</span>
                </div>
                <div className="product-price ">
                  <span>$ {propsData.price}</span>
                </div>
                <ProductDetail
                  handleChangeSizeColor={handleChangeSizeColor}
                  sizeColor={sizeColor}
                  active={active}
                />
                <div className="product-description">
                  <ProductDescription
                    propsData={propsData}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item