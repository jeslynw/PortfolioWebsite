import React, { useState }  from 'react'
import Image from 'next/image';


function ProjectTemplate({description, pics, title, skills}){
    return (    
        <div className={`book flex flex-col lg:col-span-6 xl:col-span-4 mb-10 justify-center items-center font-noto w-[350px] h-[410px] `}>
            <p className='project-desc pl-12 pr-6 text-justify text-sm '>{description}</p>
            <div className='cover'>
                <article class="article-wrapper w-[350px] h-[410px]">
                    <div class="rounded-lg container-project">
                        <Image 
                            src = {pics}
                            width={500}
                            height={200}
                            alt='picture'
                        />
                    </div>

                    <div class="project-info mt-6 mb-0">
                        <div class="flex-pr">
                            <div class="project-title text-wrap text-[22px] h-16">{title}</div>
                            <div class="project-hover align-top">
                                <svg styles="color: black;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </div>
                        <div className="types grid grid-cols-12 bottom-0">
                            {skills.map((skill, index) => (
                                <span key={index} className="project-type text-sm col-span-4 text-center ">{skill}</span>
                            ))}
                        </div>  
                    </div>
                    
                    
                </article>
            </div>
        </div>
    )
}

export default ProjectTemplate
