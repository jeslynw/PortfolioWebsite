"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Reveal from './Reveal';
import ProjectTemplate from './ProjectTemplate';

function Projects() {
    const projectList = [
        {
         description: "My portfolio website where i share my passion, skills, experiences, and achievements.",
         pics: "/images/myportfolio.png",
         title: "My Portfolio",
         skills: ["React", "Next.js", "Tailwind"]
        }, 
        {
         description: "A web application that manages and sells property listing, leveraging B-C-E framework for an efficient architecture design. The website offers features tailored for system administrators, seller, buyer and real estate agents",   
         pics: "/images/micasa.png",
         title: "MICASA",
         skills: ["React", "Tailwind", "Flask", "SQLAlchemy"]
        },
        {
         description: "A web application that converts sketch into 3D model, specially designed to assist designers in visualizing custom clothes for their customers. We utilized 'outline' model to transform outlines into lifelike images and 'wonder3d' model to transform these images to 3D models.",   
         pics: "/images/sketch.png",
         title: "SKECH",
         skills: ["Streamlit", "Replicate", "Omnitool"]
        },
        {
         description: "An app to verify and review the authenticity and legality of your documents, which aims to prevent signature forgery on contracts using Langcode and USIGN APIs, utilizing NodeJS for backend and ReactJS for interface",
         pics: "/images/enotary.png",
         title: "E-Notary",
         skills: ["React", "Node.js"]
        },
        {
         description: "Constructed a Python-based blockchain system integrated with PubNub to facilitated proof of work mechanism between two parties, establishing a secure network for transparent transactions.",
         pics: "/images/blockchain.png",
         title: "Blockchain System",
         skills: ["Python", "PubNub"]
        },
        {
         description: "An e-commerce selling women's sportswear.",
         pics: "/images/ecommerce.png",
         title: "Women's Sportswear E-Commerce",
         skills: ["JavaScript", "HTML", "CSS"]
        },
        {
         description: "Built and managed the production of UOW room booking system for staffs and students.",
         pics: "/images/bookingroom.png",
         title: "UOW Room Booking System",
         skills: ["JavaScript", "HTML", "CSS"]
        },
        // {
        //  description: "Designed a cost effective network infrastructure for 2 schools, consider using reliable yet budget-friendly devices like managed switches for efficient VLAN implementation, implementing IP subnetting and packet analysis through Wireshark for enhanced security and optimal performance.",
        //  pics: "",
        //  title: "School's Network Infrastructure",
        //  skills: ["Wireshark"]
        // },
        // {
        //  description: "Developed a mini game about choosing the number according to the target number.",
        //  pics: "",
        //  title: "Choose The Correct Number Game",
        //  skills: ["Javascript", "HTML", "CSS"]
        // }
    ]



  return (
    <section id='projects'>
        <div>
            <h1 className="text-white text-5xl sm:text-5xl 2xl:text-6xl font-alegreya pt-24 md:pt-28 pb-14">Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 justify-center place-content-center lg:justify-between items-center place-items-center '>
                {/* <Reveal> */}
                    {projectList.map((project, index) => (
                        <ProjectTemplate
                            key = {index}
                            description = {project.description}
                            pics = {project.pics}
                            title = {project.title}
                            skills = {project.skills}
                        />
                    ))}
                   
                {/* </Reveal> */}
            </div>
            <div className='mb-20'></div>
        </div>
    </section>
  )
}

export default Projects