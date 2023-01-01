import React from 'react'
import Logo from './components/Logo'
// import PropTypes from 'prop-types'

const Header = props => {
  return (
    <nav>
        <div className='navbar'>
            <div className="navbar-logo">
                <Logo logoSize='main' logoInvert={true}/>
            </div>
        </div>       
    </nav>
  )
}

// Header.propTypes = {}

export default Header