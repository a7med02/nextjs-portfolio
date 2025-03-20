
'use client'
import { useState} from 'react'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { BrainCircuit , Menu} from 'lucide-react';



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
    <nav className='flex justify-around items-center py-4 mt-4 bg-gray-950 border shadow-lg shadow-indigo-500/50 rounded-2xl '>
        <div className='text-indigo-500'>
            <BrainCircuit className=''/>
        </div>
        
        <div className={`${
            toggleMenu ? "flex" : "hidden sm:flex"
        } justify-center items-center gap-3 sm:gap-5 lg:gap-10 sm:flex-row flex-col mt-2  sm:mt-0`}>
            {navItems.map((item, index) => (
                <Link key={index} href={item.link}>
                        <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white hover:bg-indigo-500  flex items-center space-x-2">
                            {item.name}
                            </HoverBorderGradient>
                </Link>
            ))}     
        </div>
        <div className='flex items-center text-indigo-500 sm:hidden'>
            <Menu onClick={() => setToggleMenu(!toggleMenu)} className='cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar