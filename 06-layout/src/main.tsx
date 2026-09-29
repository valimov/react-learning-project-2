import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.tsx'
import Layout from './components/layout/layout/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
    <App />
  </StrictMode>,
)
