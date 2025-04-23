'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const email = "subhananwersheikh@gmail.com";
const emailLink = "mailto:subhananwersheikh@gmail.com";
const phone = "+92-323-2063869";
const phoneLink = "https://wa.me/+923232063869";
const map = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d226.26547301322472!2d67.07400604985085!3d24.855392802805493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1745378213449!5m2!1sen!2s"


const Contact = () => {
    return (
        <section id='contact' className='py-32 text-whitemax-w-[1200px] mx-auto px-8'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid lg:grid-cols-2 gap-16'
            >
                {/* Heading & Details */}
                <div className='space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-7xl font-bold text-gray-300 '
                    >
                        Get in <span className='text-purple-400'>Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='p-8 rounded-2xl space-y-8 glass'
                    >
                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Phone</p>
                            <Link
                                href={phoneLink}
                                className='text-2xl font-semibold text-white hover:text-gray-400 transition duration-300 flex items-center gap-2'
                                target='_blank'
                            >
                                <p>{phone}</p>
                                <span className='text-gray-500'>↗</span>
                            </Link>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Email</p>
                            <Link
                                href={emailLink}
                                className='text-2xl font-semibold text-white hover:text-gray-400 transition duration-300 flex items-center '
                            >
                                <p style={{ wordBreak: 'break-word' }}>{email}</p>
                            </Link>
                        </div>


                        <div className='space-y-2'>
                            <p className='text-lg text-gray-300'>Office</p>
                            <address className='text-xl text-bold text-gray-200 not-italic leading-relaxed'>
                                Mehmoodabad no 03, <br />
                                Karachi, Pakistan
                            </address>
                        </div>

                    </motion.div>

                </div>


                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-full min-h-[400px] rounded-2xl mt-4 overflow-hidden'
                >


                    <iframe
                        src={map}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                    >
                    </iframe>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Contact
