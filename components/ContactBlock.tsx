'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Check } from 'lucide-react'
import MotionButton from '@/components/MotionButton'

export default function ContactBlock({ family }: { family: string }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) {
      newErrors.name = 'Imię jest wymagane'
    }
    if (!email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Adres e-mail jest nieprawidłowy'
    }
    if (!message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission

    if (validateForm()) {
      const form = e.currentTarget
      const formData = new FormData(form)

      const targetName = formData.get('name') as string
      const targetEmail = formData.get('email') as string
      const targetMessage = formData.get('message') as string

      setIsSubmitted(true)
      setName(targetName)
      setEmail(targetEmail)
      setMessage(targetMessage)

      form.reset() // Reset the form after submission
    } else {
      console.error('Form validation failed')
    }
  }
  const handleReset = () => {
    setName('')
    setEmail('')
    setMessage('')
    setErrors({})
    setIsSubmitted(false)
  }
  return (
    <div className='w-full flex items-center justify-center p-4 border-2 rounded-lg'>
      <div className='w-full   p-8 rounded-lg '>
        <h1 className={`${family} text-2xl font-bold mb-6 flex items-center`}>
          <Mail className='mr-2 h-6 w-6' /> Kontakt
        </h1>
        {isSubmitted ? (
          <div
            className={`${family} flex flex-col items-center justify-center space-y-4`}
          >
            <Check className='h-12 w-12 text-green-500' />
            <p className='text-xl text-center font-semibold capitalize'>
              {name} Dziękujemy za wiadomość!
            </p>
            <Button
              onClick={handleReset}
              className='mt-4 text-xl hover:bg-primary hover:scale-110 transition-all duration-1000 ease-in-out'
            >
              Wyślij kolejną wiadomość
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 `}
          >
            <div
              className={`${family}  w-full flex flex-wrap items-center gap-4`}
            >
              <div className='w-full space-y-2'>
                <Input
                  id='name'
                  name='name'
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
                  name='email'
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
              <div className={`${family}  w-full space-y-2`}>
                <Textarea
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={` ${errors.message ? 'border-red-500  ' : ''} `}
                  placeholder='Wiadomość'
                />
                {errors.message && (
                  <p className='text-sm text-red-500 mt-1'>{errors.message}</p>
                )}
              </div>

              <MotionButton
                typeButton='submit'
                label='📩'
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
