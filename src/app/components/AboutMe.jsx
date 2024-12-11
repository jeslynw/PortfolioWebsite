"use client"
import React from "@heroicons/react";
import Image from "next/image";
import Link from "next/link";

const CV_File = "/JeslynWangsa_resume.pdf";

const AboutMe = () => {
    const OpenPDFButton = () => {
          window.open(CV_File, '_blank');
    };
    
    return(
        <section id="about">
            <div className="pt-24 md:pt-28">
                <h1 className="text-white text-5xl sm:text-5xl 2xl:text-6xl font-alegreya pb-14">About Me</h1>
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="col-span-3 flex flex-col items-center relative mb-10">
                        <Image 
                            className="rounded-3xl shadow-lg sm:left-0"
                            src = "/images/b.jpg"
                            alt = "my picture"
                            width = {250}
                            height = {180}
                        />
                    </div>
                    <div className="col-span-9 text-black relative place-items-center sm:pl-10 2xl:pl-0 m-0">
                        <p className="font-noto text-sm sm:text-md lg:text-lg text-justify">
                            As a student at the University of Wollongong, majoring in Cybersecurity, my fascination with technology traces back to my childhood.
                            From a young age, I found myself drawn to the intricate workings of computers and gadgets, constantly seeking to unravel their mysteries. 
                            This curiosity sparked a passion for exploring the expansive world of technology, driving me to delve deeper into its complexities.
                            Throughout my academic journey, I have developed a keen interest in problem-solving, sofware development, hacking and Cybersecurity stuff.
                            In my free time, I participate in hackathons, capture-the-flag (CTF) and working on personal projects. 
                            These experiences have been valuable as I continue to pursue my interests and build my skills in these areas.                            
                        </p>
                        <div className="flex py-3 mt-5 justify-between sm:items-center">
                            <div className="flex mb-6 sm:mb-0 place-self-center">
                                <button className="CVButton sm:w-fit font-noto text-xs sm:text-md lg:text-base font-extrabold rounded-full bg-white  border-3 border-[#9dc5ee] text-#9dc5ee "
                                        onClick={() => {OpenPDFButton()}}>
                                    Open CV
                                </button>
                            </div>
                            <div className="flex">
                                <Link href='https://github.com/jeslynw' to="route" target="_blank">
                                    <button class="githubButton mr-4">
                                        <span class="githubBG"></span>
                                        <span class="githubContainer">
                                            <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                                                <path 
                                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                                </path>
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                                <Link href='https://www.linkedin.com/in/jeslynwangsa/' to="route" target="_blank">
                                    <button class="linkedInButton mr-4">
                                        <span class="linkedInBG"></span>
                                        <span class="linkedInContainer">
                                            <svg
                                                viewBox="0 0 448 512"
                                                height="1.2em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="svgIcon"
                                                fill="white"
                                            >
                                                <path
                                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                                {/* <Link href='https://www.instagram.com/jeslynw_?igsh=enZxaHIzdDc5aDlp' to="route" target="_blank">
                                    <button class="instagramButton">
                                        <span class="instagramBG"></span>
                                        <span class="instagramContainer">
                                            <svg fill="white" class="svgIcon" viewBox="0 0 448 512" height="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                        </span>
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-24 pl-4 md:pl-0 justify-center">
                    <ol className="relative md:w-[750px] border-s border-gray-400">     
                        {/* SIM UOW */}
                        <li className="mb-7 ms-6">    
                            {/*academic icon*/}
                            <span className="absolute flex items-center justify-center bg-[#ffffff] rounded-full -start-3 ring-4 ring-[#ffffff] mt-1">
                                <svg className="w-5 h-5 text-[#6cb6ff] size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                </svg>
                            </span>
                            {/* title */}
                            <h3 className="flex items-center mb-1 text-[13pt] md:text-[15pt] font-semibold text-gray-900">University of Wollongong
                                <span className="bg-[#6cb6ff9b] text-[#ffffff] text-base font-medium me-2 px-2.5 py-0.5 rounded ms-7">Latest</span>
                            </h3>
                            {/* time */}
                            <time className="block text-[9pt] md:text-base font-normal leading-none text-gray-500">Jan 2022 - Nov 2024</time>
                            <p className="block mb-2 text-[9pt] md:text-base font-normal leading-none text-gray-500">Bachelor of Computer Science (Cyber Security)</p>
                            {/* organization */}
                            <div className="text-gray-500 text-[9pt] md:text-base ">
                                <ul>
                                    <li className="font-semibold ">Activities:</li>
                                    <ul className="list-decimal pl-6">
                                        <li className="font-semibold underline"><a href="#projects">Worked on various projects</a></li>
                                        <li className="font-semibold underline">Participated in Hackathons</li>
                                        <li className="font-semibold ">Organisational Experience:</li>
                                        <ul className="list-decimal pl-6">
                                            <li className="font-semibold">Student Council</li>
                                                <ul className="list-disc pl-6">
                                                    <li>Spearheaded a team of 5 committee members in planning and developing creative concepts for big events such as Freshmen Orientation and Prom Night, showcasing leadership skills, teamwork and communication to ensure their successful execution.</li>
                                                    <li>Assisted over 100 freshmen during enrollment at orientation, addressing their inquiries and ensuring they are familiar with school resources.</li>
                                                </ul>
                                            <br/>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </li>

                        {/* SMA Sutomo */}
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center bg-[#ffffff] rounded-full -start-3 ring-4 ring-[#ffffff] mt-1">
                                <svg className="w-5 h-5 text-[#6cb6ff] size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                </svg>
                            </span> 
                            <h3 className="mb-1 text-[15pt] font-semibold text-gray-900 ">SMA Sutomo 1</h3>
                            <time className="block mb-2 text-[9pt] md:text-base font-normal leading-none text-gray-500 ">June 2019 - July 2021</time>
                            {/* <p className="text-base font-normal text-gray-500"></p> */}
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;