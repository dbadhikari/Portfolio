import React from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Skill from './pages/Skill'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import MainLayout from './components/MainLayout'
import ContactForm from './pages/ContactForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/' element={<MainLayout/>}>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skill' element={<Skill/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path="/contact" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App