import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import MainRoutes from './MainRoutes';
import { BrowserRouter } from 'react-router-dom'

const appQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={appQueryClient}>
      <BrowserRouter>
        <div className="App">
            <MainRoutes />
        </div>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen='false' />
    </QueryClientProvider>  
  );
}

export default App;
