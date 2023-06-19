import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'


const SaleUp = ({...props}) => {
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

export default SaleUp