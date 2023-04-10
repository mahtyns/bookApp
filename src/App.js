import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { UserSettingsContext } from './contexts/UserSettingsContext';

function App() {

  const [isLogged, setLogged] = useState(true)
 

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <UserSettingsContext.Provider value={{isLogged, setLogged}} >
            <MainRoutes />
          </UserSettingsContext.Provider>  
        </div>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen='false' />
    
    </>
  );
}

export default App;
