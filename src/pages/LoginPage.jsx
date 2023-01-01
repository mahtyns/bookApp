import React from 'react'
import RegisterModule from '../login-module/RegisterModule'
import '../styles/RegisterLoginStyles.css'

const LoginPage = () => {
  return (
    <div className='container login-container'>
        <RegisterModule />
    </div>
  )
}

export default LoginPage