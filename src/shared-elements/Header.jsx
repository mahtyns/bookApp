import Logo from './components/Logo'
import Texts from './Texts'
import {Link} from 'react-router-dom'
import ProfilePicture from './components/ProfilePicture'
import SearchBar from './components/SearchBar'
import useMedia from '../hooks/useMedia'
import burger from '../resources/burger.png'
import { useState } from 'react'
import SideMenu from './components/SideMenu'

const Header = () => {

    const burgerMenuChange = useMedia('(min-width: 1200px)');
    const textSizesChange = useMedia('(min-width: 1470px)');
    const [isMenuToggled, setMenuToggled] = useState(false)

    return (
        <nav>
            <div className='navbar'>
                <div className="navbar-logo">
                    <Link to='/'>
                        <Logo
                            logoSize={textSizesChange
                            ? 'main'
                            : 'small'}
                            logoInvert={true}/>
                    </Link>
                </div>
                {burgerMenuChange ? ( 
                    <> <div className="navbar-links">
                        <Link to='/explore'>
                            <Texts
                                textContent={'Explore'}
                                textSize={textSizesChange
                                ? 'large'
                                : 'medium'}
                                textColor='invert'/>
                        </Link>
                        <Link to='/library'>
                            <Texts
                                textContent={'Your Library'}
                                textSize={textSizesChange
                                ? 'large'
                                : 'medium'}
                                textColor='invert'/>
                        </Link>
                        <Link to='/friends'>
                            <Texts
                                textContent={'Friends'}
                                textSize={textSizesChange
                                ? 'large'
                                : 'medium'}
                                textColor='invert'/>
                        </Link>
                        <Link to='/bookmap'>
                            <Texts
                                textContent={'Book Map'}
                                textSize={textSizesChange
                                ? 'large'
                                : 'medium'}
                                textColor='invert'/>
                        </Link>
                    </div> 
                        <div className={`navbar-interaction ${textSizesChange ? '' : 'mobile'}`} > 
                        <SearchBar textChange={textSizesChange}/> 
                        <Link to = '/user' > 
                            <ProfilePicture imgSize={'small'}/> 
                        </Link>
                    </div > 
                    </>
                    )
                    : 
                    <div className='burgerMenu' onClick={()=>setMenuToggled(true)}>
                        <div className='burgerMenu-img small'>
                            <img alt='burgermenu' src={burger} />
                        </div>
                    </div>
                    }
            </div>
            {/* Toggle Side Menu */}
            {(!burgerMenuChange && isMenuToggled) ? <SideMenu setMenuToggled={setMenuToggled} /> : null}
        </nav>
    )
}

// Header.propTypes = {}

export default Header