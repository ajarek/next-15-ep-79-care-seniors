import Image from 'next/image'
import React from 'react'
import { great_vibes } from '@/app/layout'  
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='h-16 flex justify-between items-center px-4 '>
      <div className='flex items-center space-x-2'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <h1 className={`${great_vibes.className}  text-4xl font-bold  `}>Pogodna Jesień</h1>
      </div>
      <ModeToggle />
    </nav>
  )
}

export default Navbar
