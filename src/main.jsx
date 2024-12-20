import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainScreen from './pages/MainScreen.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:signin/:id',
    element: <MainScreen/>,
  },
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
