import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvaider } from './context.jsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <AppProvaider>
    <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </AppProvaider>
)
