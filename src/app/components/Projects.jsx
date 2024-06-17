"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import ProjectTemplate from './ProjectTemplate';

function Projects() {
    const projectList = [
        {
         description: "My portfolio website where i share my passion, skills, experiences, and projects.",
         pics: "/images/myportfolio.png",
         title: "My Portfolio",
         skills: ["React", "Next.js", "Tailwind"]
        }, 
        {
         description: "A web platform for real estate agents, sellers, and buyers, designed to manage and sell property listings. The website offers a wide range of features to streamline property management tasks. By incorporating the B-C-E (Boundary, Controller, Entity) framework, it ensures an optimized architecture, providing an efficient usage for all users.",   
         pics: "/images/micasa.png",
         title: "Property Listing",
         skills: ["React", "Tailwind", "Flask", "SQLAlchemy"]
        },
        {
         description: <>[ HACKATHON ] <br/> A web platform that converts sketch into 3D model, specially designed to assist designers in visualizing custom clothes for their customers. We utilized &apos;outline&apos; model to transform outlines into lifelike images and &apos;wonder3d&apos; model to transform these images to 3D models.</>,   
         pics: "/images/sketch.png",
         title: "SKECH",
         skills: ["Streamlit", "Replicate", "Omnitool"]
        },
        {
         description: "A Python-based blockchain system integrated with PubNub to facilitated proof of work mechanism between two parties, establishing a secure network for transparent transactions.",
         pics: "/images/blockchain.png",
         title: "Blockchain System",
         skills: ["Python", "PubNub"]
        },
        {
         description: <>[ HACKATHON ] <br/>An e-commerce selling women&apos;s sportswear.</>,
         pics: "/images/ecommerce.png",
         title: "Women's Sportswear E-Commerce",
         skills: ["JavaScript", "HTML", "CSS"]
        },
        {
         description: "A web application tailored for UOW students and staff, designed to streamline room booking management. Students can easily book available rooms and staff can efficiently manage the room availability and schedules.",
         pics: "/images/bookingroom.png",
         title: "UOW Room Booking System",
         skills: ["JavaScript", "HTML", "CSS"]
        },
        {
            description: <>[ HACKATHON ] <br/> A web application to verify and review the authenticity and legality of your documents, which aims to prevent signature forgery on contracts using Langcode and USIGN APIs, utilizing NodeJS for backend and ReactJS for interface.</>,
            pics: "/images/enotary.png",
            title: "E-Notary",
            skills: ["React", "Node.js"]
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