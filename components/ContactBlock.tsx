'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail,  Check } from 'lucide-react'
import MotionButton from '@/components/MotionButton'
import { console } from 'node:inspector'

export default function ContactBlock() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    if (validateForm()) {
      
      setIsSubmitted(true)
      
      // Reset form fields after submission
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    }
  }

  return (
    <div className='w-full flex items-center justify-center p-4  rounded-lg'>
      <div className='w-full   p-8 rounded-lg '>
        <h1 className='text-2xl font-bold mb-6 flex items-center'>
          <Mail className='mr-2 h-6 w-6' /> Kontakt
        </h1>
        {isSubmitted ? (
          <div className='flex flex-col items-center justify-center space-y-4'>
            <Check className='h-12 w-12 text-green-500' />
            <p className='text-lg text-center font-semibold capitalize'>
              {name} Dziękujemy za wiadomość!
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className='mt-4 hover:bg-primary hover:scale-110 transition-all duration-1000 ease-in-out'
            >
              Wyślij kolejną wiadomość
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='space-y-4 '
          >
            <div className='w-full flex items-center gap-4'>
              <div className='w-full space-y-2'>
                
                <Input
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                  placeholder='Imię i nazwisko'
                />
                {errors.name && (
                  <p className='text-sm text-red-500 mt-1'>{errors.name}</p>
                )}
              </div>
              <div className='w-full space-y-2'>
                
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.name ? 'border-red-500' : ''}
                  placeholder='Email'
                />
                {errors.email && (
                  <p className='text-sm text-red-500 mt-1'>{errors.email}</p>
                )}
              </div>
            </div>
            <div className='flex items-center gap-4 '>
              <div className='w-full space-y-2'>
                
                <Textarea
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={errors.message ? 'border-red-500' : ''}
                  autoFocus
                  placeholder='Wiadomość'
                />
                {errors.message && (
                  <p className='text-sm text-red-500 mt-1'>{errors.message}</p>
                )}
              </div>
              <div className=' flex flex-col items-center justify-center'>
                <MotionButton
                  typeButton='submit'
                  label=''
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
