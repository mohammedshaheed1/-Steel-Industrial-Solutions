import React from 'react'
import {Routes, Route } from 'react-router-dom'
import App from './App'
import Estimation from './components/Estimation'
import Interior from './components/Interior'
import Steel from './components/Steel'

const RoutesR = () => {
  return (
    <div>
       <Routes>
          <Route path='/-Steel-Industrial-Solutions' element={<App/>}/>
          <Route path='/estimation' element={<Estimation/>}/>
          <Route path='/interior' element={<Interior/>}/>
          <Route path='/Steel' element={<Steel/>}/>
       </Routes>

    </div>
  )
}

export default RoutesR