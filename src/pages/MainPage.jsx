import React from 'react'
import Containers from '../shared-elements/Containers'
import UserActivity from '../mainpage-module/UserActivity'

// import { useQuery } from 'react-query'

const MainPage = () => {

  return (
    <Containers containerRight_Content={null} 
    titleSectionRight={'Welcome back'} 
    titleSectionLeft={'Your books'} 
    containerLeft_Content={<UserActivity />} 
    />
  )
}

export default MainPage