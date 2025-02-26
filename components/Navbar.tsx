import Image from 'next/image'
import React from 'react'
import { great_vibes } from '@/app/layout'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 flex justify-between items-center px-4 '>
      <Link
        href='/'
        className='flex items-center space-x-2 hover:text-gray-500 transition duration-200'
      >
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={50}
          height={50}
        />
        <h1
          className={`${great_vibes.className}  text-4xl max-sm:text-lg font-bold max-sm:font-normal `}
        >
          Pogodna Jesień
        </h1>
      </Link>
      <div className='flex space-x-8 max-sm-:space-x-2'>
        <Link
          href='/about'
          className={`${great_vibes.className}  text-2xl max-sm:text-lg font-bold hover:text-gray-500 transition duration-200 `}
        >
          O nas
        </Link>
        <Link
          href='/contact'
          className={`${great_vibes.className}  text-2xl max-sm:text-lg font-bold hover:text-gray-500 transition duration-200 `}
        >
          Kontakt
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
