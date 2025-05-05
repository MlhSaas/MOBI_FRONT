import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
>>>>>>> 82966b0 (Add Elu Welcome Page)
