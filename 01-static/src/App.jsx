import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterNav from './router/RouterNav'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <RouterNav></RouterNav>
        {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App