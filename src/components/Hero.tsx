'use client'
import { animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react'
import obj from '@/assets/obj1.png'

const COLORS_TOP = ["#13FFAA", "#1367C6", "#CE84CF", "#DD335C"]

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

  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`


  return (
    <div>Hero</div>
  )
}

export default Hero