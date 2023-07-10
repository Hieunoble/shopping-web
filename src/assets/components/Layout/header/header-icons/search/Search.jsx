import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { VscTriangleUp } from 'react-icons/vsc'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../popper/index.js'

import '../HeaderIconStyles.scss'
import './SearchDrop.scss'
import SearchItem from '../searchItem/SearchItem.jsx';

const Search = ({ ...props }) => {

  const [searchResult, setSearchResult] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult(['ao phong', ' quan dai'])
  //   }, 0)
  // }, [])

  return (
    <div>
      <div className="headerIcon">
        <div
          className='icon-action'
          onClick={props.handleOpenIconAction}
          onBlur={props.handleCloseIconAction}
        >
          <FiSearch className='search headerLeftIcon' />
        </div>
        <div
          className="icon-dropdown search"
          onClick={(e) => { e.stopPropagation() }}
        >
          <div className='dropdown-arrow'>
            <VscTriangleUp className='arrow' />
          </div>
          <div className="dropdown-box">
            <p>Search</p>
            <div className="find">

              {/* Tippy's default position is absolute => render fail => other solution */}
              <Tippy
                interactive
                offset={[20, 10,]}
                placement='bottom-start'
                visible={searchResult.length > 0}
                content="Search"
                render={attrs => (
                  // <PopperWrapper>
                  //   </PopperWrapper>
                  <div
                    className='search-result' tabIndex="-1" {...attrs}
                  >
                    {/* <PopperWrapper>
                      <div className="item-wrapper">
                        <SearchItem />
                      </div>
                    </PopperWrapper> */}
                  </div>
                )}
              >
                <input
                  type="text"
                  placeholder='Find item...'
                />
              </Tippy>
              <button>
                <FiSearch className='find-icon' />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search