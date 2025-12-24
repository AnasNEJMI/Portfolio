import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';  
import Magnetic from '@/components/basic_magnetic_item';
import Link from 'next/link';
import BrandLinkButton from '@/components/brand-button';
import Profile from '../profile';

const bio = "Formé à l'école d'ingénieurs de Télécom ParisTech et avec plus de 2 ans d'expérience, je suis un développeur front end avec une solide maîtrise en HTML, CSS et TypeScript, ainsi qu'une expertise des frameworks React et Next.js."
const bioCtd = "Autonome, rigoureux et créatif, je suis constamment à la recherche de défis à relever et de nouvelles compétences à acquérir."

const HomeAbout = () => {
  let containerRef = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const bioCurtains = q('.bio-curtain');
    const bioWords = q('.bio-word');
    const bioWrapper = q('.bio-wrapper');

    const bioTl = gsap.timeline({
      scrollTrigger : {
        trigger : bioWrapper,
        start: "bottom bottom",
        end: "bottom center",
        scrub: true,
      }
    })

    bioTl
    .to(bioCurtains, {
      autoAlpha: 1,
      stagger: (1 / bioCurtains.length)*2,
      ease: "none"
    }, 0)
    .to(bioCurtains, {
      autoAlpha: 0,
      stagger: (1 / bioCurtains.length)*2,
      ease: "none"
    }, 0.8)
    .to(bioWords, {
      autoAlpha: 1,
      stagger: (1 / bioWords.length)*2,
      ease: "none"
    }, 1.5);


    

  }, {scope : containerRef});
  return (
    <section ref = {containerRef} className='section relative flex flex-col items-center justify-center z-20 mt-20 md:mt-32 lg:mt-40'>
      <div className='background bg-zinc-900 absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
        
      </div>
      <div className = "wrapper w-full max-w-5xl rounded-3xl pt-32 md:pt-40  overflow-hidden pl-nav pr-nav">
        <h2 className = "title font-secondary w-full font-black text-center text-white text-h2 drop-shadow-md text-nowrap">Qui suis-je?</h2>
          
        <div className='flex items-start justify-start flex-col lg:flex-row lg:justify-between gap-24 pt-20 md:pt-32'>
          <div className='flex flex-col gap-24 items-center w-full justify-center grow '>
            <div className='bio-wrapper w-full flex flex-wrap items-center justify-center max-w-4xl '>
              {
                bio.split(' ').map((word, index)=> (
                  <div key={index} className='relative text-white px-1 overflow-hidden'>
                    <span className='bio-curtain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-0.2rem)] h-[calc(100%-0.2rem)] rounded-lg md:rounded-2xl z-20 bg-zinc-800 opacity-0 px-2'></span>
                    <span className='bio-word relative z-10 font-primary font-medium text-h5 md:text-h4 opacity-0'>{word}</span>
                  </div>
                ))
              }
            </div>
            <div className='w-full flex flex-wrap items-center justify-center max-w-4xl'>
              {
                bioCtd.split(' ').map((word, index)=> (
                  <div key={index} className='relative text-white px-1 overflow-hidden'>
                    <div className='bio-curtain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-0.2rem)] h-[calc(100%-0.4rem)] rounded-lg md:rounded-2xl z-20 bg-zinc-800 opacity-0'></div>
                    <div className='bio-word relative z-10 font-primary font-regular text-h6 md:text-h5 opacity-0'>{word}</div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
            
        <div className='w-full h-full flex items-center justify-center pt-20 md:pt-32'>
            <BrandLinkButton title='Mon Parcours' href='/contact'/>
        </div>

        <div className='pt-40 flex items-center justify-center w-full'>
          <div className='w-full max-w-5xl h-px bg-zinc-600'></div>
        </div>
      </div>  
      <Profile/>
    </section>
  )
}

export default HomeAbout