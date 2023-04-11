import React from 'react'
import Texts from '../shared-elements/Texts'
import '.././styles/UserStyles.css'
import Button from '../shared-elements/Button'

// import PropTypes from 'prop-types'

const UserBookCatalogElement = props => {

    const getBookStatus = (status) => {
        switch (status) {
            case 'read':
                return 'Read';
            case 'wtr':
                return 'Want to read';
            case 'reading':
                return 'Currently reading';
            default:
                return 'Error'
        }
    }

    return (
        <div className='userBookCatalogElemContainer'>
            <div className="userBookWrapper">
                <div className='flex-row'>
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
                            {props.bookDetails.status ? (
                                <Texts textContent={getBookStatus(props.bookDetails.status)} textColor={'alert'} textWeight={'boldText'}/>
                            ) : <Texts textContent={'Error'}/>}
                        </div>
                        <div className='flex-row'> 
                        <Button buttonText={'Change status'} buttonSize={'large'}/>
                        <Texts textContent={'Remove...'} textColor={'inactive'}/>
                        </div>
                    </div>                
                </div>
                </div>
                <div className='flex-row'>
                    <div className='userBooksStatus-right'>
                        <div>
                            <Texts
                                textContent={'Your rating:'}
                                textSize={'large'}
                                textWeight={'boldText'} />
                            <Texts
                                textContent={'General rating:'}
                                textSize={'medium'}
                                textColor={'inactive'} />
                        </div>
                        {/* UI Part to share books with other users  */}
                        <div className='userBooksStatus-right'>
                            <div className='flex-row'>
                                <Texts textContent={'Currently '} />
                                <Texts textContent={props.bookDetails.sharing ? 'sharing' : 'not sharing'} textColor={'alert'} textWeight={'boldText'} />
                            </div>
                            <Button buttonText={'Share'} buttonSize={'large'} buttonColor={'confirm'}/>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

// UserBookCatalogElement.propTypes = {}

export default UserBookCatalogElement