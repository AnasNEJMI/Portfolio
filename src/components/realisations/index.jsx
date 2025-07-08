import React, { useRef } from 'react'
import Magnetic from '../basic_magnetic_item'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Realisations = () => {
  const containerRef = useRef(null)

    useGSAP((context, contextSafe) => {
      gsap.from('.title', {yPercent: -200, scrollTrigger : {
        trigger : '.title',
        start : "top bottom",
        end : "center top",
        scrub : true
      }});

      gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 0 0 100%)', scrollTrigger : {
        trigger : '.title',
        start : "top bottom",
        end : "center center",
        scrub : true
      }});

    }, {scope : containerRef});
  return (
    <section ref ={containerRef} className='section pt-[calc(var(--padding-nav)*4)] pb-[calc(var(--padding-nav)*4)] pl-nav pr-nav md:pt-[calc(var(--padding-nav)*3)] lg:pt-[calc(var(--padding-nav)*4)] min-h-screen w-full flex flex-col items-center justify-start relative z-10 bg-white'>
      <h2 className = "title relative font-secondary font-black text-end text-black text-h1 w-min text-nowrap py-nav">Mes Projets<span className='clipped-title absolute top-0 left-0 w-full h-full text-white opacity-75'>Mes Projets</span></h2>
      <div className='flex items-center justify-end w-full max-w-7xl mt-16'>
        <div className='relative rounded-full'>
          <div className='m-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute rounded-full text-h6 text-transparent pointer-events-none border border-zinc-200 px-6 py-4 '>
            Github
          </div>
         <Magnetic>
              <Link className='text-h6 px-6 py-4 bg-zinc-900 rounded-full text-white' href={'/'}>
                Github
              </Link>
          </Magnetic>
        </div>
        <div className='w-4 h-px bg-zinc-200'></div>
        <div className='relative rounded-full'>
          <div className='m-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 absolute rounded-full text-h6 text-transparent pointer-events-none border border-zinc-200 px-6 py-4 '>
            Dribbble
          </div>
         <Magnetic>
              <Link className='text-h6 px-6 py-4 bg-zinc-900 rounded-full text-white' href={'/'}>
                Dribbble
              </Link>
          </Magnetic>
        </div>
      </div>
      <div className='max-w-7xl w-full mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4'>
          <div>
            <div className='aspect-square bg-black w-full'>

            </div>
            <h4 className='font-secondary font-bold text-h4 mt-4'>
              Tandem
            </h4>
            <div className='h-px w-full bg-zinc-900 font-primary font-light'></div>
            <h5>ReactJS, Laravel PHP, MySQL, Docker</h5>
          </div>
          <div>
            <div className='aspect-square bg-black w-full'>

            </div>
            <h4 className='font-secondary font-bold text-h4 mt-4'>
              FeetMe
            </h4>
            <div className='h-px w-full bg-zinc-900 font-primary font-light'></div>
            <h5>Android, Java, Xml</h5>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className=' mt-20'>
            <Magnetic>
                    <Link href='/about' scroll = {false} className='bg-black text-white font-primary font-light text-h5 w-min text-nowrap px-12 rounded-full py-6'>
                        Voir Plus
                    </Link>
            </Magnetic>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Realisations