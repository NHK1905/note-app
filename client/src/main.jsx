import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './index.css'
import router from './router/index.jsx'
import { Container } from '@mui/material'
import './firebase/config.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>,
)
