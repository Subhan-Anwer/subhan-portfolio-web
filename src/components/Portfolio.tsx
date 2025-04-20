'use client';
import { animate, useMotionTemplate, motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const COLORS_TOP = ["#1367C6", "#13FFAA", "#CE84CF", "#DD335C"]


const projects = [
    {
        id: 1,
        title: "Start - Modern Digital Agency Website",
        description: "A modern and responsive website for a digital startup agency, focused on clean design and smooth user experience.",
        image: "/website-1.png",
        link: "https://subhan-startup-web.vercel.app/"
    },
    {
        id: 2,
        title: "Foodtuck - Restaurant Website",
        description: "A vibrant and tasty-looking website for a restaurant, designed to showcase menus, offers, and attract hungry visitors.",
        image: "/website-2.png",
        link: "https://restaurant-web-green.vercel.app/"
    },
    {
        id: 3,
        title: "Shopit - Clothing E-Commerce Store",
        description: "A stylish clothing eCommerce site with product listings, cart features, and a mobile-friendly layout.",
        image: "/website-3.png",
        link: "https://shopit-subhan.vercel.app/"
    }
]

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

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

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id='portfolio'
            className='py-32 text-white'
        >
            <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 '>

                <div>
                    <h2 className='text-xl font-bold mb-10'>Featured <span className='text-gray-400'>Projects</span></h2>

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className='cursor-pointer mb-8 group'
                        >
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === project.id ? "text-gray-200" : ""} duration-300`}>{project.title}</h3>

                            {selectedProject.id === project.id && (
                                <div className='border-b-2 border-gray-200 my-4'>

                                </div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className='text-gray-400 transition-all duration-500 ease-in-out'>
                                    {project.description}
                                </p>
                            )}

                        </div>
                    ))}
                </div>

                <Link target='_blank' href={selectedProject.link}>
                    <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={800}
                        height={450}
                    />
                </Link>

            </div>

        </motion.section >
    )
}

export default Portfolio
