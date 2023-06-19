import React from 'react'
import './ProductDetailStyle.scss'
//size button background need to be checked

const ProductDetail = ({ ...props }) => {
  return (
    <div>
      <form className="add-item-form">

        <div className="select-swatch">

          <div className="check-size">
            <div className="select-size">
              {
                props.sizeBtn.objects.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => props.handleActiveSizeBtn(index)}
                    className={`size ${size.id} ` + props.handleChangeSizeColor(index)}
                  >
                    <input id={size.id} type={size.type} value={size.value} />
                    <label
                      htmlFor={size.id}
                    >
                      <span>{size.value}</span>
                    </label>
                  </div>
                ))
              }
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
            <input onClick={props.handleReduceItem} type="button" className="quantity-btn" defaultValue="-" />
            <input ref={props.countQuantity} type="text" className="quantity-selector" defaultValue='1' min="1" />
            <input onClick={props.handleAddItem} type="button" className="quantity-btn" defaultValue="+" />
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