import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Handle change color here

import './ProductFormStyle.scss'
import ListImg from './listImgStyle/ListImg'
import BoxImg from './boxImg/BoxImg'
import ProductDetail from './productDetail/ProductDetail'
import ProductDescription from './productDescription/ProductDescription'

const Item = ({ ...props }) => {

  //initial size button
  const [sizeBtn, setSizeBtn] = useState({
    activeObject: null,
    objects:
      [
        {
          id: 'size-s',
          type: 'radio',
          value: 'S'
        },
        {
          id: 'size-m',
          type: 'radio',
          value: 'M'
        },
        {
          id: 'size-l',
          type: 'radio',
          value: 'L'
        },
        {
          id: 'size-xl',
          type: 'radio',
          value: 'XL'
        }
      ]
  }

  )

  const [proQuantity, setProQuantity] = useState()

  //state of Link
  const location = useLocation()
  const propsData = location.state

  //Change Image when click
  const [imgUrl, setImgUrl] = useState('')
  const imgUrls = propsData.images
  const currentUrl = propsData.category.image

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

  // Change size when Click 
  const handleActiveSizeBtn = (index) => {
    setSizeBtn({ ...sizeBtn, activeObject: sizeBtn.objects[index] })
  }

  const handleChangeSizeColor = (index) => {
    if (sizeBtn.objects[index] === sizeBtn.activeObject) {
      return 'active'
    } else {
      return ''
    }
  }

  //Change quantity
  const countQuantity = useRef(1)
  const handleAddItem = () => {
    +countQuantity.current.value++;
    setProQuantity(countQuantity.current.value)
  }

  const handleReduceItem = () => {
    if (+countQuantity.current.value > 1) {
      +countQuantity.current.value--;
      setProQuantity(countQuantity.current.value)

    } else {
      return
    }
  }

  //Add Item to cart
  const [openCart, setOpenCart] = useState(false)

  const addToCart = (e) => {
    const productQuantity = countQuantity.current.value
    e.preventDefault()
    // setOpenCart(!openCart)
    console.log(proQuantity);
    return proQuantity
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
                    className="product-list-img"
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
                  sizeBtn={sizeBtn}
                  handleActiveSizeBtn={(index) => handleActiveSizeBtn(index)}
                  handleChangeSizeColor={(index) => handleChangeSizeColor(index)}
                  countQuantity={countQuantity}
                  handleAddItem={handleAddItem}
                  handleReduceItem={handleReduceItem}
                  addToCart={(e) => addToCart(e)}
                  openCart={openCart}
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