import Texts from '../shared-elements/Texts'
import '.././styles/ExploreBooksCatalogStyles.css'
import Button from '../shared-elements/Button'
import AddBookPopup from './components/AddBookPopup'
import { useState } from 'react'

const BookCatalogElement = props => {   

    const [selectedBookID, setSelectedBookID] = useState(-1)

    return (
        <div className='bookElementContainer'>
            <div className='bookDetailsCoverImg'>
                <img alt={props.bookDetails.title} src={props.bookDetails.image_url}/>
            </div>
            <div>
                <Texts
                    textContent={props.bookDetails.title}
                    textSize={'large'}
                    textWeight={'boldText'}/>
                <Texts
                    textContent={props.bookDetails.authors}
                    textSize={'medium'}
                    textColor={'inactive'}/>
                <div className='bookElDescriptionContainer'>
                    <Texts textContent={props.bookDetails.description} textSize={'small'}/>
                </div>
                <Texts
                    textContent={`Pages: ${props.bookDetails.num_pages}`}
                    textSize={'medium'}/>
                <Texts textContent={`Rating: ${props.bookDetails.rating}`} textSize={'medium'}/>
                <Texts
                    textContent={`Genres: ${props.bookDetails.genres}`}
                    textSize={'small'}
                    textColor={'inactive'}/>
                <div className='catalog-buttons'>
                    <div className='addLibButton'>
                    <Button 
                      buttonColor={'confirm'} 
                      buttonText={'Add to your library'} 
                      buttonSize={'large'}
                      handleClick={() => {
                        props.addSetBookStatus(props.bookDetails)
                        setSelectedBookID(props.bookDetails.id)    
                    }}                      
                />
                    {props.isPopupOpen && selectedBookID === props.bookDetails.id && (<AddBookPopup 
                    book={props.bookDetails} 
                    addBookToLibrary={props.addBookToLibrary}
                    handleStatusSelect={props.handleStatusSelect}
                    setPopupOpen={props.setPopupOpen}
                    checkIfExists={props.checkIfExists}/>
                    )}
                    </div>
                    <Button 
                    buttonText={'Learn more'}
                    buttonColor={'inactive'}
                    buttonSize={'large'}/>
                </div>
            </div>
        </div>
    )
}

// BookCatalogElement.propTypes = {}

export default BookCatalogElement