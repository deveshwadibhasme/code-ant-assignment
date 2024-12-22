
import SignInDash from '../components/SignInDash'
import SignInTab from '../components/SignInTab'


const SignInPage = () => { 
    localStorage.clear();

    return (
        <div className='flex w-screen gap-1 min-h-screen mx-auto'>
            <SignInDash />
            <SignInTab />
        </div>
    )
}

export default SignInPage
