import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AttachBands from '../pages/AttachBands'
import DetectBands from '../pages/DetectBands'


function RouterNav(props) {
  return (
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/detect-bands' element={<DetectBands></DetectBands>}></Route>
     <Route path='/attach-bands' element={<AttachBands></AttachBands>}></Route>
    </Routes>
  )
}

RouterNav.propTypes = {}

export default RouterNav

