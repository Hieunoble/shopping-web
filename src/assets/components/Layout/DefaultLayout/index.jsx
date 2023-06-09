import React from 'react'
import Header from '../../Layout/header/Header.jsx'
import Banner from './components/banner/Banner'
import Styles from './Styles.scss'
import Footer from '../footer/Footer.jsx'
import BottomFooter from '../bottomFooter/BottomFooter.jsx'

const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <Banner />
        <div className="content">{children}</div>
        <Footer />
        <BottomFooter />
      </div>
    </div>
  )
}

export default DefaultLayout