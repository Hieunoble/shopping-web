import React from 'react'

const HeadingMenu = (children, { ...props }) => {
  return (
    <div>
      <div className=" header-detail header-menu">
        <ul>
          <li>
            {children}
            {
              props.openSubmenu &&
              (
                <ul className='sub_menu isActive'>
                  <li><Link to={'all-products'}>Shirts</Link></li>
                  <li><Link to={'/'}>Jeans</Link></li>
                  <li><Link to={'all-products'}>Sets</Link></li>
                  <li><Link to={'all-products'}>Bags</Link></li>
                  <li><Link to={'all-products'}>Shoes</Link></li>
                  <li><Link to={'all-products'}>Others</Link></li>
                </ul>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeadingMenu