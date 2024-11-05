import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header /> 
    <StrictMode>
    <App />
  </StrictMode>
  <Footer />
  </BrowserRouter>,

)
