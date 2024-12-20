import Logo from '../assets/logo-pack/logo-small.svg'
import pieChart from '../assets/icon-pack/pie-bar.svg'
import upArrow from '../assets/icon-pack/small right 2.svg'
import SVG from '../assets/logo-pack/logo-large.svg'

const SignInDash = () => {
    return (
        <div className='w-[50%] hidden sm:flex flex-center relative mx-auto'>
            <div className='max-w-[475px] w-full min-h-80 relative'>
                <div className='max-w-[447px] w-full min-h-44 px-7 py-5 h-full rounded-3xl shadow-[0px_0px_30px] shadow-[rgb(8,23,53,0.16)] grid grid-cols-1'>
                    <div className='flex w-full gap-2 h-9'>
                        <img className='w-7 h-8' src={Logo} alt="logo" />
                        <h3 className='font-bold text-lg self-center'>AI to Detect & Autofix Bad Code</h3>
                    </div>
                    <hr className='h-1' />
                    <div className='grid grid-cols-3 gap-1'>
                        <span className='dashSpan'>
                            <span className='text-lg font-bold'>
                                30+
                            </span>
                            <p className="text-sm font-light">Language Support</p>
                        </span>
                        <span className='dashSpan'>
                            <span className='text-lg font-bold'>10K+</span>
                            <p className="text-sm font-light">Developer</p>
                        </span>
                        <span className='dashSpan'>
                            <span className='text-lg font-bold'>100K+</span>
                            <p className="text-sm font-light">Hours Saved</p>
                        </span>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0 bg-white max-w-[270px] w-full rounded-3xl min-h-40 px-8 py-4 shadow-[0px_0px_24px] shadow-[rgb(8,23,53,0.16)]'>
                    <div className='flex w-full justify-between items-center mb-4'>
                        <span className="w-14 h-14 bg-blue-100 rounded-full flex-center"><img src={pieChart} alt="" /></span>
                        <div className="text-left flex-center flex-col">
                            <span className="flex text-blue-800 font-semibold text-sm w-full items-start">
                                <img src={upArrow} alt="up-arrow" />
                                14%
                            </span>
                            <p className="text-xs self-end ml-auto ">This Week</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold">Issues Fixed</h4>
                        <h2 className="font-bold text-3xl">500K+</h2>
                    </div>
                </div>
            </div>
            <img className="absolute left-0 bottom-0 w-56" src={SVG} alt="logo" />
        </div>
    )
}

export default SignInDash