// import React, { useEffect} from 'react'
import BookCatalog from '../explore-module/BookCatalog'
import Containers from '../shared-elements/Containers'
import useBookApi from '../hooks/useBookAPI'
import {API_BOOKS_URL} from '../API'
// import PropTypes from 'prop-types'

const ExplorePage = props => {

    const books = useBookApi(API_BOOKS_URL)

    return ( 
    <> 
      <Containers
          containerRight_Content={< BookCatalog bookDetails = {
          books
      }
      addBookToLibrary = {
          props.addBookToLibrary
      } />}
          titleSectionRight={'Explore the latest'}
          titleSectionLeft={'Your books'}/> 
    </>
  )
}

ExplorePage.propTypes = {}

export default ExplorePage