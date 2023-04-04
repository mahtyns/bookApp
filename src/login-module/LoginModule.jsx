import Logo from '../shared-elements/components/Logo'
import Copytext from './components/Copytext'
import { LoginText } from '../resources/textContents'
import LoginInput from '../login-module/components/LoginInput'
import Button from '../shared-elements/Button'
import Texts from '../shared-elements/Texts'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserSettingsContext } from '../contexts/UserSettingsContext'
import { useNavigate } from 'react-router-dom'

const LoginModule = props => {

  const {setLogged} = useContext(UserSettingsContext)
  const navigate = useNavigate();

  const handleLogIn = () => {
    setLogged(true)
    navigate('/home')
  }
 
  return (
    <>
    <div className='login-logo'>
      <Logo logoSize='main'/>
      <Copytext textContent={LoginText}/>
    </div>
    <div className="login-form">
      <form>
        <LoginInput labelTag='Email' required/>
        <LoginInput labelTag='Password' required />
        <Button buttonText='Enter' buttonSize='fullWidth' buttonColor='confirm' handleClick={()=>handleLogIn()} />
      </form>  
    </div>
    <div className='login-switch'>
      <Texts textContent={"I don't have an account -"} textSize="medium" textColor="main" />
      <Link to='/register'>
      <Texts textContent={"Register here"} textSize="medium" textColor="success"  />
      </Link>
    </div>
    </>
  )
}

// LoginModule.propTypes = {}

export default LoginModule