import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { VscTriangleUp } from 'react-icons/vsc'
import Tippy from '@tippyjs/react/headless';

import HeaderIconStyles from '../HeaderIconStyles.css'
import SearchDrop from './SearchDrop.css'

import { Wrapper as PopperWrapper } from '../popper/index.js'


const Search = () => {
  // const [visible, setVisible] = useState(true);
  // const show = () => setVisible(true);
  // const hide = () => setVisible(false);
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult(['ao phong', ' quan dai'])
    }, 0)
  }, [])

  return (
    <div>
      <div className="headerIcon">
        <div className='icon-action'>
          <FiSearch className='search headerLeftIcon' />
        </div>

        <div className="icon-dropdown search">
          <div className='dropdown-arrow'>
            <VscTriangleUp className='arrow' />
          </div>
          <div className="dropdown-box">
            <p>Search</p>
            <div className="find">
              <Tippy
                interactive
                placement='bottom'
                visible={searchResult.length > 0}
                content="Search"
                render={attrs => (
                  // <PopperWrapper>
                  //   </PopperWrapper>
                  <div
                    className='search-result' tabIndex="-1" {...attrs}
                  >
                    Result
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