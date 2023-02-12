// import React, { useEffect} from 'react'
import BookCatalog from '../explore-module/BookCatalog'
import Containers from '../shared-elements/Containers'
// import PropTypes from 'prop-types'

const ExplorePage = props => {

  // useEffect(()=> {}, [])

  return (
    <>
      <Containers containerRight_Content={<BookCatalog 
      bookDetails={props.bookData}
      />} 
      titleSectionRight={'Explore the latest'} 
      titleSectionLeft={'Your books'}/>
    </>
  )
}

ExplorePage.propTypes = {}

export default ExplorePage