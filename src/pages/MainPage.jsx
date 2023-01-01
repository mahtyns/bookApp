import React from 'react'
// import { useQuery } from 'react-query'
import Header from '../shared-elements/Header'

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
    <div>
      <Header />      

    </div>
  )
}

export default MainPage