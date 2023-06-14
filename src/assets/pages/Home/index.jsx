import React, { useEffect, useState } from 'react'
import Banner from '../../components/Layout/DefaultLayout/components/banner/Banner.jsx'
import Body from '../../components/Layout/body/Body.jsx'
import NewCollection from '../../components/Layout/newCollection/NewCollection.jsx'
import HeadingHome from '../../components/Layout/headingHome/HeadingHome.jsx'
import axios from 'axios'
// import HeaderStyle from "./HeaderStyle.css"
// import MenuProduct from './header-menu/Product'
// import Buy1Get1 from './header-menu/Buy1Get1'
// import SaleUp from './header-menu/SaleUp'
// import Address from './header-menu/Address'
// import Policies from './header-menu/Policies'
// import Search from './header-icons/Search'
// import Cart from './header-icons/Cart'
// import Users from './header-icons/Users'

const Home = ({ ...props }) => {

  return (
    <div className='main-home'>
      <HeadingHome />
      <NewCollection />
      <Body
        productList={props.productList}
      />
    </div>
  )
}

export default Home