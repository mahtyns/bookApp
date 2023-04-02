import React, {useState} from 'react'
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
import { BookContext } from './contexts/BookContext'




const MainRoutes = props => {

  // const [isLogged, setIsLogged] = useState(false)
  const isLogged = true;

  const [userLibrary, setUserLibrary] = useState([]);

  const addBookToLibrary = (bookAdded) => {
      setUserLibrary([...userLibrary, bookAdded])
  }


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
     <BookContext.Provider value={null} >
            <Header /> 
              <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/user' element={<UserProfilePage />} />
                  <Route path='/library' element={<BookLibraryPage userLibrary={userLibrary} />} />
                  <Route path='/bookmap' element={<BookMapPage />} />
                  <Route path='/friends' element={<FriendsPage />} />
                  <Route path='/explore' element={<ExplorePage addBookToLibrary={addBookToLibrary}/>} />
              </Routes>      
            <Footer />
      </BookContext.Provider>
    </>
  )
}

export default MainRoutes