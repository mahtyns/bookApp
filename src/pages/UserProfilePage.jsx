import React from 'react'
import Containers from '../shared-elements/Containers'
import AboutYou from '../user-profile/components/AboutYou'
// import PropTypes from 'prop-types'

const UserProfilePage = props => {
    return (<Containers
        containerRight_Content={null}
        titleSectionRight={'Account settings'}
        titleSectionLeft={'About you'}
        containerLeft_Content={<AboutYou />}/>)
}

// UserProfilePage.propTypes = {}

export default UserProfilePage