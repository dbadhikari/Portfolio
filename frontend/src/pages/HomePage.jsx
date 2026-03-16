import Snow from "../components/Snow"
import profileImage from "../assets/IMG-png.png"
import {motion} from "motion/react"

const HomePage = () => {
  const cardVariants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 0,
    rotate: -10,
    transition:1
  }
}
    
  return (
    <div className="relative ">
      <Snow/>
       <section id="section1" className='min-h-screen w-full bg-[#121e28]  grid grid-cols-1 md:grid-cols-2 lg:px-20 md:px-12 px-6 text-white '>
        <motion.div
         animate={{
            x:[-50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3
          }}
        className=" h-full lg:text-2xl md:text-xl text-sm order-2 md:order-1 flex flex-col items-center justify-center md:px-20 "> 
          <motion.h1
          className="md:text-6xl text-3xl font-extrabold mt-10">Hello, I'm</motion.h1>
          <h1 className="md:text-6xl text-3xl  font-extrabold">Dipu Adhikari</h1>
          <h1 className="md:text-3xl text-xl font-extrabold md:mt-15 mb-5">MERN Stack Developer</h1>
          <p className="md:text-xl text-xl font-extralight mb-10 text-center">I build modern and responsive web applications
           using React, Node.js, Express and MongoDB.</p>
           <div className="flex w-full flex-col sm:flex-row gap-5 justify-center">
          <motion.button
           animate={{
            y:[50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3,
            delay:2
          }}
          className="bg-red-200 py-3 px-6 hover:scale-105 active:scale-95 rounded-xl text-xl text-black ">View Projects</motion.button>
           <motion.button
            animate={{
            y:[50,0],
            opacity:[0,1],
            
          }}
          transition={{
            duration:3,
            delay:2.3
          }}
          
           className="bg-red-200 py-3 px-6 hover:scale-105 active:scale-95 rounded-xl text-xl  text-black">Download CV</motion.button>
           </div>
           
        </motion.div>
        <div className=" mt-20 flex justify-center items-end relative order-1 md:order-2 "> 
          <motion.div
          animate={{
            opacity:[0,1]
          }}
          transition={{
            duration:5,
            delay:2
          }}
          className="h-65 w-55 md:h-150 md:w-120  absolute rounded-full border-15 md:border-25 shadow-[0_0_40px_red] border-red-400 "></motion.div>
          <motion.img
           animate={{
            scale:[0,1],
            opacity:[0,1],
            
          }}
          transition={{
            duration:2
          }}
          className=" h-70 md:h-auto  object-cover  drop-shadow-[0_0_60px_rgba(99,102,241,0.8)]  " src={profileImage} alt="Photo" />
        </div>
       
       </section>
       

 


    </div>
  )
}

export default HomePage


