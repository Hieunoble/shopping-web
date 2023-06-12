import React from 'react'

const Item = ({ ...props }) => {
  console.log(props);

  //need to render this component
  return (
    <div className='product-wrapper'>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md">
            <div className="row-product-detail">
              <div className="product-content-img">
                <div className="product-gallery">
                  <div className="product-list-img">
                    abasdasasadascasca
                  </div>
                  <div className="product-box-img"></div>
                </div>
              </div>
              <div className="product-content-desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item