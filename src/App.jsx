import SideBarMenu from './components/SideBarMenu.jsx'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router'

function App() {
  const { state } = useLocation()
  localStorage.setItem('id', state)
  const UniqueId = localStorage.getItem('id')


  return (
    (UniqueId === state) ?
      <div className='flex flex-col md:flex-row w-screen min-h-screen mx-auto bg-slate-50'>
        <SideBarMenu />
        <Outlet />
      </div> : <> {alert('Not Authenticate')} <div>Not Authenticate</div></>
  )
}

export default App
