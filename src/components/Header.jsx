import React from 'react'
import AddRepo from './AddRepo'
import SearchRepo from './SearchRepo'

const Header = () => {
    
    return (
        <div className='w-full flex flex-col gap-4 justify-center min-h-36 px-5 py-6'>
            <AddRepo />
            <SearchRepo />
            <hr/>
        </div>
    )
}

export default Header