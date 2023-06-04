import React from 'react'
import Header from '../../Layout/header/Header.jsx'
import Banner from './components/banner/Banner'
import styles from './styles.css'

const DefaultLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <Banner />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout