import { NavLink, useParams } from 'react-router-dom'
import logo from '../assets/logo-pack/logo-small.svg'
import svg from '../assets/logo-pack/CodeAntAI.svg'

const SideBarMenu = () => {
  const parm = useParams();

  const Menu = [
    {
      id: 1,
      title: 'Repository',
      icon: '',
      link: `/${parm.signin}/${parm.id}/repository`
    },
    {
      id: 2,
      title: 'AI Code Review',
      icon: '',
      link: `/${parm.signin}/${parm.id}/AICodeReviewer`
    },
    {
      id: 3,
      title: 'Cloud Security',
      icon: '',
      link: `/${parm.signin}/${parm.id}/CloudSecurity`
    },
    {
      id: 4,
      title: 'How to Use',
      icon: '',
      link: `/${parm.signin}/${parm.id}/howtouse`
    },
    {
      id: 5,
      title: 'Settings',
      icon: '',
      link: `/${parm.signin}/${parm.id}/settings`
    },
  ]

  return (
    <div className='max-w-60 w-full flex flex-col justify-between py-6 px-4'>
      <div className='w-full min-h-56 flex flex-col'>
        <div className="w-full flex gap-2">
          <img src={logo} alt="logo" />
          <img src={svg} alt="" />
        </div>
        <select className="my-4 p-2 overflow-x-clip">
          <option className=''>{parm.id}</option>
        </select>
        {
          Menu.map((op) => (
            <NavLink to={op.link} state={parm.id}>  
              <div className="h-10 max-w-52 w-full px-1 flex-center">
                <img src={op.logo} alt="" />
                <p>{op.title}</p>
              </div>
            </NavLink>
          ))
        }
      </div>
      <div>
        Hello
      </div>
    </div>
  )
}

export default SideBarMenu