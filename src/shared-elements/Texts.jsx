import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import '../styles/TextStyles.css'

const Texts = props => {

  const textStyles =  classNames('mainText', {
    'xsmall': props.textSize === 'xsmall',
    'small': props.textSize === 'small',
    'medium': props.textSize === 'medium',
    'large': props.textSize === 'large',
    'xlarge': props.textSize === 'xlarge',
  },
  {
    'main': props.textColor === 'main',
    'invert': props.textColor === 'invert',
    'alert': props.textColor === 'alert',
    'success': props.textColor === 'success',
    'inactive': props.textColor === 'inactive'

  },
  {
    'decorFont': props.fontStyle === 'decorFont'
  },
  {
    'boldText': props.textWeight === 'boldText'
  })
    
  return (
    <div className={textStyles} onClick={()=>props.handleClick()}>
        {props.textContent}        
    </div>
  )
}

Texts.propTypes = {
    textContent: PropTypes.string,
    textSize: PropTypes.string
}

export default Texts