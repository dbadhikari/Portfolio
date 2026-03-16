import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from "motion/react"
const Navbar = () => {
  return (
    <motion.div
   
    >
        <div className=' sm:hidden absolute flex justify-between px-5 pl-15  top-5 w-full z-100 text-white'>
            <h1 className='text-4xl ' >Dipu</h1>
            <button className='p-1 px-3 text-2xl bg-gray-400 '>X</button>
        </div>
        <div className='hidden sm:flex p-3 text-2xl bg-[#121e28] absolute w-full z-100 text-white  justify-center gap-10'>

        <NavLink to='/' className='absolute left-20 text-4xl'>Dipu</NavLink>
        <NavLink to="/home" className={({isActive})=>`${isActive ?"text-red-300":""}`}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=>`${isActive ?"text-red-300":""}`}>About</NavLink>
        <NavLink to="/skill" className={({isActive})=>`${isActive ?"text-red-300":""}`}>Skill</NavLink>
         </div>
    </motion.div>
  )
}

export default Navbar