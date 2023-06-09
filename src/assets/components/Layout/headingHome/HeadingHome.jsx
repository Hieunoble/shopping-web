import React from 'react'
import HeadingHomeStyle from './HeadingHomeStyle.scss'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const HeadingHome = () => {
  return (
    <div>
      <div className="wrapper-heading-home">
        <div className="container-fluid">
          <div className="site-heading">
            <h2>
              <a href="">
                More Item
                <MdKeyboardDoubleArrowRight />
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadingHome