import { UserSettingsContext } from '../../contexts/UserSettingsContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../shared-elements/Button'


const AboutYou = () => {

  const {setLogged} = useContext(UserSettingsContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    setLogged(false)
    navigate('/login')
  }

  return (
    <div> 
        <Button buttonColor={'text'} buttonText={'Log out'} handleClick={handleLogOut}/>
    </div>
  )
}

export default AboutYou