import MotionLink from '@/components/MotionLink'
import MotionImage from '@/components/MotionImage'
import { great_vibes } from '@/app/layout'

const AboutUs = async () => {
  return (
    <div
      className={`${great_vibes.className}  w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col  justify-center  gap-4 p-4`}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
        <div className='relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden flex justify-center items-center'>
          <MotionImage
            src='/images/team.jpg'
            alt='team'
            width={400}
            height={400}
          />
        </div>

        <div className='space-y-2'>
          <h1 className='text-4xl font-bold '>O Nas</h1>

          <ul className='text-2xl  space-y-2'>
            <li>Dlaczego warto wybrać nas?</li>
            <li>
              Nasz zespół to wykwalifikowani i pełni empatii specjaliści, którzy
              każdego dnia dbają o komfort, bezpieczeństwo i dobre samopoczucie
              naszych mieszkańców. Tworzymy ciepłe, domowe środowisko, w którym
              seniorzy mogą czuć się jak u siebie, otoczeni troską i
              życzliwością.
            </li>
            <li>
              W skład naszego personelu wchodzą doświadczeni opiekunowie,
              pielęgniarki, lekarze oraz terapeuci, którzy indywidualnie
              podchodzą do potrzeb każdego mieszkańca. Dzięki zaangażowaniu i
              profesjonalizmowi zapewniamy kompleksową opiekę, uwzględniając
              zarówno zdrowie fizyczne, jak i dobre samopoczucie psychiczne
              naszych podopiecznych.
            </li>
            <li>
              Naszym celem jest nie tylko zapewnienie wsparcia w codziennym
              funkcjonowaniu, ale także aktywizowanie seniorów i tworzenie
              atmosfery pełnej ciepła, szacunku i radości. Wierzymy, że każdy
              dzień może być piękny, a wspólnie spędzony czas – pełen
              wartościowych chwil.
            </li>
            <li>
              Serdecznie zapraszamy do naszego domu, gdzie troska,
              bezpieczeństwo i serdeczność są zawsze na pierwszym miejscu.
            </li>
          </ul>
          <div className='flex justify-end'>
            <MotionLink
              label='Napisz do Nas'
              href='/contact'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
