import React from 'react'
// import PropTypes from 'prop-types'

const LoginInput = props => {
  return (
    <div className='login-form'>
    <input placeholder={props.labelTag} />
    </div>
  )
}

// LoginInput.propTypes = {}

export default LoginInput