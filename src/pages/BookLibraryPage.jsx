import React from 'react'
import Containers from '../shared-elements/Containers'
import UserBookCatalog from '../user-library/UserBookCatalog'
import UserStats from '../user-library/UserStats'

// import PropTypes from 'prop-types'

const BookLibraryPage = props => {
  return (
    <Containers 
    containerRight_Content={<UserBookCatalog userLibrary={props.userLibrary}/>} 
    titleSectionRight={'Your library'} 
    titleSectionLeft={'Stats'}
    containerLeft_Content={<UserStats />} />
  )
}

BookLibraryPage.propTypes = {}

export default BookLibraryPage