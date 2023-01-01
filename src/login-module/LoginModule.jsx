import React from 'react'
import Logo from '../shared-elements/components/Logo'
import Copytext from './components/Copytext'
import { LoginText } from '../resources/textContents'
import LoginInput from '../login-module/components/LoginInput'
import Button from '../shared-elements/Button'
// import PropTypes from 'prop-types'

const LoginModule = props => {
  return (
    <>
    <div className='login-logo'>
      <Logo logoSize='main'/>
      <Copytext textContent={LoginText}/>
    </div>
    <div className="login-form">
        <LoginInput labelTag='Email'/>
        <LoginInput labelTag='Password'/>
        <Button buttonText='Log In' buttonSize='fullWidth' buttonColor='confirm'/>
    </div>
    <div>
      <Copytext textContent="I don't have an account" />
      <Copytext textContent="Log in" />
    </div>
    </>
  )
}

// LoginModule.propTypes = {}

export default LoginModule