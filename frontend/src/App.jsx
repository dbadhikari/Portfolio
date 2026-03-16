import React from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Skill from './pages/Skill'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App