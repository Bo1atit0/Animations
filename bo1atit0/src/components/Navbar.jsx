import React, { useState } from 'react'
import { GoBriefcase } from "react-icons/go";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {label: 'Home', url: '/'},
    {label: 'Projects', url: '/projects'},
    {label: 'About', url: '/about'},
    {label: 'Contact', url: '/contact'},
  ]
  return (
    <>
    <nav className='bg-black text-gray-100 select-none fixed w-full top-0 left-0'>
      <div className='flex container mx-auto justify-between py-5 px-6'>

        {/* logo */}
        <div className=''>
          <span>bo1atit0</span>
          <span>.</span>
        </div>

        {/* Desktop Nav Items */}
        <div className='md:flex lg:flex gap-4 hidden'>
          {navLinks.map((link, index) => (
            <a key={index}>{link.label}</a>
          ))}
        </div>
        {/* button */}
        <div>
          <button className='md:flex lg:flex items-center gap-2 hidden bg-main py-2 rounded-lg px-4'>
            View Resume
            <GoBriefcase/>
          </button>
        </div>

        {/* Mobile menu */}
        <div className='md:hidden lg:hidden'>
          <button 
          className='cursor-pointer'
            onClick={() => {setIsOpen(!isOpen)}}>
            {isOpen ? 'X' : '+'}
          </button>
        </div>

      </div>

    </nav>
    {/* Mobile menu items */}
      {
        isOpen && (
          <div className='md:hidden flex bg-black/85 z-50 absolute top-16 flex-col gap-2 text-gray-300 px-6 py-5 w-full '>
            <div>
              {navLinks.map((link, index) => (
                <a
                className='flex py-2 '
                key={index}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className=''>
              <button className='flex items-center justify-center gap-2 bg-main py-2 text-black w-full rounded-lg'>
                View Resume
              <GoBriefcase />
              </button>
              
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar