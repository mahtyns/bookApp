import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { UserLoginContext } from './contexts/LoginContext'

function App() {

  const [isLogged, setLogged] = useState(false)
 

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <UserLoginContext.Provider value={{isLogged, setLogged}} >
            <MainRoutes />
          </UserLoginContext.Provider>  
        </div>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen='false' />
    
    </>
  );
}

export default App;
