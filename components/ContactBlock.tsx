import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const ContactBlock = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-4 0 bg-green-300 text-black gap-4'>
      <h2>Napisz do nas!</h2>
      <form
        action='https://formspree.io/f/xpzebqjz'
        className='w-full flex flex-col items-center gap-4  '
       
      >
        <div className='w-full flex items-center gap-4'>
          
          <Input
            type='text'
            name='name'
            placeholder='Nazwisko i imię'
            className='border border-gray-800 text-black'
          />
         
          <Input
            type='email'
            name='email'
            placeholder='Email'
             className='border border-gray-800 text-black'
          />
          
          <Input
            type='phone'
            name='phone'
            placeholder='Telefon'
             className='border border-gray-800 text-black'
          />
        </div>
        <div className='w-full flex items-center gap-4'>

        <Textarea name='message' placeholder='Wiadomość'  className='border border-gray-800 text-black' />
        <button type='submit'  ><ArrowUpRight size={48} className='w-12 h-12 rounded-full bg-primary text-background shadow-lg hover:scale-110 transition-all duration-300 ease-in-out hover:rotate-45 hover:bg-green-500 hover:text-white'/></button>

        </div>
      </form>
    </div>
  )
}

export default ContactBlock
