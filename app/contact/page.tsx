import ContactForm from '@/components/ContactForm'
import MotionImage from '@/components/MotionImage'
import { great_vibes } from '@/app/layout'

const Contact = async () => {
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center  p-4 gap-4 '>
      <MotionImage
        src='/images/contact.jpg'
        alt='contact'
        width={400}
        height={400}
      />
      <ContactForm family={great_vibes.className} />
    </div>
  )
}

export default Contact
