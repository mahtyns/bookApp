import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'
import { useContext, useState, useRef, useCallback } from 'react'
import { UserLibContext } from '../contexts/BookContext'

// import AddBookPopup from './components/AddBookPopup'

const BookCatalog = props => {

    const { userLibrary, setUserLibrary } = useContext(UserLibContext)
    const [isPopupOpen, setPopupOpen] = useState(false)
    const addedBook = useRef(null)
    const bookStatus = useRef(null)

    const checkIfExists = (index) => {
        const isRepeatedItem = userLibrary.find(element => element.id === index)
        return isRepeatedItem
    }

    const handleStatusSelect = useCallback(
        (event) => { bookStatus.current = event.target.value },
        []
    )

    const addSetBookStatus = useCallback(
        (book) => {
            setPopupOpen(!isPopupOpen);
            addedBook.current = book;
        }, [isPopupOpen]
    )

    const addBookToLibrary = (book) => {
        if (!checkIfExists(book.id) && bookStatus.current) {
            setUserLibrary([
                ...userLibrary, {
                    ...book,
                    status: bookStatus.current,
                    sharing: false
                }
            ])
        } else
            console.log('This item is already in your library')
        setPopupOpen(!isPopupOpen)
    }

    return (
        <div className='bookCatalogContainer'>
            {props
                .bookDetails
                .map(bookDet => <BookCatalogElement
                    addSetBookStatus={addSetBookStatus}
                    key={bookDet.id}
                    bookDetails={bookDet}
                    isPopupOpen={isPopupOpen}
                    addBookToLibrary={addBookToLibrary}
                    handleStatusSelect={handleStatusSelect}
                    setPopupOpen={setPopupOpen}
                    checkIfExists={checkIfExists}
                     />)}
            {/* {isPopupOpen && <AddBookPopup
                setPopupOpen={setPopupOpen}
                addBookToLibrary={addBookToLibrary}
                book={addedBook.current}
                handleStatusSelect={handleStatusSelect} />} */}
        </div>
    )
}

// BookCatalog.propTypes = {}

export default BookCatalog