import React, {useContext} from 'react'
import '.././styles/UserStyles.css'
import UserBookCatalogElement from './UserBookCatalogElement'
import {UserLibContext} from '../contexts/BookContext'
import Texts from '../shared-elements/Texts'

const UserBookCatalog = props => {

    const {userLibrary} = useContext(UserLibContext)

    return (
        <div className='userBookCatalogContainer'>
            { userLibrary.length ? <div>{userLibrary.map((book, index) => <UserBookCatalogElement key={index} bookDetails={book}/>)}</div>
          : <Texts textSize={'large'} 
          textContent={'You have no books added to your library.'} 
          textColor={'alert'}/>}
        </div>
    )
}

// UserBookCatalog.propTypes = {}

export default UserBookCatalog