import {useContext} from 'react'
import ProfilePicture from '../shared-elements/components/ProfilePicture'
import '.././styles/UserStyles.css'
import Texts from '../shared-elements/Texts'
import {UserLibContext} from '../contexts/BookContext'

// import PropTypes from 'prop-types'

const UserStats = props => {

    const {userLibrary} = useContext(UserLibContext)

    const readBooks = userLibrary.filter((element) => element.status === 'read')
    const wantReadBooks = userLibrary.filter((element) => element.status === 'wtr')
    const readingBooks = userLibrary.filter((element) => element.status === 'reading')

    return (
        <div className='userStatsContainer'>
            <div className='userStatsPicture'>
                <ProfilePicture imgSize={'large'}/>
                <Texts textSize={'large'} textWeight={'boldText'} textContent={'Jane Doe'}/>
                <Texts textSize={'medium'} textContent={'jane.doe22'} textColor={'inactive'}/>
            </div>
            <div className="statsWrapper">
                <div className="statsElement">
                    <Texts textContent={'Books in Library'}/>
                    <Texts
                        textContent={`${userLibrary.length}`}
                        textColor={'success'}
                        textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Read'}/>
                    <Texts textContent={`${readBooks.length}`} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Currently reading'}/>
                    <Texts textContent={`${readingBooks.length}`} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Want to read'}/>
                    <Texts textContent={`${wantReadBooks.length}`} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Want to share'}/>
                    <Texts textContent={'X'} textColor={'success'} textWeight={'boldText'}/>
                </div>

            </div>
        </div>
    )
}

// UserStats.propTypes = {}

export default UserStats