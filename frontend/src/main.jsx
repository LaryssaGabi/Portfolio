import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../src/containers/Home'
import GlobalStyle from '../src/styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyle />
  </StrictMode>,
)
