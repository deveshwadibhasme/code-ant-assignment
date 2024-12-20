import React from 'react'
import { useLocation } from 'react-router-dom'

const MainScreen = () => {
    const { state } = useLocation()
    localStorage.setItem('id',state)

    const UniqueId = localStorage.getItem('id')

    if(UniqueId === state) {
        console.log('Authanticated')
        return (
            <div>MainScreen</div>
        )
    }else{
        alert('Not Authenticate')
        return (
            <div>Not Authicated</div>
        )
    }
}

export default MainScreen