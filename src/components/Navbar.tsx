'use client'
import { useState, useEffect } from 'react'
import { BrainCircuit, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { SectionRefs, SectionId } from '@/types'

interface NavbarProps {
  sectionRefs: SectionRefs
}

const Navbar = ({ sectionRefs }: NavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  const navItems = [
    { name: 'Home', id: 'home' as const },
    { name: 'About', id: 'about' as const },
    { name: 'Projects', id: 'projects' as const },
    { name: 'Skills', id: 'skills' as const },
    { name: 'Contact', id: 'contact' as const }
  ]

  // Handle scroll behavior and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50)
      
      const scrollPosition = window.scrollY + 100
      
      const sectionIds: SectionId[] = ['home', 'about', 'projects', 'skills', 'contact']
      for (const id of sectionIds) {
        const ref = sectionRefs[id]
        if (!ref.current) continue
        
        const sectionTop = ref.current.offsetTop
        const sectionHeight = ref.current.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  // Smooth scroll to section
  const scrollToSection = (id: SectionId) => {
    const section = sectionRefs[id]?.current
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      })
      setActiveSection(id)
      setToggleMenu(false)
    }
  }
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-sm' : 'py-4 bg-gray-950'
      } border-b shadow-lg shadow-indigo-500/50`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            <BrainCircuit size={scrolled ? 24 : 28} />
          </button>
          
          {/* Desktop Nav Items */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeSection === item.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                {`</${item.name}>`}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="text-indigo-500 sm:hidden hover:text-indigo-400 transition-colors"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {toggleMenu && (
          <div className="sm:hidden bg-gray-900/95 backdrop-blur-md pb-4">
            <div className="container mx-auto flex flex-col items-center gap-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-4 py-2 rounded-full text-center transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {`</${item.name}>`}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar