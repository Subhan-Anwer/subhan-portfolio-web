import React from 'react'
import Image from 'next/image'

const stackItems = [
    { id: 1, name: 'HTML', src: '/html-5.svg' },    
    { id: 2, name: 'CSS', src: '/css.svg' },
    { id: 3, name: 'JavaScript', src: '/javascript.svg' },
    { id: 4, name: 'Typescript', src: '/typescript.svg' },
    { id: 5, name: 'Tailwind Css', src: '/tailwind-css.svg' },
    { id: 6, name: 'Next Js', src: '/nextjs.svg' },
    { id: 7, name: 'Git', src: '/git.svg' },
    { id: 8, name: 'Github', src: '/github.svg' },
]

const Stack = () => {
    return (
        <section id='stack' className='py-16 glass'>
            <div className='max-w-[1200px] mx-auto px-4 text-center'>
                <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 ">
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className='flex items-center justify-center flex-col rounded-xl p-4'
                        >
                            <div className='mb-4 bg-white/10 rounded-xl p-4'>
                                <Image 
                                src={item.src}
                                alt={item.name}
                                width={100}
                                height={100}
                                className='sm:w-32 sm:h-32 w-25 h-25 hover:scale-105 transition-transform duration-200 ease-in-out'
                                />
                            </div>

                            <p className='text-gray-400 font-semibold text-center'>{item.name}</p>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Stack
