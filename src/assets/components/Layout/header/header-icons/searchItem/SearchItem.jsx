import React from 'react'
import SearchItemStyle from './SearchItemStyle.scss'

const SearchItem = () => {
  return (
    <div className='item-wrapper'>
      <div className="item-title">
        <a href="">Shirtssss</a>
        <p>$200</p>
      </div>
      <div className="item-img">
        <img src="https://theme.hstatic.net/200000201725/1000749045/14/no_image.jpg?v=672" alt="Shirt" />
      </div>
    </div>
  )
}

export default SearchItem