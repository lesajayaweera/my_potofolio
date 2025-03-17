import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Resume from './pages/Resume/Resume.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement : <NotFound></NotFound>
  },
  {
    path:'/about',
    element: <About></About>
  },
  {
    path:"/projects",
    element:<Projects></Projects>

  },{
    path:"/resume",
    element:<Resume/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
