"use client"
import { useRef, useState} from 'react';
import React from 'react'
import Link from "next/link";
import Navlink from './Navlink';
import MenuOverlay from './MenuOverlay';

const navlink = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const Navbar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const menuRef = useRef(null)

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#c8c4f4] bg-opacity-100'>
            <div className='flex flex-wrap sm:h-24 h-20 items-center outline outline-2 sm:outline-none outline-[#b9b4f3] justify-between px-10 sm:px-20 mx-auto'>
                <Link href="/" className="text-white font-noto sm:text-2xl text-xl">
                    <svg className='w-7 h-7 sm:w-8 sm:h-8 flex flex-col absolute' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    </svg>
                    <span className='m-12'>JW.</span>
                </Link>
                <div className='mobile-menu block  md:hidden lg:hidden'> 
                    {!hamburgerOpen ? (
                        <button onClick={() => setHamburgerOpen(true)} className='flex items-end text-white hover:text-slate-200'>
                            <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => setHamburgerOpen(false)} className='flex items-end text-white hover:text-slate-200'>
                            <svg className='w-8 h-8' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>  
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto id="navbar" font-noto text-white'>
                    <ul className='flex lg:p-4 md:p-0 md:flex-row space-x-12 text-lg'>
                        {
                            navlink.map((link, index) => (
                                <li key={index}>
                                    <Navlink href={link.path} title={link.title} scroll={false}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {hamburgerOpen ? <MenuOverlay links={navlink}/> : null} 
        </nav>
    )
}
export default Navbar;