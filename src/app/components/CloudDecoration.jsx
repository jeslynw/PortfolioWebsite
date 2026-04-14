"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CloudDecoration = () => {
    return(
        <section className="relative flex justify-between mt-9">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image width={384} height={100} src="/images/cloud1.png" alt="cloud picture"/>
            </motion.div>
            <motion.div
                className="mt-16"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
                <Image width={384} height={100} src="/images/cloud1.png" alt="cloud picture"/>
            </motion.div>
        </section>
    )
}

export default CloudDecoration;
