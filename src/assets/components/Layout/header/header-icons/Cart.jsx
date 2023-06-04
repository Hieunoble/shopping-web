import React from 'react'
import { BsBag } from 'react-icons/bs'
import { VscTriangleUp } from 'react-icons/vsc'
import HeaderIconStyles from './HeaderIconStyles.css'


const Cart = () => {
  return (
    <div>
      <div className="headerIcon">
        <div className='icon-action'>
          <BsBag className='headerLeftIcon' />
        </div>
        {/* <div className="icon-dropdown">
          <div className='dropdown-arrow'>
            <VscTriangleUp className='arrow' />
          </div>
          <div className="dropdown-box">
            <p>Search</p>
            <div className="find">
              <input type="text" />
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Cart