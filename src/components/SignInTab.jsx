import { useState } from 'react'
import LogInOption from './LogInOption'
import Logo from '../assets/logo-pack/logo-small.svg'
import codeAnt from '../assets/logo-pack/CodeAntAI.svg'
import Button from './Button'

const SignInTab = () => {

  const [dirChange, setdirChange] = useState(false)

  return (
    <div className="md:w-[50%] w-full flex-center flex-col relative mx-auto bg-slate-50">
      <div className="max-w-xl rounded-xl bg-white w-full min-h-[550px] shadow-sm shadow-slate-500 mx-auto px-6 py-9 flex items-center flex-col">
        <div className='flex-center w-full gap-2'>
          <img src={Logo} alt="logo" />
          <img className='h-8 w-36' src={codeAnt} alt="CodeAnt AI" />
        </div>
        <h1 className='text-3xl font-semibold mt-9'>Welcome to CodeAnt AI</h1>
        <div
          onClick={() => setdirChange(!dirChange)}
          className={`w-full min-h-14 mt-5 flex relative bg-slate-200 rounded-xl ${(!dirChange ? 'active-left' : 'active-right')}`}>
          <Button
            key={1}
            text={'SAAS'}
            styling={`w-[50%] text-xl font-semibold rounded-xl ${(!dirChange ? 'text-white' : 'text-black')}`} />
          <Button
            key={2}
            text={'Self Hosted'}
            styling={`w-[50%] text-xl font-semibold rouded-xl ${(!dirChange ? 'text-black' : 'text-white')}`} />
        </div>
        <hr/>
        <div className='flex flex-col mt-5 items-center w-full gap-4'>
            <LogInOption tabChange={dirChange}/>
        </div>
      </div>
      <h2 className='mt-4 text-sm'>By signing up you agree to the <b>Privacy Policy</b>.</h2>
    </div>
  )
}

export default SignInTab