import React from 'react'
import '.././styles/UserStyles.css'
import UserBookCatalogElement from './UserBookCatalogElement'

// import PropTypes from 'prop-types'

const UserBookCatalog = props => {
  return (
    <div className='userBookCatalogContainer'>
        {props.userLibrary.map(book => <UserBookCatalogElement bookDetails={book}/>)}
    </div>
  )
}

// UserBookCatalog.propTypes = {}

export default UserBookCatalog