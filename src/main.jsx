import { createRoot } from 'react-dom/client'
import './output.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainScreen from './pages/MainScreen.jsx'
import SignInPage from './pages/SignInPage.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element:<SignInPage/>,
  },
  {
    path: '/:signin/:id',
    element: <App />,
    children:[
      {
        path:'/:signin/:id/',
        element:<MainScreen />
      },
      {
        path:'/:signin/:id/repository',
        element:<MainScreen />
      }
    ]
  },
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
