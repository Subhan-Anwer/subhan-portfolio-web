'use client'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Portfolio', path: '#portfolio' },
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
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"></div>
        </div>
    )
}

export default NavBar