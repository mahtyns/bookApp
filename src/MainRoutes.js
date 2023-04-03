import React, {useContext, useState} from 'react'
import Footer from './shared-elements/Footer'
import Header from './shared-elements/Header'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import UserProfilePage from './pages/UserProfilePage'
import LoginPage from './pages/LoginPage'
import LoginModule from './login-module/LoginModule'
import RegisterModule from './login-module/RegisterModule'
import BookLibraryPage from './pages/BookLibraryPage'
import FriendsPage from './pages/FriendsPage'
import BookMapPage from './pages/BookMapPage'
import ExplorePage from './pages/ExplorePage'
import { UserLibContext } from './contexts/BookContext'
import { UserLoginContext } from './contexts/LoginContext'

const MainRoutes = props => {

  const {isLogged} = useContext(UserLoginContext);

  const [userLibrary, setUserLibrary] = useState([]);



  if (!isLogged)
    { 
      return (
          <Routes>
            <Route path='/' element={<LoginPage moduleContent={<LoginModule />}/>} />
            <Route path='/login' element={<LoginPage moduleContent={<LoginModule />}/>} />
            <Route path='/register' element={<LoginPage moduleContent={<RegisterModule />}/>} />
          </Routes>)
    }
  if (isLogged)
  return  (
     <>
     <UserLibContext.Provider value={{userLibrary, setUserLibrary}} >
            <Header /> 
              <Routes>
                  <Route path='/home' element={<MainPage />} />
                  <Route path='/user' element={<UserProfilePage />} />
                  <Route path='/library' element={<BookLibraryPage userLibrary={userLibrary} />} />
                  <Route path='/bookmap' element={<BookMapPage />} />
                  <Route path='/friends' element={<FriendsPage />} />
                  <Route path='/explore' element={<ExplorePage />} />
              </Routes>      
            <Footer />
      </UserLibContext.Provider>
    </>
  )
}

export default MainRoutes