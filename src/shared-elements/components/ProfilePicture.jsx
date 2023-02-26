import classNames from 'classnames'
import React from 'react'
import img from '../../resources/profile.png'
import '../../styles/UserStyles.css'

const ProfilePicture = (props) => {

  const profilePicStyles = classNames('profile-picture', {
    'small': props.imgSize === 'small',
    'medium': props.imgSize === 'medium',
    'large': props.imgSize === 'large'
  })

  return (
    <div className={profilePicStyles}>
        <img src={img} alt='ProfilePicture'/>
    </div>
  )
}

export default ProfilePicture