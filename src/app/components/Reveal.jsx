import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const transitions = {
    hidden: {
        y: 75,
        opacity: 0,
        
    },
    visible:{
        y: 0,
        opacity: 1,
    },
    
}


const Reveal = () => {
    const scrollRef  = useRef(null);
    const isInView = useInView(scrollRef, {once:true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

  return (
    <div ref={scrollRef} style={{position:"relative"}}>
        <motion.div 
            variants={transitions} 
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.25, ease:"easeIn"}}
        >
            {/* {Children} */}
        </motion.div>    
    </div>
  )
}

export default Reveal