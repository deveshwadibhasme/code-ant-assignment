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
    path: '/:signin/:id/',
    element: <App />,
    children:[
      {
        path:'/:signin/:id/',
        element:<MainScreen />
      },
      {
        path:'/:signin/:id/:repo',
        element:<MainScreen />
      },
      {
        path:'/:signin/:id/AICodeReviewer',
        element:<h1 className='text-center'>AI Code Reviewer</h1>,
      },
      {
        path:'/:signin/:id/CloudSecurity',
        element:<h1 className='text-center'>Cloud Security</h1>,
      },
      {
        path:'/:signin/:id/howtouse',
        element:<h1 className='text-center'>How to Use</h1>,
      },
      {
        path:'/:signin/:id/settings',
        element:<h1 className='text-center'>Settings</h1>,
      },
      {
        path:'/:signin/:id/support',
        element:<h1 className='text-center'>Support</h1>,
      },
    ]
  },
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
