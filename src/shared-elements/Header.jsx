import React from 'react'
import Logo from './components/Logo'
import Texts from './Texts'
import { Link } from 'react-router-dom'
import ProfilePicture from './components/ProfilePicture'
import SearchBar from './components/SearchBar'
// import PropTypes from 'prop-types'

const Header = props => {
  return (
    <nav>
          <div className='navbar'>
            <div className="navbar-logo">
              <Link to='/'>
                <Logo logoSize='main' logoInvert={true}/>
              </Link>
            </div>
            <div className="navbar-links">
                <Link to='/explore'>
                  <Texts textContent={'Explore'} textSize='large' textColor='invert'/>
                </Link>
                <Link to='/library'>
                  <Texts textContent={'Your Library'} textSize='large' textColor='invert'/>
                </Link>
                <Link to='/friends'>
                  <Texts textContent={'Friends'} textSize='large' textColor='invert' />
                </Link>
                <Link to='/bookmap'>  
                  <Texts textContent={'Book Map'} textSize='large' textColor='invert' />
                </Link>
            </div>
            <div className="navbar-interaction">
                  <SearchBar />
              <Link to='/user' >  
                <ProfilePicture imgSize={'small'}/>
              </Link>  
            </div>
          </div>      
    </nav>
  )
}

// Header.propTypes = {}

export default Header