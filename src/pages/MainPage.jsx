import React from 'react'
import Containers from '../shared-elements/Containers'
import UserActivity from '../mainpage-module/UserActivity'

// import { useQuery } from 'react-query'

const MainPage = () => {

    // const { isLoading, error, data } = useQuery('cosmetics', () =>
    //     fetch('http://makeup-api.herokuapp.com/api/v1/products').then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading) console.log('Loading')
    // if (error) console.log(error.message)

    // console.log(data)

  return (
    <Containers containerRight_Content={null} 
    titleSectionRight={'Welcome back'} 
    titleSectionLeft={'Your books'} 
    // containerLeft_Content={<UserActivity />} 
    />
  )
}

export default MainPage