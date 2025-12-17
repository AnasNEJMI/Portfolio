import React, { useRef } from 'react'
import ParisSVG from '@/components/paris-svg';
import Salutations from '../salutations';
import Stack from '../stack';
import HeroLottieAnimation from '../hero-animation';




const HomeHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className='section relative z-10 min-h-screen pt-[144px] w-full flex items-center justify-start gap-8 flex-col overflow-hidden px-nav pb-nav bg-white'>
        <Stack/>
        <div className='flex items-center justify-center gap-4'>
            <Salutations/>
            <div className='flex items-center justify-center text-h6 font-primary gap-2 text-zinc-900'>
                <span>Je suis </span>
                <h1 className='text-h6 font-bold font-secondary'>Anas NEJMI</h1>
            </div>
        </div>
        
        
        <div className='flex flex-col'>
            <h1 className='font-secondary font-medium text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] leading-[1] text-center text-zinc-900 drop-shadow-2xl'>Développeur</h1>
            <h1 className='font-secondary font-medium text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] leading-[1] text-center text-zinc-900 drop-shadow-2xl'>Frontend</h1>
        </div>
        <div className='w-full aspect-[6/4] max-w-[600px] relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:pb-nav'>
            <HeroLottieAnimation/>
        </div>
        <div className='absolute bottom-0 flex items-center justify-end w-full max-w-7xl font-primary text-body pb-6 px-6'>
            <div className = "origin-bottom-right">
                <ParisSVG className='h-24 lg:h-32'/>
            </div>
        </div>
    </section>
  )
}

export default HomeHero