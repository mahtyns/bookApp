import React from 'react'
import Texts from '../shared-elements/Texts'
import '.././styles/UserStyles.css'
import Button from '../shared-elements/Button'

// import PropTypes from 'prop-types'

const UserBookCatalogElement = props => {
    return (
        <div className='userBookCatalogElemContainer'>
            <div className="userBookWrapper">
                <div className="userBooksMiniature">
                    <img src={props.bookDetails.image_url} alt={props.bookDetails.title}/>
                </div>
                <div className='userBooksStatus'>
                    <div>
                        <Texts
                            textContent={props.bookDetails.title}
                            textSize={'large'}
                            textWeight={'boldText'}/>
                        <Texts
                            textContent={props.bookDetails.authors}
                            textSize={'medium'}
                            textColor={'inactive'}/>
                    </div>
                    <div>
                        <div className='flex-row'>
                            <Texts textContent={'Your status: '}/>
                            <Texts textContent={props.bookDetails.status}/>
                        </div>
                        <Button buttonText={'Change status'} buttonSize={'large'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// UserBookCatalogElement.propTypes = {}

export default UserBookCatalogElement