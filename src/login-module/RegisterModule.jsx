import React from 'react'
import Logo from '../shared-elements/components/Logo'
import Copytext from './components/Copytext'
import LoginInput from '../login-module/components/LoginInput'
import Button from '../shared-elements/Button'
import Texts from '../shared-elements/Texts'
import Checkbox from './components/Checkbox'
import { RegisterText } from '../resources/textContents'
// import PropTypes from 'prop-types'

const RegisterModule = props => {
  return (
    <>
      <div className='login-logo'>
        <Logo logoSize='main' />
        <Copytext textContent={RegisterText} />
      </div>
      <div className="login-form">
        <form>
        <LoginInput labelTag='Name' required/>
        <LoginInput labelTag='Email' required />
        <LoginInput labelTag='Password' required />
        <LoginInput labelTag='Confirm password' required />
        <Checkbox />
        <Button buttonText='Register' buttonSize='fullWidth' buttonColor='confirm' />
        </form>
      </div>
      <div className='login-switch'>
        <Texts textContent={"I already have an account -"} textSize="medium" textColor="main" />
        <Texts textContent={"Log in here"} textSize="medium" textColor="success" />
      </div>
    </>
  )
}

// LoginModule.propTypes = {}

export default RegisterModule