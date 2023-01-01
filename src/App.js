import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import LoginPage from './pages/LoginPage';

const appQueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={appQueryClient}>
      <div className="App">
        <LoginPage />
      </div>
      <ReactQueryDevtools initialIsOpen='false' />
    </QueryClientProvider>  
  );
}

export default App;
