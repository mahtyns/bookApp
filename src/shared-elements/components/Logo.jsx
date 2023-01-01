import React from 'react'
import classNames from "classnames"
import '../../styles/LogoSizes.css'

const Logo = (props) => {

  const logoSizes = classNames('logo', {
    'main': props.logoSize === 'main',
    'small': props.logoSize === 'small',
    'large': props.logoSize === 'large'
  })

  return (
    <div className={logoSizes}>
          Walking<span className='secondary'>Books</span>
    </div>
  )
}

export default Logo