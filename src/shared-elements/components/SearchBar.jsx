import React from 'react'
import '../../styles/UserStyles.css'


const SearchBar = (props) => {
  return (
    <input className={`search-bar ${props.textChange ? '' : 'mobile'}`} placeholder='Search anything...' />
  )
}

export default SearchBar