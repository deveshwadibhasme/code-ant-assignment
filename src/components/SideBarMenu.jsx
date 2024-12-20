import { Link , useParams  } from 'react-router-dom'

const SideBarMenu = () => {

  const parm = useParams();
  console.log(parm)


  const Menu = [
    {
      id: 1,
      title: 'Repository',
      icon: '',
      link: '/repository'
    },
  ]

  return (
    <div className='max-w-60 w-full flex flex-col justify-between'>
      <Link to={`/${parm.signin}/${parm.id}/repository`} state={parm.id}>SideBar</Link>
    </div>
  )
}

export default SideBarMenu