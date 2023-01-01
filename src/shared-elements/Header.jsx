import React from 'react'
import Logo from './components/Logo'
import Texts from './Texts'
// import PropTypes from 'prop-types'

const Header = props => {
  return (
    <nav>
        <div className='navbar'>
            <div className="navbar-logo">
                <Logo logoSize='main' logoInvert={true}/>
            </div>
            <div className="navbar-links">
                <Texts textContent={'Your Library'} textSize='large' textColor='invert'/>
                  <Texts textContent={'Friends'} textSize='large' textColor='invert' />
                  <Texts textContent={'Book Map'} textSize='large' textColor='invert' />
            </div>
            <div className="navbar-interaction">
                <div>Search</div>
                <div>Profile</div>
            </div>
        </div>       
    </nav>
  )
}

// Header.propTypes = {}

export default Header