import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <h1>About</h1>,
  },
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
