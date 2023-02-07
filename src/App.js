// import { useQuery} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { BrowserRouter } from 'react-router-dom'
import BOOKS_API from './API'


function App() {

  console.log(BOOKS_API())

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
