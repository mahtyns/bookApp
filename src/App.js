import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { BrowserRouter } from 'react-router-dom'
import BOOKS_API from './API'


function App() {

  const book_data = BOOKS_API();

  return (
    <>
      <BrowserRouter>
        <div className="App">
            <MainRoutes bookData={book_data} />
        </div>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen='false' />
    </>
  );
}

export default App;
