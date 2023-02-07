import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/MainStyles.css';
import { QueryClient, QueryClientProvider} from 'react-query'

  const appQueryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={appQueryClient} contextSharing={true}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);

