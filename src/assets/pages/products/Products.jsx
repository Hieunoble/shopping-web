import React from 'react'
import HeadingHome from '../../components/Layout/headingHome/HeadingHome'
import NewCollection from '../../components/Layout/newCollection/NewCollection'
import Body from '../../components/Layout/body/Body'
// import HeaderMenuStyles from './HeaderMenuStyles.css'

const Products = ({ ...props }) => {
  return (
    <div>
      <HeadingHome />
      <NewCollection />
      <Body
        productList={props.productList}
      />
    </div>
  )
}

export default Products