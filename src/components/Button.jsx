import React from 'react'

const Button = ({text , styling}) => {
  return (
    <button className={`flex-center z-10 relative ${styling}`} >
        {text}
    </button>
  )
}

export default Button