import React from 'react'
import Logo from '../shared-elements/components/Logo'
import Copytext from './components/Copytext'
import { LoginText } from '../resources/textContents'
import LoginInput from '../login-module/components/LoginInput'
import Button from '../shared-elements/Button'
import Texts from '../shared-elements/Texts'
// import PropTypes from 'prop-types'

const LoginModule = props => {
  return (
    <>
    <div className='login-logo'>
      <Logo logoSize='main'/>
      <Copytext textContent={LoginText}/>
    </div>
    <div className="login-form">
      <form>
        <LoginInput labelTag='Email' required/>
        <LoginInput labelTag='Password' required />
        <Button buttonText='Enter' buttonSize='fullWidth' buttonColor='confirm'/>
      </form>  
    </div>
    <div className='login-switch'>
      <Texts textContent={"I don't have an account -"} textSize="medium" textColor="main" />
      <Texts textContent={"Register here"} textSize="medium" textColor="success" />
    </div>
    </>
  )
}

// LoginModule.propTypes = {}

export default LoginModule