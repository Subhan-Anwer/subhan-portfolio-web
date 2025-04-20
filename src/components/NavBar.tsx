'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navLinks = [
    { title: 'Stack', path: '#stack' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'About', path: '#about' },
    { title: 'Contact', path: '#contact' },
]

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            {/* Desktop Navbar */}
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden sm:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-8 mt-1">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className="transform hover:text-white/50 leading-[125%] transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div
                onClick={toggleNav}
                className="sm:hidden absolute top-5 right-6 z-50 border rounded p-2 text-white/70 border-white/70"
            >
                {!nav ? (
                    <AiOutlineMenu size={20} />
                ) : (
                    <AiOutlineClose size={20} />
                )}
            </div>

            <div className={`fixed left-0 top-0 w-full h-full bg-[#1b1b1b] transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>

                <ul className='flex flex-col items-center justify-center space-y-8 h-full'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav} className="transform hover:text-white/50 leading-[125%] transition-all duration-300 ease-in-out">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default NavBar
