import Logo from '../assets/logo-pack/logo-small.svg'

const SignInDash = () => {
    return (
        <div className='max-w-[52%] w-full hidden sm:flex justify-center items-center'>
            <div className='max-w-[475px] w-full min-h-80 relative'>
                <div className='max-w-[447px] w-full min-h-44 px-7 py-5 h-full rounded-3xl shadow-[0px_0px_30px] shadow-[rgb(8,23,53,0.16)] grid grid-cols-1 grid-rows-2'>
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default SignInDash