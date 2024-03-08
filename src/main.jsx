import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ContextApiProvider } from './context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApiProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ContextApiProvider>
  
  
  
  
  
 
)
