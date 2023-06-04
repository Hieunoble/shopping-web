import React from 'react'
import Header from './header/Header'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout