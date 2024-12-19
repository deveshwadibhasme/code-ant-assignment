import React from 'react'
import SignInDash from '../components/SignInDash'
import SignInTab from '../components/SigninTab'

const SignInPage = () => {
    return (
        <div className='flex max-w-6xl w-full gap-1 min-h-screen'>
            <SignInDash />
            <SignInTab/>
        </div>
    )
}

export default SignInPage