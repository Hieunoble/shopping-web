import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import './BodyStyle.scss'
import Products from '../../../pages/product/ProductForm'

const Body = ({ ...props }) => {

  const newList = props.productList

  return (
    <div className="body-wrapper">
      <div className="collection-wrapper">
        <div className="row">
          {newList.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/san-pham`}
                state={item}
                className="col-md-5"
              >
                <div className="product-block">
                  <div className="product-img">
                    <img src={item.category.image} alt="ao-phong" />
                  </div>
                  <div className="product-detail">
                    <div className="box-product-detail">
                      <h3 className="name-product-detail">{item.title}</h3>
                      <ul className="img-product-detail">
                        {item.images.map((itemPic, index) => {
                          return (
                            <li key={index}>
                              <img src={itemPic} alt="small-ao-phong" />
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
              </Link>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default Body