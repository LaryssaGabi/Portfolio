import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import GlobalStyle from '../src/styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>,
)
