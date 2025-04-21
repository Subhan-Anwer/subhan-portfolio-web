'use client'
import { motion, useInView } from 'framer-motion'
import React from 'react'


const metrics = [
    {
        id: 1,
        value: '2+',
        label: "Years of Experience",
        description: "Dedicated to building real-world projects & improving my development skills.",
    },
    {
        id: 2,
        value: ' 10+',
        label: 'Projects Completed ',
        description: 'From simple landing pages to full-stack web apps, built with attention to details.',
    },
    {
        id: 3,
        value: '10+',
        label: 'Technologies Mastered',
        description: 'Hands-on experience in various programming languages & modern frameworks.',
    },
    {
        id: 4,
        value: '95%',
        label: 'Code Quality',
        description: 'Committed to writing clean, efficient, scalable & maintainable code.',
    },
    {
        id: 5,
        value: '180+',
        label: 'GitHub Commits',
        description: 'Consistent contributor to personal projects, reflecting growth & passion for development.',
    }
]
const CodeStats = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });
    return (
        <motion.section
            id='about'
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className='container max-w-full mx-auto px-6 md:px-12 py-32 text-white glass'
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='text-6xl font-bold mb-12'
            >
                CODE STATS
            </motion.h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className='flex flex-col'
                    >
                        <motion.h3
                            initial={{ scale: 0.5 }}
                            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.4, type: 'spring' }}
                            className='text-5xl font-bold text-purple-300 mb-2'
                        >
                            {metric.value}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                            className='text-xl font-semibold mb-2'
                        >
                            {metric.label}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                            className='text-gray-400'
                        >
                            {metric.description}
                        </motion.p>
                    </motion.div>


                ))}


            </div>
        </motion.section>
    )
}

export default CodeStats
