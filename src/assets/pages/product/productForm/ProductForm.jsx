import React from 'react'
import './ProductFormStyle.scss'

const ProductForm = () => {
  return (
    <div>
      <form className="add-item-form">

        <div className="select-swatch">

          <div className="check-size">
            <div className="select-size">
              <div className="size">
                <input id='size-m' type="radio" value="M" />
                <label htmlFor="size-m">
                  <span>M</span>
                </label>
              </div>

              <div className="size">
                <input id='size-m' type="radio" value="M" />
                <label htmlFor="size-m">
                  <span>L</span>
                </label>
              </div>

              <div className="size">
                <input id='size-m' type="radio" value="M" />
                <label htmlFor="size-m">
                  <span>XL</span>
                </label>
              </div>
            </div>
          </div>

          <div className="check-color">
            <div className="color-header">
              <span>White</span>
            </div>
            <div className="select-color">
              <div className="color">
                <input id='color-w' type="radio" value="White" />
                <label htmlFor="color-w">
                  <span>White</span>
                </label>
              </div>
            </div>
          </div>

        </div>

        <div className="size-checking-guide">
          <a href="" className='view-size'>View Size</a>
        </div>

        <div className="selector-action">

          <div className="quantity">
            <input type="button" className="quantity-btn" value="-" />
            <input type="text" className="quantity-selector" value="1" min="1" />
            <input type="button" className="quantity-btn" value="+" />
          </div>

          <div className="wrap-addcart">
            <button>Add to cart</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default ProductForm