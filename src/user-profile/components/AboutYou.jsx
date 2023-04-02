import Texts from "../../shared-elements/Texts"
import { UserLoginContext } from '../../contexts/LoginContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const AboutYou = () => {

  const {setLogged} = useContext(UserLoginContext)
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