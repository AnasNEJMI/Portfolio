import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { map, mapRounded } from '@/lib/helpers';
import { Copy, MoveDownLeft } from 'lucide-react';
import MagneticButton from '../magnetic-button/magnetic-button';
import logo from '@/../public/images/logo.png';
import Image from 'next/image';
import { toast } from 'sonner';
import BrandLinkButton from '../brand-button';

const Contact = () => {
    let containerRef = useRef(null);
    let linkRef = useRef(null);

    useGSAP(() => {
      const q = gsap.utils.selector(containerRef);
      const title = q('.title');
      const clippedTitle = q('.clipped-title');

      gsap.timeline({scrollTrigger : {
        trigger : containerRef.current,
        start : "top bottom",
        end : "bottom bottom",
        scrub: true,
      }})
      .from(title, {xPercent : -10}, 0)
      .to(clippedTitle, {clipPath : 'inset(0 100% 0 0)'}, 0)

    }, {scope : containerRef});
  return (
    <footer ref = {containerRef} className = "section px-nav pb-nav pt-40 text-zinc-100 bg-zinc-900 w-full relative z-30  flex flex-col items-center justify-start overflow-hidden">
      <svg className='curve w-full aspect-[3/2] scale-y-0 absolute top-0 left-0 z-10 origin-top drop-shadow-2xl' viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d = "m0 0h100v100Q50 0 0 100Z" className = "fill-zinc-100 z-50"></path>
      </svg>
      <div className='flex items-start justify-between max-w-5xl w-full'>
        <div className=' flex flex-col items-start justify-start  '>
          <h2 className = "title font-secondary font-black text-start text-white text-h3 md:text-h2 drop-shadow-md w-min text-nowrap px-5 leading-tight">Me<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90 px-5'>Me</span></h2>
          <h2 className = "title-2 font-secondary font-black text-start text-white text-h3 md:text-h2 drop-shadow-md w-min text-nowrap px-5 leading-tight">Contacter<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90 px-5'>Contacter</span></h2>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-end'>
          <div className='flex gap-2 items-end'>
            <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Via le site</span>
            <MoveDownLeft size={16}/>
          </div>
          <BrandLinkButton href='/contact' title='Allons-y !'/>
        </div>

      </div>

      <div className='w-full max-w-5xl bg-zinc-500 h-px my-16'></div>
      <div className='flex w-full max-w-5xl flex-col lg:flex-row gap-12'>
        <div className='flex justify-start flex-1'>
          <div className='flex flex-col w-44 items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Liens</span>
              <MoveDownLeft size={16}/>
            </div>
            <Link scroll = {false} href={'/projects'} className='font-primary font-semibold text-h5 text-white mt-4'>Projets</Link>
            <Link scroll = {false} href={'/contact'} className='font-primary font-semibold text-h5 text-white mt-1'>contact</Link>
          </div>
          <div className='flex flex-col w-44 items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Réseaux</span>
              <MoveDownLeft size={16}/>
            </div>
            <Link scroll = {false} href={'https://dribbble.com/AansNEJMI'} className='font-primary font-semibold text-h5 text-white mt-4'>Dribble</Link>
            <Link scroll = {false} href={'https://github.com/AnasNEJMI'} className='font-primary font-semibold text-h5 text-white mt-1'>Github</Link>
          </div>
        </div>
        <div className='flex flex-col gap-8 justify-start flex-1'>
          <div className='flex flex-col items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>E-Mail</span>
              <MoveDownLeft size={16}/>
            </div>
            <div className='flex items-center justify-between gap-4 mt-4'>
              <Link scroll = {false} href={'mailto:anasnejmi@gmail.com'} className='font-primary font-semibold text-h5 text-white'>anasnejmi@gmail.com</Link>
              <MagneticButton onClick={() => {
                  navigator.clipboard.writeText('anasnejmi@gmail.com')
                  toast('Adresse e-mail copiée avec succès.')
                }} className='rounded-full w-10 md:w-10 h-10 md:h-10 md:px-0 px-0 py-0 bg-zinc-900 border border-white'>
                <Copy size={16}/>
              </MagneticButton>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Tél</span>
              <MoveDownLeft size={16}/>
            </div>
            <div className='flex items-center justify-between gap-4  mt-1'>
              <Link scroll = {false} href={'tel:07 80 12 60 77'} className='font-primary font-semibold text-h5 text-white'>(+33) 07 80 12 60 77</Link>
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
      
      <div className = "w-full h-full max-w-5xl mt-16 font-primary flex flex-col justify-end">
        <div className='w-full  h-px opacity-70 bg-white '></div>
        <div className='w-full flex items-start justify-between mt-4 '>
          <Link scroll= {false} href = "/" className = "flex items-start justify-center mix-blend-difference">
            <Image src = {logo} alt = "Portfolio logo" width = {48} height = {24} className="invert w-auto h-auto"/>
          </Link >
          <div className='text-caption text-white flex flex-col items-end'>
            <span className='opacity-70'>Version</span>
            <span className='text-white'>2024/2025</span>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Contact