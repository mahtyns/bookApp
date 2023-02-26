import React from 'react'
import Texts from '../shared-elements/Texts'
import '.././styles/ExploreBooksCatalogStyles.css'
import Button from '../shared-elements/Button'
// import PropTypes from 'prop-types'

const BookCatalogElement = props => {

  return (
    <div className='bookElementContainer'>
        <div className='bookDetailsCoverImg'>
            <img alt={props.bookDetails.title} src={props.bookDetails.image_url}/>
        </div>
        <div>
            <Texts textContent={props.bookDetails.title} textSize={'large'} textWeight={'boldText'}/>
            <Texts textContent={props.bookDetails.authors} textSize={'medium'} textColor={'inactive'}/>
            <div className='bookElDescriptionContainer'>
              <Texts textContent={props.bookDetails.description} textSize={'small'} />
            </div>
            <Texts textContent={`Pages: ${props.bookDetails.num_pages}`} textSize={'medium'} />
            <Texts textContent={`Rating: ${props.bookDetails.rating}`} textSize={'medium'} />
            <Texts textContent={`Genres: ${props.bookDetails.genres}`} textSize={'small'} textColor={'inactive'}/>
            <Button 
            buttonColor={'confirm'} 
            buttonText={'Add to your library'} 
            handleClick={()=>props.addBookToLibrary(props.bookDetails)}
            // onClick={()=>addBook(props.bookDetails)} 
            />
        </div>
    </div>
  )
}

// BookCatalogElement.propTypes = {}

export default BookCatalogElement