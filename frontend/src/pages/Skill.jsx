import React from 'react'
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb";
import {motion} from "motion/react"
const Skill = () => {

  return (
    <div className='h-screen w-full p-20 text-white bg-[#121e28] '>

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
          duration:1,
          
        }}
        viewport={{ once: true,
          amount:0.5 }}
       className="text-4xl font-bold text-center my-8">
    Skills
  </motion.h1>

  <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">

    <motion.div
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
          delay:1.2
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <FaReact size={40} className="text-cyan-400"/>
      React
    </motion.div>

    <motion.div
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
          delay:1.4
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <SiJavascript size={40} className="text-yellow-400"/>
      JavaScript
    </motion.div>

    <motion.div 
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
          delay:1.6
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <FaNodeJs size={40} className="text-green-500"/>
      Node.js
    </motion.div>

    <motion.div
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
          delay:1.8
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <SiExpress size={40}/>
      Express
    </motion.div>

    <motion.div
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
          delay:2
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <SiMongodb size={40} className="text-green-600"/>
      MongoDB
    </motion.div>

    <motion.div
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
          delay:2.2
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <SiTailwindcss size={40} className="text-sky-400"/>
      Tailwind
    </motion.div>

    <motion.div
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
          delay:2.4
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <FaGitAlt size={40} className="text-orange-500"/>
      Git
    </motion.div>

    <motion.div
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
          delay:2.6
        }}
        viewport={{ once: true,
          amount:0.5 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <SiPostman size={40} className="text-orange-400"/>
      Postman
    </motion.div>
    <motion.div
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
          delay:2.8
        }}
        viewport={{ once: true,
          amount:0 }}
    className="bg-[#1c2b36] p-6 rounded-xl flex flex-col items-center gap-3">
      <TbBrandFramerMotion size={40} className="text-yellow-400"/>
      FramerMotion
    </motion.div>
    

  </div>

       
      
        
    </div>
  )
}

export default Skill