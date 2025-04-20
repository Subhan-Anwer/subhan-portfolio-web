'use client';
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';

const images = [
    { src: "/udemy.png", alt: "udemy" },
]

const LogoAnimation = () => {
    return (
        <div className='py-8 bg-purple-200/10 opacity-80'>
            <div className='container mx-auto'>
                <div className='overflow-hidden [mask-image: linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent) ]'>
                    <motion.div
                        className='flex gap-14 flex-none pr-14'
                        animate={{
                            translateX: '-50%',
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={30}
                                width={30}
                            />
                        ))}

                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default LogoAnimation
