import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RecipeContext from './context/RecipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeContext>
)

/*
To provide routing wrap all the components within <BrowserRouter > tag 
To use react-toastify use <ToastContainer /> besides the <App/>
*/