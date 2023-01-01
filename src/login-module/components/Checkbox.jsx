import React from 'react'
import Texts from '../../shared-elements/Texts'

const Checkbox = () => {
  return (
    <div className='login-checkbox'>
    <input type='checkbox' required />
    <Texts textContent={"I accept the Terms & Conditions"} />
    </div>
  )
}

export default Checkbox