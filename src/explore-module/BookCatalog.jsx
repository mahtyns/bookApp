import React from 'react'
import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'

// import PropTypes from 'prop-types'

const BookCatalog = props => {

  return (
    <div className='bookCatalogContainer'>
      {props.bookDetails.map(bookDet => <BookCatalogElement bookDetails={bookDet} />)}
    </div>
  )
}

// BookCatalog.propTypes = {}

export default BookCatalog