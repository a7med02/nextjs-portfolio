'use client'

import { HoverBorderGradient } from './ui/hover-border-gradient'
import { ArrowRight, Instagram, LinkedinIcon, GithubIcon } from 'lucide-react'



export default function Contact() {
    const socialLinks = [
        {name: 'Github',
        icon: <GithubIcon className="w-5 h-5" />,
        url : 'https://github.com/a7med02'
        },
        {name: 'Twitter',
        icon: <ArrowRight className="w-5 h-5" />,
        url : 'https://twitter.com/a7med02'
        },
        {name: 'LinkedIn',
        icon: <LinkedinIcon className="w-5 h-5" />,
        url : 'https://www.linkedin.com/in/a7med02/'
        },
        {name: 'Instagram',
        icon: <Instagram className="w-5 h-5" />,
        url : 'https://www.instagram.com/a7med02/'
        },
    ]
  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Get In Touch
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Send me a message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <HoverBorderGradient
                as="button"
                containerClassName="rounded-full"
                className="bg-gray-900 text-white flex items-center space-x-2 px-6 py-2"
            >
                <span>Send Message</span>
            </HoverBorderGradient>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Contact Information</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="mt-1 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p> Morocco, casablanca</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-1 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>ahmedbouregba07@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-1 text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>+212 0780868206</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3 text-indigo-400">Social Media</h4>
            <div className="flex space-x-4">
                {socialLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                    >
                    {link.icon}
                        {link.name}
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}