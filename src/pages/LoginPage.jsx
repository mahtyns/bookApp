import React from 'react'
import '../styles/RegisterLoginStyles.css'

const LoginPage = props => {
  return (
    <div className='app-wrapper'>
      <div className='container login-container'>
        {props.moduleContent}
      </div>
    </div>
  )
}

export default LoginPage