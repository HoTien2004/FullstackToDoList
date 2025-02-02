import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/index.jsx'
import { Container } from '@mui/material'
import './firebase/config.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router} />
    </Container>
  </StrictMode>,
)
