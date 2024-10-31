import React from 'react'
import NavBar from './components/NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar>

    </NavBar>
    {children}
    </>
  )
}

export default Layout