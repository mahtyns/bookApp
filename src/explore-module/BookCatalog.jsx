import React from 'react'
import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'

const BookCatalog = props => {

  return (
    <div className='bookCatalogContainer'>
      {props.bookDetails.map(bookDet => <BookCatalogElement key={bookDet.id} addBookToLibrary={props.addBookToLibrary} bookDetails={bookDet} />)}
    </div>
  )
}

// BookCatalog.propTypes = {}

export default BookCatalog