import React, { useRef } from 'react'
import { useVerticalNavState } from '@/contexts/vertical_nav_state_context';
import Link from 'next/link';
import { Copy, MoveDownLeft } from 'lucide-react';
import MagneticButton from '../magnetic-button/magnetic-button';
import { toast } from 'sonner';

const VerticalNav = () => {
    let {isVerticalNavOpen} = useVerticalNavState();

  return (
    <div className = {`h-screen font-primary w-full fixed top-0 bottom-0 left-0 z-40 ${isVerticalNavOpen? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`h-screen w-full fixed top-0 left-0 z-10 transition-all duration-700 ease-out bg-zinc-500 ${isVerticalNavOpen? 'opacity-40' : 'opacity-0'}`}></div>
        <div className = {`absolute top-0 left-full z-20 w-full max-w-[700px] h-full flex items-stretch justify-center ease-in-out-custom transition-all duration-700 will-change-transform ${isVerticalNavOpen? '-translate-x-full' : ' translate-x-[160px]'}`}>
            <svg className = {`w-40 absolute top-0 right-full h-full overflow-visible translate-x-px origin-right ease-in-out-custom transition-all duration-1000 will-change-transform ${isVerticalNavOpen? 'scale-x-0' : 'scale-x-100'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d = "M 100 0 V 100 Q 0 50 100 0 z" className = "fill-zinc-900 z-50"></path>
            </svg>
            <div className = "bg-black w-full flex flex-col">
                <div className = {`mt-16 w-full p-nav`}></div>
                
                <div className='flex flex-col w-44 items-start justify-start pl-nav text-zinc-300 mt-8 md:mt-16 lg:mt-8'>
                    <div className='flex gap-2 items-end'>
                    <span className='font-secondary font-bold text-caption uppercase tracking-widest'>Navigation</span>
                        <MoveDownLeft size={24}/>
                    </div>
                    <Link scroll = {false} href={'/projects'} className='font-primary font-semibold text-h6 md:text-h4 text-white mt-8'>Projets</Link>
                    <Link scroll = {false} href={'/contact'} className='font-primary font-semibold text-h6 md:text-h4 text-white mt-2'>Contact</Link>
                </div>
                <div className='flex flex-col w-44 items-start justify-start pl-nav text-zinc-300 mt-8 md:mt-16'>
                    <div className='flex gap-2 items-end'>
                    <span className='font-secondary font-bold text-caption uppercase tracking-widest'>Réseaux</span>
                        <MoveDownLeft size={24}/>
                    </div>
                    <Link scroll = {false} href={'https://dribbble.com/AansNEJMI'} className='font-primary font-semibold text-h6 md:text-h4 text-white mt-8'>Dribble</Link>
                    <Link scroll = {false} href={'https://github.com/AnasNEJMI'} className='font-primary font-semibold text-h6 md:text-h4 text-white mt-2'>Github</Link>
                </div>
                
                <div className='px-nav grow my-8 md:my-16 flex items-center justify-center'>
                    <div className='w-full h-px bg-zinc-600'></div>
                </div>
                <div className='flex flex-col  justify-end items-start w-full pl-nav pb-nav'>
                    <div className='flex flex-col items-start justify-start text-zinc-300'>
                        <div className='flex gap-2 items-end'>
                        <span className='font-secondary font-bold text-caption  uppercase tracking-widest'>E-Mail</span>
                        <MoveDownLeft size={24}/>
                        </div>
                        <div className='flex items-center justify-between gap-4 mt-4'>
                        <Link scroll = {false} href={'mailto:anasnejmi@gmail.com'} className='font-primary font-semibold text-h6  md:text-h5 text-white'>anasnejmi@gmail.com</Link>
                        <MagneticButton onClick={() => {
                            navigator.clipboard.writeText('anasnejmi@gmail.com')
                            toast('Adresse e-mail copiée avec succès.')
                            }} className='rounded-full w-10 md:w-10 h-10 md:h-10 md:px-0 px-0 py-0 bg-zinc-900 border border-white'>
                            <Copy size={16}/>
                        </MagneticButton>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start text-zinc-300 mt-4 md:mt-8'>
                        <div className='flex gap-2 items-end'>
                        <span className='font-secondary font-bold text-caption  uppercase tracking-widest'>Tél</span>
                        <MoveDownLeft size={24}/>
                        </div>
                        <div className='flex items-center justify-between gap-4  mt-1'>
                        <Link scroll = {false} href={'tel:07 80 12 60 77'} className='font-primary font-semibold text-h6 md:text-h5 text-white'>(+33) 07 80 12 60 77</Link>
                        <MagneticButton onClick={() => {
                            navigator.clipboard.writeText('07 80 12 60 77')
                            toast('Numéro de télephone copié avec succès.')
                            }} className='rounded-full w-10 md:w-10 h-10 md:h-10 md:px-0 px-0 py-0 bg-zinc-900 border border-white'>
                            <Copy size={16}/>
                        </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerticalNav