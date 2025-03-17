
'use client'
import { useState} from 'react'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const navItems = [
        {name: '</Home>', link: '/'},
        {name: '</About>', link: '/about'},
        {name: '</Projects>', link: '/projects'},
        {name: '</Skills>', link: '/skills'},
        {name: '</Contact>', link: '/contact'}
    ]
  return (
    <nav className='flex justify-between p-4  m-4 border shadow-lg shadow-indigo-500/50 rounded-2xl bg-gray-950'>
        <div className='text-2xl text-indigo-500 '>
            medex
        </div>
        
        <div className={`${
            toggleMenu ? "flex" : "hidden sm:flex"
        } justify-center items-center gap-3 sm:gap-5 lg:gap-10 sm:flex-row flex-col mt-2  sm:mt-0`}>
            {navItems.map((item, index) => (
                <Link key={index} href={item.link}>
                    {/* <div className="text-lg sm:text-xl font-semibold text-white border-indigo-500 shadow-lg shadow-indigo-500/50 "> */}
                        {/* <div className='hover:p-1'> */}
                        <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white hover:text-green-700 hover:mx-2 flex items-center space-x-2">
                            {item.name}
                            </HoverBorderGradient>
                        {/* </div> */}
                    {/* </div> */}
                </Link>
            ))}     
        </div>
        <div className='flex items-center text-2xl text-white'>
            icon
        </div>
    </nav>
  )
}

export default Navbar