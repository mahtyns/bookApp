import React, {useContext} from 'react'
import '.././styles/UserStyles.css'
import UserBookCatalogElement from './UserBookCatalogElement'
import {UserLibContext} from '../contexts/BookContext'
import Texts from '../shared-elements/Texts'
import SearchBar from '../shared-elements/components/SearchBar'

const UserBookCatalog = props => {

    const {userLibrary} = useContext(UserLibContext)

    return (

        <div className='userBookCatalogContainer'>
            <div className='userBookOptions'>
                <div className='userBooksCount'>
                    <Texts textSize={'large'} textContent={'Books in your library:'}/>
                    <Texts
                        textSize={'large'}
                        textContent={`${userLibrary.length}`}
                        textWeight={'boldText'}/>
                </div>
                <SearchBar placeholder={'Search in your library'} version={'light'}/>
            </div>
            <div className="userBookList">
                {userLibrary.length
                    ? <>{userLibrary.map((book, index) => <UserBookCatalogElement key={index} bookDetails={book} />)}</>
                    : <Texts
                        textSize={'large'}
                        textContent={'You have no books added to your library.'}
                        textColor={'alert'}/>}
            </div>
        </div>
    )
}

// UserBookCatalog.propTypes = {}

export default UserBookCatalog