import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {motion,AnimatePresence} from "motion/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [menu, setMenu] = useState(false)
 const handleClick=()=>{
      if(!menu){
         setMenu(true)
      }
      else{
        setMenu(false)
      }
      
        
      
 }
  return (
    <motion.div>
        {/* <div className=' sm:hidden absolute flex justify-between px-5 pl-15  top-5 w-full z-100 text-white'>
            <h1 className='text-4xl ' >Dipu</h1>
            
        </div> */}
        <div className='  p-3 text-2xl bg-[#121e28] absolute w-full z-100 text-white flex  md:justify-center'>
        <div>
        <NavLink to='/' className='absolute left-20 text-4xl'>Portfolio</NavLink>
        </div>
        <div className='hidden md:flex gap-10'>
        <NavLink to="/home" className={({isActive})=>`${isActive ?"text-red-300":""}`}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>`${isActive ?"text-red-300":""}`}>About</NavLink>
        <NavLink to="/skill" className={({isActive})=>`${isActive ?"text-red-300":""}`}>Skill</NavLink>
        {/* <NavLink to="/contact" className={({isActive})=>`${isActive ?"text-red-300":""}`}>Contact</NavLink> */}
        </div>
        <div className='md:hidden'>
          <button onClick={handleClick} className='p-1 px-3 text-2xl  absolute right-10 '><GiHamburgerMenu /></button>
        </div>
        </div>
        <AnimatePresence>
        {menu  && (<motion.div 
        animate={{
          y:[-210,0],
        }}
        transition={{
          duration:0.5
        }}
          exit={{ y: -210 }} 

        className='  bg-gray-500 w-full flex flex-col items-center text-3xl gap-5 absolute z-100'>
          <button onClick={handleClick} className='p-1 px-3 text-2xl  absolute top-3 text-white right-10 '><ImCross /></button>
          <NavLink
           to="/home"
           onClick={()=>{
            setMenu(false)
           }}
           className={({isActive})=>`${isActive ?"text-red-300":""} hover:bg-gray-600 hover:text-white w-full flex justify-center`}>Home</NavLink>
          <NavLink to="/about"
          onClick={()=>{
            setMenu(false)
           }}
          className={({isActive})=>`${isActive ?"text-red-300":""}  hover:bg-gray-600 hover:text-white w-full flex justify-center`}>About</NavLink>
          <NavLink to="/skill"
          onClick={()=>{
            setMenu(false)
           }}
          className={({isActive})=>`${isActive ?"text-red-300":""}  hover:bg-gray-600 hover:text-white w-full flex justify-center`}>Skill</NavLink>
          <NavLink to="/contact"
          onClick={()=>{
            setMenu(false)
           }}
          className={({isActive})=>`${isActive ?"text-red-300":""}  hover:bg-gray-600 hover:text-white w-full flex justify-center`}>Contact</NavLink>
        </motion.div>)}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar