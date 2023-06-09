import React from 'react'
import { BsBag } from 'react-icons/bs'
import { VscTriangleUp } from 'react-icons/vsc'
import { BsCart } from 'react-icons/bs'
import CartStyle from './CartStyle.scss'
import HeaderIconStyles from '../HeaderIconStyles.scss'

const Cart = () => {
  return (
    <div>
      <div className="headerIcon">
        <div className='icon-action'>
          <BsBag className='headerLeftIcon' />
        </div>

        <div className="icon-dropdown cart">
          <div className='dropdown-arrow'>
            <VscTriangleUp className='arrow' />
          </div>
          <div className="dropdown-box">
            <div className="site-cart">
              <div className="cart-heading">
                <p className='cart-heading-box'>Cart</p>
              </div>
              <div className="cart-view">
                <div className="cart-view-scroll">
                  <BsCart />
                  <p>No item yet</p>
                </div>
              </div>
              <div className="cart-view-total">
                <table>
                  <tbody>
                    <tr>
                      <td className='text-left'>Total price :</td>
                      <td className='text-right total-cart'>$0</td>
                    </tr>
                    <tr>
                      <td>
                        <button className='cartBtn'>
                          <a href="">Check your cart</a>
                        </button>
                      </td>
                      <td>
                        <button className='cartBtn'>
                          <a href="">Buy</a>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart