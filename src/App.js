import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import RegisterModule from './login-module/RegisterModule';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const appQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={appQueryClient}>
        <div className="App">
            <MainPage />
        </div>
      <ReactQueryDevtools initialIsOpen='false' />
    </QueryClientProvider>  
  );
}

export default App;
