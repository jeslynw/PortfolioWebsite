"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"

const transitions = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
    initialProfile: {
        x: 1000,
        opacity: 0,
    },
    animateProfile: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
            type:'spring',
        },
    },
};

const HeroSection = () => {
    return(
        <section className="home">  
            <div className="card xl:grid grid-cols-1 sm:grid-cols-12 shadow-lg mt-7">
                <motion.div variants={transitions} initial="initial" animate="animate" className="col-span-7 px-5 lg:text-left lg:mt-8">
                    <motion.div variants={transitions} className="h-60">
                        <motion.h1 variants={transitions} className="mb-4 text-4xl sm:text-5xl 2xl:text-6xl font-alegreya font-extrabold text-[#9dc5ee]">
                            <motion.span variants={transitions} className="text-white flex-auto leading-loose">Hello, I'm</motion.span>
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                    1500,
                                    // Same substring at the start will only be typed out once, initially
                                    "Jeslyn Wangsa",
                                    1000,
                                    "Majoring In Cybersecurity",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "UI/UX Designer",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={15}
                                // deletionSpeed={30}
                                repeat={Infinity}
                                cursor={true}
                                />
                        </motion.h1>
                    </motion.div>

                    <motion.p variants={transitions} className="text-black text-sm font-noto sm:text-base lg:text-lg mb-6 mt-15 sm:mt-5 pb-5 leading-relaxed text-justify">
                        I am immersed in the world of technology, honing my skills and knowledge as I pursue my bachelor's degree. I am passionately building a portfolio website to share my expertise and achievements. 
                        Step into my digital domain and explore the journey with me! 
                    </motion.p> 

                    {/* <motion.button variants={transitions} className="button px-6 py-3 mt-5 sm:w-fit font-noto rounded-full bg-white text-black">
                        About Me
                    </motion.button> */}
                </motion.div>

                <motion.div variants={transitions} initial="initialProfile" animate="animateProfile" className="flex col-span-5 px-5 items-center justify-center place-self-center pb-4 sm:pt-0 relative 2xl:left-20 ">
                    <img
                        className="max-w-xs sm:max-w-md"
                        src = "/images/bitmoji.png"
                        alt = "my picture"
                    />
                </motion.div>
            </div>
       </section>
    );
};

export default HeroSection;