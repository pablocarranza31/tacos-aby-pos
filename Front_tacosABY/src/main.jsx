import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Proveedor de enrutamiento basado en el historial del navegador
import { HashRouter } from 'react-router-dom' // Proveedor de enrutamiento basado en el hash de la URL
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>

      <App />
    </HashRouter>
  </StrictMode>,
)
