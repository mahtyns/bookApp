import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import '../styles/ButtonStyles.css'

const Button = props => {

  const buttonStyles = classNames('buttonMain', 
  {
    'confirm': props.buttonColor === 'confirm',
    'inactive': props.buttonColor === 'inactive',
    'danger': props.buttonColor === 'danger',
  },
  {
    'small': props.buttonSize === 'small',
    'medium': props.buttonSize === 'medium',
    'large': props.buttonSize === 'large',
    'fullWidth': props.buttonSize === 'fullWidth'
  } )  

  return (
    <button className={buttonStyles} onClick={()=>props.handleClick()} >
        { props.buttonText }
    </button>
  )
}

Button.propTypes = {
    buttonColor: PropTypes.string,
    buttonSize: PropTypes.string,
    buttonText:PropTypes.string
}

export default Button