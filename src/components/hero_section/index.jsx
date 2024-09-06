import { useGSAP } from '@gsap/react';
import gsap, { ScrollTrigger } from 'gsap/all';
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const designer = "Designer";
const passione = "Passioné";
const developpeur = "Développeur";
const authentique = "Authentique";

const HeroSection = () => {
  const containerRef = useRef(null);
  const grainyCircleRef = useRef(null);
  const designerRef = useRef(null);
  const developpeurRef = useRef(null);

  useGSAP((context, contextSafe) => {
    let grainyCircleElement = containerRef.current.querySelector(".grainy-circle");
    console.log(grainyCircleElement);
    let designerElement = document.getElementById("designer");
    let developpeurElement = document.getElementById("developpeur");

    const posX = gsap.quickTo(grainyCircleElement, 'x', {duration : 0.7, ease :"expo.out"})
    const posY = gsap.quickTo(grainyCircleElement, 'y', {duration : 0.7, ease :"expo.out"})
    const scaleX = gsap.quickTo(grainyCircleElement, 'scaleX', {duration : 0.5, ease :"expo.out"})
    const scaleY = gsap.quickTo(grainyCircleElement, 'scaleY', {duration : 0.5, ease :"expo.out"})
    const opacity = gsap.quickTo(grainyCircleElement, 'opacity', {duration : 0.5, ease :"expo.out"})


    const onMouseMove = contextSafe((e) => {
      const {clientX, clientY} = e;
        posX(clientX - 600/2);
        posY(clientY - 600/2);
    })

    const onMouseEnter = contextSafe(() => {
      scaleX(1);
      scaleY(1);
    })

    const onMouseLeave = contextSafe(() => {
      scaleX(0.05);
      scaleY(0.05);
    })

    const onContainerMouseEnter = contextSafe(() => {
      opacity(1);
    })

    const onContainerMouseLeave = contextSafe(() => {
      opacity(0);
    })

    containerRef.current?.addEventListener('mousemove', onMouseMove);
    containerRef.current?.addEventListener('mouseenter', onContainerMouseEnter);
    containerRef.current?.addEventListener('mouseleave', onContainerMouseLeave);

    designerRef.current?.addEventListener('mouseenter', onMouseEnter);
    designerRef.current?.addEventListener('mouseleave', onMouseLeave);

    developpeurRef.current?.addEventListener('mouseenter', onMouseEnter);
    developpeurRef.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      containerRef.current?.removeEventListener('mousemove', onMouseMove);
      containerRef.current?.removeEventListener('mouseenter', onContainerMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', onContainerMouseLeave);

      designerRef.current?.removeEventListener('mouseenter', onMouseEnter);
      designerRef.current?.removeEventListener('mouseleave', onMouseLeave);

      developpeurRef.current?.removeEventListener('mouseenter', onMouseEnter);
      developpeurRef.current?.removeEventListener('mouseleave', onMouseLeave);
    }
  }, {scope : containerRef});

  // useLayoutEffect(() => {
  //   const context = gsap.context((self) => {
  //     const posX = gsap.quickTo(grainyCircleRef.current, 'x', {duration : 0.7, ease :"expo.out"})
  //     const posY = gsap.quickTo(grainyCircleRef.current, 'y', {duration : 0.7, ease :"expo.out"})
  //     const scaleX = gsap.quickTo(grainyCircleRef.current, 'scaleX', {duration : 0.5, ease :"expo.out"})
  //     const scaleY = gsap.quickTo(grainyCircleRef.current, 'scaleY', {duration : 0.5, ease :"expo.out"})
  //     const opacity = gsap.quickTo(grainyCircleRef.current, 'opacity', {duration : 0.5, ease :"expo.out"})

  //     const onMouseMove = (e) => {
  //       const {clientX, clientY} = e;
  //       posX(clientX - 500/2);
  //       posY(clientY - 500/2);
  //     }
  //     const onMouseEnter = (e) => {
  //       scaleX(1);
  //       scaleY(1);
  //     }
  //     const onMouseLeave = (e) => {
  //       scaleX(0.05);
  //       scaleY(0.05);
  //     }

  //     const onContainerMouseEnter = (e) => {
  //       opacity(1);
  //     }
  //     const onContainerMouseLeave = (e) => {
  //       opacity(0);
  //     }

  //     self.add('onMouseMove', onMouseMove);
  //     self.add('onMouseEnter', onMouseEnter);
  //     self.add('onMouseLeave', onMouseLeave);
  //     self.add('onContainerMouseEnter', onContainerMouseEnter);
  //     self.add('onContainerMouseLeave', onContainerMouseLeave);

  //     const headingTl = gsap.timeline();
  //     headingTl.fromTo(salutationsRef.current, {y : 100}, {y : -50, duration : .8, ease : "power3.out"}, 0)
  //     headingTl.fromTo(headingContainerRef.current, {y : 200}, {y : 0, duration : .8, ease : "power3.out"}, "<+=.05")
  //     headingTl.fromTo(locationRef.current, {y : 300}, {y : 0, duration : .8, ease : "power3.out"}, "<+=.1")

  //     const salutationsY = gsap.quickTo(salutationsRef.current, 'y')
  //     const headingContainerY = gsap.quickTo(headingContainerRef.current, 'y')
  //     const locationY = gsap.quickTo(locationRef.current, 'y')

  //     const graphisteX = gsap.quickTo(graphisteRef.current, 'x')
  //     const developpeurX = gsap.quickTo(developpeurRef.current, 'x')

  //   })

  //   containerRef.current?.addEventListener('mousemove', context.onMouseMove);
  //   containerRef.current?.addEventListener('mouseenter', context.onContainerMouseEnter);
  //   containerRef.current?.addEventListener('mouseleave', context.onContainerMouseLeave);

  //   designerRef.current?.addEventListener('mouseenter', context.onMouseEnter);
  //   designerRef.current?.addEventListener('mouseleave', context.onMouseLeave);
    
  //   graphisteRef.current?.addEventListener('mouseenter', context.onMouseEnter);
  //   graphisteRef.current?.addEventListener('mouseleave', context.onMouseLeave);

  //   developpeurRef.current?.addEventListener('mouseenter', context.onMouseEnter);
  //   developpeurRef.current?.addEventListener('mouseleave', context.onMouseLeave);
  //   return () => {
  //     context.revert();
  //     containerRef.current?.removeEventListener('mousemove', context.onMouseMove);

  //     designerRef.current?.removeEventListener('mouseenter', context.onMouseEnter);
  //     designerRef.current?.removeEventListener('mouseleave', context.onMouseLeave);

  //     graphisteRef.current?.removeEventListener('mouseenter', context.onMouseEnter);
  //     graphisteRef.current?.removeEventListener('mouseleave', context.onMouseLeave);

  //     developpeurRef.current?.removeEventListener('mouseenter', context.onMouseEnter);
  //     developpeurRef.current?.removeEventListener('mouseleave', context.onMouseLeave);
  //   }
  // }, [])
  return (
    <section ref = {containerRef} className = "section w-full fixed top-0 left-0 h-svh-screen flex items-center justify-stretch flex-col ">
        <div className  = "w-full h-full relative overflow-hidden bg-[#fcfaf8]">
          <div className = "flex flex-col items-center lg:items-start pl-0 lg:pl-24 pt-[calc(var(--padding-nav)*6)] relative z-30">
            <div>Hi !</div>
            <div className = "flex gap-2 mt-2"><span>Je suis</span> <h2>Anas NEJMI</h2></div>
          </div>
          
          <div className = "flex justify-between w-full absolute z-30 pointer-events-none mix-blend-multiply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full min-w-[800px] gap-12 p-5" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="99" height="99" viewBox="0 0 99 99" className = "flex-1 h-full aspect-square overflow-visible -translate-y-1/3 md:translate-y-0">
              <defs>
                <filter id="blur-filter">
                  <feGaussianBlur in="SourceGraphic" stdDeviation={1} />
                </filter>
                <linearGradient id="a-linear-gradient" x1="48.359" y1="99" x2="50.641" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#58cc02"/>
                  <stop offset="0.552" stopColor="#aae77d" stopOpacity={0}/>
                  <stop offset="0.791" stopColor="#aae77d" stopOpacity="0"/>
                  <stop offset="1" stopColor="#aae77d" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path filter='url(#blur-filter)' fill ={`url(#a-linear-gradient)`} d="M0.917,86.742C-6.451,81.011,32.066-5.9,65.317.319,97.289,6.3,105.25,94.8,94.469,98.858c-6.817,2.569-18.949-30.2-44.078-33.387C25.382,62.3,5.368,90.2.917,86.742Z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="99" height="99" viewBox="0 0 99 99" className = "flex-1 h-full aspect-square overflow-visible translate-y-1/3 md:translate-y-0">
              <defs>
                <linearGradient id="n-linear-gradient" x1="75.29" x2="23.71" y2="99" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#58cc02"/>
                  <stop offset="0.572" stopColor="#aae77d" stopOpacity={0}/>
                  <stop offset="0.786" stopColor="#aae77d" stopOpacity="0"/>
                  <stop offset="1" stopColor="#aae77d" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path filter = 'url(#blur-filter)' fill ={`url(#n-linear-gradient)`} d="M1,81.783C-4.17,80.207,11.605-.625,27.258,0,40.292,0.52,42.547,57.1,60.616,59.1c17.212,1.9,32.12-47.723,36.991-46.189,6.237,1.964-9.4,86.033-28.475,86.087C54.14,99.043,48,47.181,29.735,46.686,14.452,46.272,4.515,82.853,1,81.783Z"/>
            </svg>

          </div>
        </div>
        <div className = "absolute top-0 left-0 w-full h-svh-screen overflow-hidden flex bg-[#fcfaf8] flex-col items-center justify-center text-h1 font-black leading-tight mt-[calc(var(--padding-nav)*0.6)] lg:mt-0 z-20">
            {/* <h1>Designer</h1>
            <h1>Développeur</h1> */}

            <div className='flex items-center justify-center flex-col relative z-[7] mix-blend-difference'>
              <h1 ref = {designerRef} className='text-h1 flex pointer-events-auto '>
                  {
                      designer.split('').map((char, index) => (
                      <span key={`des-${index}`} className='group relative z-10 text-[#fcfaf8] font-black transition-all duration-[1000ms] ease-out hover:font-black hover:px-2 delay-100'>
                      {char}
                      <span className='hidden md:block absolute top-0 left-0 font-black transition-all duration-[1000ms] ease-out group-hover:font-[900] text-primary-regular -z-10 group-hover:px-3 mix-blend-overlay'>{char}</span>
                      </span>))
                  }
              </h1>
              <h1 ref = {developpeurRef} className='text-h1 flex gap-0 mx-auto'>
                  {
                      developpeur.split('').map((char, index) => (
                      <span key={`des-${index}`} className='group relative z-10 text-white font-extrabold transition-all duration-[1000ms] ease-out hover:font-black hover:px-3 delay-100'>
                      {char}
                      <span className='hidden md:block absolute top-0 left-0 font-[550] transition-all duration-[1000ms] ease-out group-hover:font-[900] text-black -z-10 group-hover:px-3 mix-blend-difference'>{authentique.split('')[index]}</span>
                      </span>))
                  }
              </h1>
            </div>

            <div style={{boxShadow : 'inset 0px 0px 10px 100px black',  background : `radial-gradient(circle at 50% 50%, rgba(255, 254, 248, 1) 0%, rgba(255, 254, 248, 1) 29%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0) 58%, rgba(0, 0, 0, 1) 65%), url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, objectFit : 'cover', clipPath : 'circle(191px at center)'}} className='grainy-circle w-[500px] h-[500px] scale-0 fixed top-0 left-0 bottom-0 z-[5] hidden md:block rounded-full origin-center mix-blend-difference overflow-hidden'></div>
            {/* <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] opacity-20 aspect-square rotate-45 z-[6] absolute grid grid-cols-10 grid-rows-10 pointer-events-none'>
                {[...Array(100)].map((cell, index) => (
                <div key={`cell_${index}`} className='border border-opacity-20 border-jet-900 mix-blend-difference flex '>
                </div>
                ))}
            </div>

            <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] aspect-square rotate-45 z-[5] absolute grid grid-cols-10 grid-rows-10 pointer-events-none'>
                {[...Array(100)].map((cell, index) => (
                <div key={`cell_${index}`} className='mix-blend-difference flex'>
                    <span style={{clipPath : 'url(#starClipPath)'}} className='rounded-full h-2 w-2 -translate-x-1 -translate-y-1 bg-[#fcfaf8] mix-blend-difference'></span>
                </div>
                ))}
            </div> */}

            <svg width={500} height={500} className='w-0 h-0'>
              <defs>
                <clipPath id = "starClipPath" clipPathUnits="objectBoundingBox" >
                  <path d='M1 0 Q0.5 0.5 1 1 Q0.5 0.5 0 1 Q0.5 0.5 0 0 Q 0.5 0.5 1 0'></path>
                </clipPath>
              </defs>
            </svg>
        </div>
        <div className = "w-full relative z-30 pointer-events-none">
          <div className = "flex flex-col items-center text-body md:text-h6 font-bold p-nav relative z-10">
              <p>Je transforme vos <span>idées</span> en sites web</p>
              <p>
                <span className = "relative">élégants <span className = "absolute top-0 left-0 -translate-y-1 text-stroke-black stroke-slate-800 text-white">élégants</span></span> ,
                &nbsp;
                <span className = "relative">fonctionnels <span className = "absolute top-0 left-0 -translate-y-1 text-stroke-black stroke-slate-800 text-white">fonctionnels</span></span> et
                &nbsp;
                <span className = "relative">performants <span className = "absolute top-0 left-0 -translate-y-1 text-stroke-black stroke-slate-800 text-white">performants</span></span>
              </p>
            </div>
          <div className = "w-full flex items-center justify-between p-nav relative">
            <Link href = "/contact" className = "hidden items-center justify-center relative lg:flex">
              <div className = " h-12 w-12 border border-zinc-800 absolute top-0 left-0 origin-right rounded-full"></div>
              <div className = "rounded-full h-12 w-12">
              </div>
              <span className='text-body font-bold px-4'>Me Contacter</span>
            </Link>
            <div className = "rounded-full w-20 h-20 border-zinc-800 border relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"></div>
            <div className='relative'>
                <h2 className='absolute flex items-start justify-start flex-col h-full w-full mix-blend-difference text-jet-200 -left-[25%] top-[0%] md:-left-[25%] md:top-0 lg:-left-[20%] lg:top-[3%]'>
                  <span className=' font-bold text-body md:text-h6 text-nowrap'>Basé à</span>
                  <span className='text-body md:text-h6 '>Paris</span>
                </h2>
                <svg className='h-20 md:h-24 lg:h-28 aspect-square z-0' viewBox='0 0 100 100'>

                <g stroke = "rgb(22,22,22)" className=' animate-squish-squash origin-bottom'>
                    <g>
                    <path d='M47 10 Q47 4 50 4 Q53 4 53 10 L47 10' fill='transparent'></path>
                    <rect x={49} y={0} width={2} height={4} rx={1} ry={1} fill='transparent'></rect>
                    </g>
                    <path d='M20 96 Q49 60 48 10 L52 10 Q52 60 80 96 L65 96 Q65 80 50 80 Q35 80 35 96 L20 96' fill='transparent'></path>
                    <path d='M33 66 L67 66 L64 70 L36 70 L33 66' fill='transparent'></path>
                    <path d='M40 46 L60 46 L57 50 L43 50 L40 46' fill='transparent'></path>
                    <path d='M44 66 Q47 56 47 55 L53 55 Q53 56 56 66' fill='transparent'></path>
                    <path d='M66 90 Q64 78 50 78 Q36 78 34 90' fill='transparent'></path>
                </g>
                
                <path d='M10 96 L90 96 Q95 96 95 98 Q95 100 90 100 L10 100 Q5 100 5 98 Q5 96 10 96' fill='black'></path>

                <path className='animate-left-to-right animate-delay-100' d='M12 29 L28 29 Q30 29 30 30 Q30 31 28 31 L12 31 Q10 31 10 30 Q10 29 12 29'></path>
                <path className='animate-left-to-right' d='M62 9 L83 9 Q85 9 85 10 Q85 11 83 11 L62 11 Q60 11 60 10 Q60 9 62 9'></path>
                <path className='animate-left-to-right animate-delay-300' d='M72 49 L78 49 Q80 49 80 50 Q80 51 78 51 L72 51 Q70 51 70 50 Q70 49 72 49'></path>
                </svg>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection