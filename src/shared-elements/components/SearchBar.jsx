import React from 'react'
import '../../styles/UserStyles.css'
import classNames from 'classnames'

const SearchBar = (props) => {

  const searchbarStyles = classNames('search-bar', {
    'darkVersion': props.version === 'dark',
    'lightVersion' : props.version === 'light'  
  })

  return (
    <input className={`${searchbarStyles} ${props.textChange ? '' : 'mobile'}`} placeholder={props.placeholder} />
  )
}

export default SearchBar