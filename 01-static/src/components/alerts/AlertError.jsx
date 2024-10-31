import React from 'react'

const AlertError = ({message}) => {
  return (
    <div className='content-error animate__animated animate__flash'>
        <h1>{message}</h1>
    </div>
  )
}

export default AlertError