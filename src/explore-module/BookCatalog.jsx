import BookCatalogElement from './BookCatalogElement'
import '.././styles/ExploreBooksCatalogStyles.css'
import {useContext} from 'react'
import {UserLibContext} from '../contexts/BookContext'

// import AddBookPopup from './components/AddBookPopup'

const BookCatalog = props => {

    const {userLibrary} = useContext(UserLibContext)
    const {setUserLibrary} = useContext(UserLibContext)

    const addBookToLibrary = (book) => {
        setUserLibrary([
            ...userLibrary,
            book
        ])
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