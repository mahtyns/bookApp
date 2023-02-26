import React from 'react'
import Texts from '../shared-elements/Texts'
import '.././styles/UserStyles.css'

// import PropTypes from 'prop-types'

const UserBookCatalogElement = props => {
  return (
    <div className='userBookCatalogElemContainer'>
          {/* <div className='bookDetailsCoverImg'>
              <img alt={props.bookDetails.title} src={props.bookDetails.image_url} />
          </div> */}
          <div>
              <Texts textContent={props.bookDetails.title} textSize={'large'} textWeight={'boldText'} />
              <Texts textContent={props.bookDetails.authors} textSize={'medium'} textColor={'inactive'} />

              <Texts textContent={`Pages: ${props.bookDetails.num_pages}`} textSize={'medium'} />
              <Texts textContent={`Rating: ${props.bookDetails.rating}`} textSize={'medium'} />
              <Texts textContent={`Genres: ${props.bookDetails.genres}`} textSize={'small'} textColor={'inactive'} />

          </div>
    </div>
  )
}

// UserBookCatalogElement.propTypes = {}

export default UserBookCatalogElement