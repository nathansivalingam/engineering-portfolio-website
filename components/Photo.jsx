"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: 1,
                    transition: { delay: 0, duration: 0.4, ease: "easeIn" }
                }}
                className="relative"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { delay: 0, duration: 0.4, ease: "easeInOut" }
                    }}
                    className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] relative transition-all duration-500 ease-in-out"
                >
                    <Image 
                        src="/assets/profile_photo.jpg" 
                        priority 
                        quality={100} 
                        fill 
                        alt="Nathan Sivalingam" 
                        className="object-cover rounded-full transition-all duration-500 ease-in-out"
                    />
                </motion.div>

                {/* border circle */}
                <motion.svg 
                    className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253" 
                        cy="253" 
                        r="250" 
                        stroke="black" 
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo