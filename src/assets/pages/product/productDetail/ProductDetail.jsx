import React from 'react'
import './ProductDetailStyle.scss'
//size button background need to be checked

const ProductDetail = ({ ...props }) => {
  console.log(props.sizeColor);
  return (
    <div>
      <form className="add-item-form">

        <div className="select-swatch">

          <div className="check-size">
            <div className="select-size">
              <div
                className="size"
                onClick={props.handleChangeSizeColor}
              >
                <input id='size-m' type="radio" value="M" />
                <label
                  style={{ background: props.sizeColor }}
                  htmlFor="size-m">
                  <span>M</span>
                </label>
              </div>

              <div
                onClick={props.handleChangeSizeColor}
                className="size"
              >
                <input id='size-l' type="radio" value="L" />
                <label
                  style={{ background: props.sizeColor }}
                  htmlFor="size-l">
                  <span>L</span>
                </label>
              </div>

              <div
                onClick={props.handleChangeSizeColor}
                className="size"
              >
                <input id='size-xl' type="radio" value="XL" />
                <label
                  style={{ background: props.sizeColor }}
                  htmlFor="size-xl">
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
            <input type="button" className="quantity-btn" defaultValue="-" />
            <input type="text" className="quantity-selector" defaultValue="1" min="1" />
            <input type="button" className="quantity-btn" defaultValue="+" />
          </div>

          <div className="wrap-addcart">
            <button>Add to cart</button>
          </div>

        </div>
      </form >
    </div >
  )
}

export default ProductDetail