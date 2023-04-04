import Texts from "../../shared-elements/Texts"
import { UserSettingsContext } from '../../contexts/UserSettingsContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const AboutYou = () => {

  const {setLogged} = useContext(UserSettingsContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    setLogged(false)
    navigate('/login')
  }

  return (
    <div> 
        <Texts textContent={'Log Out'} textSize={'medium'} textColor={'inactive'} handleClick={()=>handleLogOut()}/>
    </div>
  )
}

export default AboutYou