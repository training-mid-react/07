import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './app/core/state/AppContext';
import HomeContainer from './app/container/HomeContainer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
      <HomeContainer />
    </AppProvider>
  </StrictMode>,
)
