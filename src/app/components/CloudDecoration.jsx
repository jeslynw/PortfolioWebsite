"use client"    
import React from "react";
import Image from "next/image";


const CloudDecoration = () => {
    return(
        <section className="relative flex justify-between mt-9">
            <div className="">
                <Image width={384} height={100} src="/images/cloud1.png" alt = "cloud picture"/>
            </div>
            <div className="mt-16">
                <Image width={384} height={100} src="/images/cloud1.png" alt = "cloud picture"/>
            </div>
        </section>
    )
}

export default CloudDecoration;