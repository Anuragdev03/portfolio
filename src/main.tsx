import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (import.meta.env.MODE === 'production') {
  disableReactDevTools();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
