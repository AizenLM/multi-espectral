import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterNav from './router/RouterNav'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

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