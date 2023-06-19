import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import HeadingHome from '../../components/Layout/headingHome/HeadingHome'
import NewCollection from '../../components/Layout/newCollection/NewCollection'
import Body from '../../components/Layout/body/Body'


const Buy1Get1 = ({ ...props }) => {
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

export default Buy1Get1