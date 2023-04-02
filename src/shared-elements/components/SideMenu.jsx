import close from '../../resources/close.png'
import ProfilePicture from './ProfilePicture'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import Texts from '../Texts'
import { UserLoginContext } from '../../contexts/LoginContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const SideMenu = (props) => {

    const {setLogged} = useContext(UserLoginContext)

    const navigate = useNavigate()

    const handleLogOut = () => {
        setLogged(false);
        navigate('/login')
    }

    return (
        <div className="side-menu">
            <div className="side-wrapper">
                <div className="close" onClick={() => props.setMenuToggled(false)}>
                    <img alt="close-btn" src={close}/>
                </div>
                <div className="side-links">
                    <Link to='/explore'
                        onClick={() => props.setMenuToggled(false)}>
                        <Texts
                            textContent={'Explore'}
                            textSize={'large'}
                            textColor='invert' />
                    </Link>
                    <Link to='/library' 
                        onClick={() => props.setMenuToggled(false)}>
                        <Texts
                            textContent={'Your Library'}
                            textSize={'large'}
                            textColor='invert' />
                    </Link>
                    <Link to='/friends'
                        onClick={() => props.setMenuToggled(false)}>
                        <Texts
                            textContent={'Friends'}
                            textSize={'large'}
                            textColor='invert' />
                    </Link>
                    <Link to='/bookmap'
                        onClick={() => props.setMenuToggled(false)}>
                        <Texts
                            textContent={'Book Map'}
                            textSize={'large'}
                            textColor='invert' />
                    </Link>
                    <Texts
                        textContent={'Log out'}
                        textSize={'large'}
                        textColor='invert' 
                        handleClick={()=> handleLogOut()}/>
                </div>
                <div className="side-interaction">
                    <SearchBar />
                    <ProfilePicture imgSize={'small'}/>
                </div> 
            </div>
        </div>
    )
}

export default SideMenu