import React, {useContext} from 'react'
import '.././styles/UserStyles.css'
import UserBookCatalogElement from './UserBookCatalogElement'
import {UserLibContext} from '../contexts/BookContext'

const UserBookCatalog = props => {

    const {userLibrary} = useContext(UserLibContext)

    return (
        <div className='userBookCatalogContainer'>
            { userLibrary ? <div>{userLibrary.map((book, index) => <UserBookCatalogElement key={index} bookDetails={book}/>)}</div>
                : <div>You have no books</div>}
        </div>
    )
}

// UserBookCatalog.propTypes = {}

export default UserBookCatalog