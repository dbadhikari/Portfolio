import React from 'react'
import {motion} from "motion/react"
const Snow = () => {
    const snowfall=Array.from({length:60})
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        {snowfall.map((_,idx)=>{
            const size=Math.random()*8+4
            const left=Math.random()*100
            const duration=Math.random()*5+5
            const delay=Math.random()*5+3
        return(
            <motion.div key={idx} className='bg-white rounded-full absolute'
                style={{
                    height:size,
                    width:size, 
                    left:`${left}%`,
                    top:"-20px"
                }}
                animate={{
                    y:["0vh","110vh"],
                    x:[0,30,50,80,0],
                    opacity:[0,1,1,0.5]

                }}
                transition={{
                    duration,
                    delay,
                    repeat:Infinity,
                    ease:"linear"
                }}
                
                >
            </motion.div>
        )
        })}
    </div>
  )
}

export default Snow