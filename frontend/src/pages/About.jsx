import React from 'react'
import {motion} from "motion/react"
const About = () => {
  return (
    <div>
        <section id="section2" className='min-h-screen w-full bg-[#121e28]  flex flex-col items-center pt-20 lg:p-20 md:p-12 p-6 text-white '> 
        <motion.h1 
        initial={{
          y:200,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:1
        }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold  mb-6">About Me</motion.h1>
        <motion.p 
         initial={{
          y:200,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:1,
          delay:1
        }}
        viewport={{ once: true,
          amount:0.5
         }}
        className="text-center font-extralight">I'm Das Bahadur Adhikari, a BCA student at Tribhuvan University and a passionate MERN Stack Developer.
        I enjoy building modern, responsive, and user-friendly web applications using technologies like React, Node.js, Express, and MongoDB.
        I recently completed a MERN Stack Developer internship where I worked on full-stack projects and improved my practical development skills.
        I am always eager to learn new technologies and continuously improve my skills in web development.</motion.p>
</section>
    </div>
  )
}

export default About