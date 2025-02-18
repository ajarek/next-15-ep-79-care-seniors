import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start px-24">
      <div className='relative w-full h-[500px] '>
        <Image src='/images/baner.jpg'width={1100} height={500} alt="baner" className="object-cover rounded-lg" />
        <div className='w-full h-full absolute top-0 left-0  flex *:z-20 flex-col items-center justify-end text-center p-4 gap-2'>
         <h1 className='text-4xl font-bold text-white'>Witamy na naszej stronie internetowej</h1>
          <p className='text-lg text-white'>Znajdziesz tu informacje o naszej firmie i naszych usługach</p>
          <Button className=''>Dowiedz się więcej</Button>
        </div>
          <div className="absolute top-0   bg-slate-900 z-10 opacity-40  w-full h-full"></div>
        
      </div>
     
      </main>
  );
}
