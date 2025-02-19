import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { great_vibes } from '@/app/layout' 
import ContactBlock from '@/components/ContactBlock'
export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh)] flex-col items-center justify-start px-4'>
      <div className='relative w-full flex justify-center  '>
        <Image
          src='/images/baner.jpg'
          width={1100}
          height={463}
          alt='baner'
          priority
          className='w-full h-full object-cover rounded-lg'
        />
        <div className={`${great_vibes.className}  absolute inset-0 flex flex-col items-center justify-end pb-4 gap-4 z-20`}>
          <h1 className='text-5xl max-sm:text-6xl tracking-wider text-center font-bold text-white'>
            Witamy na naszej stronie internetowej
          </h1>
          <p className='text-2xl tracking-wider text-white max-sm:hidden'>
            Znajdziesz tu informacje o naszej firmie i naszych usługach
          </p>
          <Button className='text-2xl'>Dowiedz się więcej</Button>
        </div>
        <div className='absolute top-0   bg-black z-10 opacity-60  w-full h-full'></div>
      </div>
     <ContactBlock/>
    </main>
    
  )
}
