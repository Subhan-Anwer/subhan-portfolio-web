'use client'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react'
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const COLORS_TOP = ["#1367C6", "#13FFAA", "#CE84CF", "#DD335C"]

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`


  return (
    <motion.section id='home'
      style={{
        backgroundImage
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >

      <div className='z-10 flex flex-col items-center text-center'>
        <span className='sm:mb-4 mb-5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 mt-2 sm:text-sm text-xs'>
          Open for Work
        </span>

        <h1 className='text-white/40 text-3xl sm:text-5xl md:text-7xl font-black sm:mb-1 mb-0'>Hi, I am</h1>
        <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black sm:leading-tight leading-[42px] text-transparent text-4xl sm:text-5xl md:text-7xl'>Subhan Anwer</h1>

        <Image
          src='/profilepic.png'
          alt='profile pic'
          width={250}
          height={250}
        />
        <div className='flex flex-col sm:flex-row bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center sm:space-x-2 gap-3 mb-4 sm:mt-0 mt-6'>
          <div className="flex items-center justify-center space-x-2">
            <Image
              src='/obj1.png'
              alt='object'
              width={30}
              height={30}
              className='rounded-2xl mx-auto'
            />
            <Image
              src='/obj1.png'
              alt='object'
              width={30}
              height={30}
              className='rounded-2xl mx-auto'
            />
            <Image
              src='/obj1.png'
              alt='object'
              width={30}
              height={30}
              className='rounded-2xl mx-auto'
            />
          </div>
          <p>80+ Happy Clients</p>
        </div>

        <p className='my-6 max-w-xl '>Fullstack Developer based in Karachi, with over 5 years of experience</p>

        <motion.button
          style={{
            border,
            boxShadow
          }}
          whileHover={{
            scale: 1.015
          }}
          whileTap={{
            scale: 0.985
          }}
          className='flex w-fit items-center gap-2 rounded-full px-4 py-2'
        >
          Download CV
          <FiArrowRight />
        </motion.button>

      </div>

      <div className='bg-circle-container'>
        <div className='bg-circle-background'></div>
        <div className='bg-circle'></div>
      </div>

    </motion.section>
  )
}

export default Hero