import React from 'react'
import Containers from '../shared-elements/Containers'
import BookMapContainer from '../book-map-module/BookMapContainer'

// import PropTypes from 'prop-types'

const BookMapPage = props => {
  return (
    <>
      <Containers 
      titleSectionLeft={'Sharing'}
      titleSectionRight={null}
      containerLeft_Content={null}
      containerRight_Content={<BookMapContainer/>}
      />
    </>
  )
}

BookMapPage.propTypes = {}

export default BookMapPage