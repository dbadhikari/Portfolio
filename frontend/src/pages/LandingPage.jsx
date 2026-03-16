
import { useEffect} from 'react'
import {motion} from "motion/react"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const nav=useNavigate()
  useEffect(()=>{
       setTimeout(()=>{
        nav("/home")
    },3000)
  },[])
   
  return (
    <div>
     
             <motion.div 
        animate={{
            opacity:0
        }}
        transition={{duration:3,
            delay:2
        }}
        className='h-screen w-full bg-gray-500 flex flex-col justify-center items-center '>
          <motion.h1
          initial={{
           y:200,
           opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:1,
            delay:0.3
          }}
          className='text-4xl font-extrabold text-white'>
            Hi, I'm Dipu Adhikari 
          </motion.h1>
            <motion.h2
          initial={{
           y:200,
           opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:1,
            delay:0.8
          }}
          className='text-4xl font-extrabold text-white'>
            
            Aspiring MERN Stack Developer
          </motion.h2>
       </motion.div>
      

   
        
    
        
        
    </div>
  )
}

export default LandingPage