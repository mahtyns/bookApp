import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'
import {useContext} from 'react'
import {UserLibContext} from '../contexts/BookContext'

// import AddBookPopup from './components/AddBookPopup'

const BookCatalog = props => {

    const {userLibrary} = useContext(UserLibContext)
    const {setUserLibrary} = useContext(UserLibContext)

    const checkIfExists = (index) => {
        const isRepeatedItem = userLibrary.find(element => element.id === index)
        return isRepeatedItem
    }

    const addBookToLibrary = (book) => {
        if (!checkIfExists(book.id)) {
            setUserLibrary([
                ...userLibrary,
                book
            ])
        } else console.log('This item is already in your library')
    }

    return (
        <div className='bookCatalogContainer'>
            {props
                .bookDetails
                .map(bookDet => <BookCatalogElement
                    addBookToLibrary={addBookToLibrary}
                    key={bookDet.id}
                    bookDetails={bookDet}/>)}
            {/* <AddBookPopup /> */}
        </div>
    )
}

// BookCatalog.propTypes = {}

export default BookCatalog