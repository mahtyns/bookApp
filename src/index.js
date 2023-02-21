import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/MainStyles.css';
import AppContext from './contexts/BookContext'
import { QueryClient, QueryClientProvider} from 'react-query'

const appQueryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={appQueryClient} contextSharing={true}>
        <AppContext.Provider>
          <App />
        </AppContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

