import React from 'react'
import img from '../../resources/profile.png'
import '../../styles/UserStyles.css'

const ProfilePicture = () => {
  return (
    <div className='profile-picture'>
        <img src={img} alt=''/>
    </div>
  )
}

export default ProfilePicture