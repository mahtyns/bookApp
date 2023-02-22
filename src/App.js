import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
            <MainRoutes />
        </div>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen='false' />
    
    </>
  );
}

export default App;
