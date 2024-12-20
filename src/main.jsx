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
    path: '/:signin/:id',
    element: <h1>Welcome</h1>,
  },
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
