import React from 'react'
import BodyStyle from './BodyStyle.scss'

const Body = ({ ...props }) => {
  const newList = props.productList
  newList.map((product) => {
  })

  return (
    <div className="body-wrapper">
      <div className="collection-wrapper">
        <div className="row">
          {newList.map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-5"
              >
                <div className="product-block">
                  <div className="product-img">
                    <img src={item.image} alt="ao-phong" />
                  </div>
                  <div className="product-detail">
                    <div className="box-product-detail">
                      <h3 className="name-product-detail">{item.title}</h3>
                      <ul className="img-product-detail">
                        {newList.map((item, index) => {
                          return (
                            <li key={index}>
                              <img src={item.image} alt="small-ao-phong" />
                            </li>
                          )
                        })}
                      </ul>
                      <div className="price-product-detail">
                        <p><span>{item.price}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body