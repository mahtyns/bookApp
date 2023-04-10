import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'
import {useContext, useState} from 'react'
import {UserLibContext} from '../contexts/BookContext'

import AddBookPopup from './components/AddBookPopup'

const BookCatalog = props => {

    const {userLibrary, setUserLibrary} = useContext(UserLibContext)
    const [isPopupOpen,
        setPopupOpen] = useState(false)
    const [addedBook,
        setAddedBook] = useState(null)
    const [bookStatus,
        setBookStatus] = useState('default')

    const checkIfExists = (index) => {
        const isRepeatedItem = userLibrary.find(element => element.id === index)
        return isRepeatedItem
    }

    const handleStatusSelect = (event) => {
        setBookStatus(event.target.value)
        console.log(event.target.value)
    }

    const addSetBookStatus = (book) => {
        setPopupOpen(!isPopupOpen);
        setAddedBook(book)
    }

    const addBookToLibrary = (book) => {
        if (!checkIfExists(book.id)) {
            setUserLibrary([
                ...userLibrary, {
                    ...book,
                    status: bookStatus
                }
            ])
        } else 
            console.log('This item is already in your library')
    }

    return (
        <div className='bookCatalogContainer'>
            {props
                .bookDetails
                .map(bookDet => <BookCatalogElement
                    addSetBookStatus={addSetBookStatus}
                    key={bookDet.id}
                    bookDetails={bookDet}/>)}
            {isPopupOpen && <AddBookPopup
                setPopupOpen={setPopupOpen}
                addBookToLibrary={addBookToLibrary}
                book={addedBook}
                handleStatusSelect={handleStatusSelect}/>}
        </div>
    )
}

// BookCatalog.propTypes = {}

export default BookCatalog