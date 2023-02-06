import React from 'react'
import Footer from './shared-elements/Footer'
import Header from './shared-elements/Header'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import UserProfilePage from './pages/UserProfilePage'
// import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import LoginModule from './login-module/LoginModule'
import RegisterModule from './login-module/RegisterModule'
import BookLibraryPage from './pages/BookLibraryPage'
import FriendsPage from './pages/FriendsPage'
import BookMapPage from './pages/BookMapPage'
import ExplorePage from './pages/ExplorePage'

const MainRoutes = () => {

  // const [isLogged, setIsLogged] = useState(false)
  const isLogged = true;

  if (!isLogged)
  return (
      <Routes>
        <Route path='/' element={<LoginPage moduleContent={<LoginModule />}/>} />
        <Route path='/login' element={<LoginPage moduleContent={<LoginModule />}/>} />
        <Route path='/register' element={<LoginPage moduleContent={<RegisterModule />}/>} />
      </Routes>
  )

  else return (
     <>
            <Header /> 
              <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/user' element={<UserProfilePage />} />
                  <Route path='/library' element={<BookLibraryPage />} />
                  <Route path='/bookmap' element={<BookMapPage />} />
                  <Route path='/friends' element={<FriendsPage />} />
                  <Route path='/explore' element={<ExplorePage />} />
              </Routes>      
            <Footer />      
    </>
  )
}

export default MainRoutes