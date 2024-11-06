import React from 'react'
import { Link } from 'react-router-dom'


const ContentLogin = ({firstName}) => {
  return (
    <div className='login-content'>
       <div>
       <p>Hola! </p>
       <span>{firstName}</span>
       </div>
        <Link to={'/mycount'}>Mas información</Link>
    </div>
  )
}

export default ContentLogin