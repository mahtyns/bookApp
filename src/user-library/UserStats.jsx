import {useContext} from 'react'
import ProfilePicture from '../shared-elements/components/ProfilePicture'
import '.././styles/UserStyles.css'
import Texts from '../shared-elements/Texts'
import {UserLibContext} from '../contexts/BookContext'

// import PropTypes from 'prop-types'

const UserStats = props => {

    const {userLibrary} = useContext(UserLibContext)

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
                    <Texts textContent={`2`} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Currently reading'}/>
                    <Texts textContent={'2'} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Want to read'}/>
                    <Texts textContent={'2'} textColor={'success'} textWeight={'boldText'}/>
                </div>

                <div className="statsElement">
                    <Texts textContent={'Want to share'}/>
                    <Texts textContent={'2'} textColor={'success'} textWeight={'boldText'}/>
                </div>

            </div>
        </div>
    )
}

// UserStats.propTypes = {}

export default UserStats