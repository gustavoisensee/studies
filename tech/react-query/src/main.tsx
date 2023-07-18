import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
