import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const title = "Une formation d'ingénieur au cœur du numérique"
gsap.registerPlugin(ScrollTrigger);

const Formation = () => {
  const containerRef = useRef(null)
  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const title = q('.title');

    const scroll = ScrollTrigger.create({
      trigger : title,
      start : 'top top',
      onEnter : () => {
        gsap.to(containerRef.current, {background : '#18181b', duration : 0.3, ease : 'power3.out'})
        gsap.to(containerRef.current, {color : '#ffffff', duration : 0.3, ease : 'power3.out'})
      },
      onLeaveBack : () => {
        gsap.to(containerRef.current, {background : '#f4f4f5', duration : 0.3, ease : 'power3.out'})
        gsap.to(containerRef.current, {color : '#18181b', duration : 0.3, ease : 'power3.out'})
      },
    })

    return () => {
      scroll.kill();
    }
  }, {scope : containerRef})
  return (
    <section ref={containerRef} className='w-full px-nav flex justify-center py-32 bg-zinc-100 text-zinc-900'>
        <div className='w-full max-w-7xl font-primary flex flex-col items-center'>
          <p className='title text-h4 font-medium max-w-xl text-balance text-center'>{title}</p>
          <div className='relative w-full h-full mt-12 max-w-5xl'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-green-400'></div>
            <div className='flex md:gap-12 items-start justify-center pt-40'>
              <div className='flex-1 h-40'>
                <div className='flex justify-start gap-8 md:justify-between md:gap-0 items-center'>
                  <span className='font-secondary font-medium text-h4'>Cycle Ingénieur</span>
                  <span className='font-primary font-light text-h4'>2012-2016</span>
                </div>
                <div className='mt-2'>
                  <span className='font-primary font-medium text-h5'>Télecom Paristech, Paris</span>
                </div>
                <div className='h-px w-full bg-zinc-200 my-4'></div>
                <p className='font-primary text-h6 leading-7 text-balance'>Formation d&apos;excellence dans le développement logiciel, l&apos;algorithmique et la fouilles des données</p>
              </div>
              <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
              <div className='md:flex-1'></div>
            </div>
            <div className='flex md:gap-12 items-start justify-center mt-[40vh]'>
              <div className='md:flex-1'></div>
              <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
              <div className='flex-1 h-40'>
                <div className='flex justify-end gap-8 md:justify-between md:gap-0 items-center'>
                  <span className='font-secondary font-medium text-h4'>CPGE</span>
                  <span className='font-primary font-light text-h4'>2010-2012</span>
                </div>
                <div className='mt-2 w-full flex justify-end md:justify-start'>
                  <span className='font-primary font-medium text-h5'>Lycée Moulay Youssef, Maroc</span>
                </div>
                <div className='h-px w-full bg-zinc-200 my-4 flex flex-col'></div>
                <p className='font-primary text-h6 leading-7 text-end md:text-start'>Filière MPSI/MP*</p>
                <p className='font-primary text-h6 leading-7 text-end md:text-start'>Specialités : mathématiques, physique/chimie, informatique</p>
              </div>
            </div>
            <div className='flex md:gap-12 items-start justify-center mt-[40vh]'>
              <div className='flex-1 h-40'>
                <div className='flex justify-start gap-8 md:justify-between md:gap-0 items-center'>
                  <span className='font-secondary font-medium text-h4'>Baccalauréat S</span>
                  <span className='font-primary font-light text-h4'>2010</span>
                </div>
                <div className='mt-2'>
                  <span className='font-primary font-medium text-h5'>Lycée Med V, Maroc</span>
                </div>
                <div className='h-px w-full bg-zinc-200 my-4'></div>
                <p className='font-primary text-h6 leading-7'>Option mathématiques et science d&apos;ingénieurs.</p>
                <p className='font-primary text-h6 leading-7 text-balance'>Obtenu avec une mention <span className='font-bold underline'>Très Bien</span></p>
              </div>
              <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
              <div className='md:flex-1'></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Formation