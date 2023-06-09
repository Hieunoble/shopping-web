import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { VscTriangleUp } from 'react-icons/vsc'
import HeaderIconStyles from '../HeaderIconStyles.scss'
import UserDrop from './UserDrop.scss'

const Users = () => {
  return (
    <div>
      <div className="headerIcon">
        <div className='icon-action'>
          <FaUserCircle className='headerLeftIcon' />
        </div>
        <div className="icon-dropdown user">
          <div className='dropdown-arrow'>
            <VscTriangleUp className='arrow' />
          </div>
          <div className="dropdown-box">
            <div className="login-box">
              <div className="login-header">
                <h2>Login</h2>
                <p>Fill your email and password</p>
              </div>
              <div className="login-account">
                <form action="">
                  <div className="form-input-wrapper">
                    <input type="email" id='login-email' />
                    <label htmlFor="login-email">Email</label>
                  </div>
                  <div className="form-input-wrapper">
                    <input type="password" id='login-password' />
                    <label htmlFor="login-password">Password</label>
                    <div className="sitebox-recaptcha">
                      This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy and Policy </a>
                      and <a href="https://policies.google.com/terms"> Terms of service</a> apply.
                    </div>
                  </div>
                  <button type='submit' className='signinBtn'>Sign in</button>
                </form>
                <div className='login-account-action'>
                  <p> Newbie ? <a href="">create account</a> </p>
                  <p>Forgot password ? <a href="">recover password</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users