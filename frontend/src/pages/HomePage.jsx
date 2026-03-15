import Snow from "../components/Snow"
import profileImage from "../assets/IMG-png.png"
import {motion} from "motion/react"
const HomePage = () => {
    
  return (
    <div className="relative">
      <Snow/>
       <section className='min-h-screen w-full bg-[#121e28] lg:p-20 grid grid-cols-1 md:grid-cols-2 md:p-12 p-6 text-white '>
        <motion.div
         animate={{
            x:[-50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3
          }}
        className="h-full lg:text-2xl md:text-xl text-sm order-2 md:order-1 text-center "> 
          <motion.h1
          className="md:text-6xl text-3xl font-extrabold mt-10">Hello, I'm</motion.h1>
          <h1 className="md:text-6xl text-3xl  font-extrabold">Dipu Adhikari</h1>
          <h1 className="md:text-3xl text-xl font-extrabold md:mt-15 mb-5">MERN Stack Developer</h1>
          <p className="md:text-3xl text-xl font-light mb-10">I build modern and responsive web applications
           using React, Node.js, Express and MongoDB.</p>
           <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <motion.button
           animate={{
            y:[50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3,
            delay:2
          }}
          className="bg-red-200 py-3 px-6 rounded-xl text-black ">View Projects</motion.button>
           <motion.button
            animate={{
            y:[50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3,
            delay:2.3
          }}
           className="bg-red-200 py-3 px-6 rounded-xl text-black">Download CV</motion.button>
           </div>
           
        </motion.div>
        <div className="  flex  justify-center items-center relative order-1 md:order-2 "> 
          <div className="h-70 w-70 md:h-120 md:w-120  absolute rounded-full border-25 shadow-[0_0_40px_red] border-red-400 "></div>
          <motion.img
           animate={{
            scale:[0,1],
            opacity:[0,1],
            
          }}
          transition={{
            duration:2
          }}
          className="h-80 md:h-[80%]  drop-shadow-[0_0_60px_rgba(99,102,241,0.8)]  " src={profileImage} alt="Photo" />
        </div>
        
    
       </section>
       
    </div>
  )
}

export default HomePage


