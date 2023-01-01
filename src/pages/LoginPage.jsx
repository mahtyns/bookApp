import React from 'react'
import '../styles/RegisterLoginStyles.css'

const LoginPage = props => {
  return (
    <div className='container login-container'>
        {props.moduleContent}
    </div>
  )
}

export default LoginPage