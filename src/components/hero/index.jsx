import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {throttle} from 'lodash';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../basic_magnetic_item';

const salutations = ['Bonjour', 'こんにちは', 'नमस्कार',  '你好', 'أهلاً','Olá', 'Guten Tag','Hola', 'Hello',  "Bonjour"];

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP((_, contextSafe) => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const onMouseMove = contextSafe((e) => {
                const { clientX, clientY } = e
                const x = Math.round(clientX)
                const y = Math.round(clientY + window.scrollY)
                
                // console.log(`coordinates : ${x}%, ${y}%`);
                gsap.to(".masked-hero", {
                '--mh-x': `${x}px`,
                '--mh-y': `${y}px`,
                duration: 0.3,
                ease: 'sine.out',})
            });
    
            const onMouseEnter = contextSafe((e) => {
                gsap.to(".masked-hero", {
                '--mh-size': '180px',
                '--mh-size-fade-start': '200px',
                '--mh-size-fade-end': '210px',
                duration: 0.3,
                ease: 'sine.out',})
            });
    
            const onMouseLeave = contextSafe((e) => {
                gsap.to(".masked-hero", {
                '--mh-size': '4px',
                '--mh-size-fade-start': '4px',
                '--mh-size-fade-end': '4px',
                duration: 0.3,
                ease: 'sine.out',})
            });

            const onMouseEnterContainer = contextSafe((e) => {
                gsap.to(".masked-hero", {
                    '--mh-size': '4px',
                    '--mh-size-fade-start': '4px',
                    '--mh-size-fade-end': '4px',
                    duration: 0.3,
                    ease: 'sine.out',})
            });
    
            const onMouseLeaveContainer = contextSafe((e) => {
                gsap.to(".masked-hero", {
                '--mh-size': '0px',
                '--mh-size-fade-start': '0px',
                '--mh-size-fade-end': '0px',
                duration: 0.3,
                ease: 'sine.out',})
            });
    
            let headingElement = containerRef.current.querySelector(".heading");
            headingElement.addEventListener('mouseenter', onMouseEnter);
            headingElement.addEventListener('mouseleave', onMouseLeave);

            containerRef.current.addEventListener('mousemove', throttle(onMouseMove, 16))
            containerRef.current.addEventListener('mouseenter', onMouseEnterContainer);
            containerRef.current.addEventListener('mouseleave', onMouseLeaveContainer);


            return () => {
                containerRef.current.removeEventListener('mousemove', onMouseMove);
                containerRef.current.removeEventListener('mouseenter', onMouseEnterContainer);
                containerRef.current.removeEventListener('mouseleave', onMouseEnterContainer);
                headingElement.removeEventListener('mouseenter', onMouseEnter);
                headingElement.removeEventListener('mouseleave', onMouseLeave);
            }
        });

        const salutationYSetter = gsap.quickSetter(".salutations", "yPercent");

        let salutationsTl = gsap.timeline({repeat: Infinity, delay : 4, repeatDelay : 1.5});

        for (let i = 1; i < salutations.length ; i++) {
            if(i < salutations.length - 1){
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out"}, (i === 1  )? "" : "<+=1.5");
            }else{
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out", onComplete : () => {salutationYSetter(0)}}, "<+=1.5");
            }
        }

        
        const designerTranslateX = gsap.quickSetter(".designer", "xPercent");
        const developerTranslateX = gsap.quickSetter(".developer", "xPercent");

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            ease : "power3.out",
            onUpdate : (self) => {
                console.log(self.progress);
                designerTranslateX(self.progress * 150);
                developerTranslateX(-self.progress * 100);
            }   
        });
        
        return () => {
            mm.revert();
        }

    }, {scope: containerRef});

  return (
    <section ref = {containerRef} className='section relative z-10 h-svh-screen pt-[144px] left- 0 w-full flex items-center justfy-stretch flex-col overflow-hidden'>
        <div className = "flex flex-col items-center w-full lg:items-start pl-0 lg:pl-24 pt-[calc(var(--padding-nav))] relative z-30">
            <div className='origin-bottom relative overflow-hidden h-full px-4 md:px-0 text-h6 font-medium'>
                <p className='opacity-0 pointer-events-none h-10 w-28'>こんにちは</p>
                <div className='salutations flex absolute bottom-0 left-0 z-0 items-center md:items-start justify-start flex-col  px-4 md:px-0'>
                    {
                        salutations.map((salutation, index) => (
                        <p key={`salutation-${index}`} className='h-10 font-primary font-normal w-28 text-center md:text-start'>{salutation}</p>
                        ))
                    }
                </div>
            </div>
            <p className = "font-primary"><span className = "font-primary font-normal text-h6">Je m&apos;appelle</span> <span className = "ml-2 font-primary font-medium text-h6 px-4 py-1 rounded-md border border-zinc-800 border-opacity-50 bg-white relative">Anas<span className ="absolute -z-10 rounded-md top-0 left-0 -translate-x-1 translate-y-1 w-full h-full bg-black"></span></span></p>
        </div>

        <h1 className= "heading flex flex-col h-full items-center justify-center leading-tight font-black z-20 select-none">
             {/* <span className = "designer text-white relative">Designer<span className='absolute top-0 left-0 w-full h-full text-stroke-black  text-white -z-10'>Designer</span></span> */}
             <span className = "designer font-secondary text-h1">Designer</span>
            <span className = "developer font-secondary  text-h1">Développeur</span>
        </h1>

        <div className= "w-full relative z-30">
            <div className = "flex flex-col items-center text-body md:text-h6 font-bold px-nav relative z-10">
              <p className = "font-primary font-medium">Je transforme vos <span>idées</span> en sites web</p>
              <p>
                <span className = "relative text-black font-primary font-black text-h6">élégants</span> <span className  = "text-body font-normal">,</span>
                &nbsp;
                <span className = "relative text-black font-primary font-black text-h6">fonctionnels</span><span className  = "text-body font-normal"> et</span>
                &nbsp;
                <span className = "relative text-black font-primary font-black text-h6">performants</span>
              </p>
            </div>

            <div className = "w-full flex items-end justify-between p-nav relative mt-[calc(var(--padding-nav)*.8)] lg:mt-[calc(var(--padding-nav)*2)]">
                <Link href = "/contact" className = "hidden items-center justify-center relative lg:flex group px-4">
                    <div className = " h-16 w-16 ml-4 border border-zinc-800 absolute top-0 left-0 origin-right rounded-full group-hover:w-full transition-all duration-300 flex items-center justify-center overflow-hidden bg-white  z-10">
                        <div className='absolute top-0 left-0 w-full h-full rounded-full -translate-x-full delay-75 group-hover:translate-x-0 transition-all duration-300 -z-10 bg-black'></div>
                        <span className = "font-primary text-body font-normal px-4 text-nowrap text-white -translate-x-full delay-150 group-hover:translate-x-0 transition-all duration-300">Me Contacter</span>
                    </div>
                    <div className = "rounded-full h-16 w-16 group-hover:scale-0 origin-center transition-all duration-200 relative z-20 ">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" >
                            <path d="M20 51H62q11 6-2 19Q73 57 90 50 73 44 60 30q13 14 2 19H20Z" fill = 'black' className = "">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    values="-20 0;0 0; -20 0"
                                    to="0 0"
                                    dur="1s"
                                    keySplines="0.26 0 0.74 1; 0.26 0 0.74 1"
                                    calcMode="spline"
                                    repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
                    <span className='font-primary text-body font-normal px-4'>Me Contacter</span>
                </Link>
                <div className='rounded-full w-28 h-28 relative flex items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 overflow-y-visible'>
                    <Magnetic>
                        <svg width="100" height="100" viewBox="0 0 100 100" className='w-full h-full'>
                            <defs>
                                <clipPath id="clipping-circle">
                                    <circle cx="50" cy="50" r="50" className='origin-center scale-50'/>
                                </clipPath>
                                <path
                                    id="rotating-circle"
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                    />
                            </defs>

                            {/* Black circle */}
                            <circle cx="50" cy="50" r="50" fill="black" className='origin-center scale-50'/>

                            {/* White text outside the circle */}
                            <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="14"
                            fontWeight="bold"
                            fill="black"
                            className='animate-rotate animate-duration-4000 origin-center font-primary font-light'
                            >
                                <textPath href="#rotating-circle" startOffset="3%">
                                    Scroll
                                </textPath>

                                <textPath href="#rotating-circle" startOffset="75%">
                                    Scroll
                                </textPath>
                            </text>

                            {/* White text inside the circle */}
                            {/* <text
                            x="50"
                            y="50"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="16"
                            fontWeight="bold"
                            fill="white"
                            clipPath="url(#clipping-circle)"
                            className='animate-rotate animate-duration-4000 origin-center'
                            >
                                <textPath href="#rotating-circle" startOffset="3%">
                                    Scroll
                                </textPath>

                                <textPath href="#rotating-circle" startOffset="75%">
                                    Scroll
                                </textPath>
                            </text> */}
                        </svg>
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className='absolute top-0 left-0 origin-center rotate-90 scale-50'>
                            <path d="M60 50q0 6-15 15L75 50 45 35Q60 45 60 50" fill = 'white' className = "">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    values="-20 0;0 0; -20 0"
                                    to="0 0"
                                    dur="1s"
                                    keySplines="0.26 0 0.74 1; 0.26 0 0.74 1"
                                    calcMode="spline"
                                    repeatCount="indefinite" />
                            </path>
                        </svg>
                    </Magnetic>
                </div>
                <div className='relative'>
                    <h2 className='absolute flex items-start justify-start flex-col h-full w-full mix-blend-difference text-jet-200 -left-[25%] top-[0%] md:-left-[25%] md:top-0 lg:-left-[20%] lg:top-[3%]'>
                    <span className='font-primary font-bold text-body md:text-h6 text-nowrap animate-left-to-right animate-duration-4000'>Basé à</span>
                    <span className='font-primary text-body md:text-h6 animate-left-to-right animate-duration-4000 -animate-delay-1000'>Paris</span>
                    </h2>
                    <svg className='h-20 md:h-24 lg:h-28 aspect-square z-0' viewBox='0 0 100 100'>
                        <g stroke = "rgb(22,22,22)" className='animate-squish-squash animate-duration-2000 origin-bottom'>
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

                        <path className='animate-left-to-right animate-duration-4000' d='M12 29 L28 29 Q30 29 30 30 Q30 31 28 31 L12 31 Q10 31 10 30 Q10 29 12 29'></path>
                        <path className='animate-left-to-right animate-duration-3000 -animate-delay-500' d='M62 9 L83 9 Q85 9 85 10 Q85 11 83 11 L62 11 Q60 11 60 10 Q60 9 62 9'></path>
                        <path className='animate-left-to-right animate-duration-3000 -animate-delay-1000' d='M72 49 L78 49 Q80 49 80 50 Q80 51 78 51 L72 51 Q70 51 70 50 Q70 49 72 49'></path>
                    </svg>
                </div>
            </div>
        </div>

        <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] opacity-20 aspect-square rotate-45 z-[6] absolute grid grid-cols-10 grid-rows-10 pointer-events-none'>
            {[...Array(100)].map((cell, index) => (
            <div key={`cell_${index}`} className='border border-black border-opacity-20'>
            </div>
            ))}
        </div>

        <div className = "masked-hero pt-[144px] hidden md:flex absolute top-0 left-0 w-full h-full items-center justfy-stretch flex-col bg-black z-50 pointer-events-none">
            <div className = "flex flex-col items-center w-full lg:items-start pl-0 lg:pl-24 pt-[calc(var(--padding-nav))] relative z-30 pointer-events-none">
                <div className='origin-bottom relative overflow-hidden h-full px-4 md:px-0 text-h6 font-medium'>
                    <p className='opacity-0 pointer-events-none h-8 w-28'>こんにちは</p>
                </div>
                <p aria-hidden="true"><span>Je suis</span> <span className = "ml-2 font-bold text-h6 px-4 py-1 rounded-xl border border-zinc-800 border-opacity-50 bg-white relative">Anas NEJMI <span className ="absolute -z-10 rounded-xl top-0 left-0 -translate-x-1 translate-y-1 w-full h-full bg-black"></span></span></p>
            </div>

            <div className= "font-secondary flex flex-col h-full items-center justify-center text-h1 font-black leading-tight z-20 text-white pointer-events-none">
                <h1>Passionné</h1>
                <h1>Authentique</h1>
            </div>

            <div className= "w-full relative z-30 pointer-events-none opacity-0" area-hidden="true">
                <div className = "flex flex-col items-center text-body md:text-h6 font-bold px-nav relative z-10">
                    <p className = "font-primary font-medium">Je transforme vos <span>idées</span> en sites web</p>
                    <p>
                        <span className = "relative text-black font-primary font-black text-h6">élégants</span> <span className  = "text-body font-normal">,</span>
                        &nbsp;
                        <span className = "relative text-black font-primary font-black text-h6">fonctionnels</span><span className  = "text-body font-normal"> et</span>
                        &nbsp;
                        <span className = "relative text-black font-primary font-black text-h6">performants</span>
                    </p>
                </div>

                <div className = "w-full flex items-end justify-between p-nav relative mt-[calc(var(--padding-nav)*.8)] lg:mt-[calc(var(--padding-nav)*2)]">
                    <Link href = "/contact" className = "hidden items-center justify-center relative lg:flex group px-4">
                        <div className = " h-16 w-16 ml-4 border border-zinc-800 absolute top-0 left-0 origin-right rounded-full group-hover:w-full transition-all duration-300 flex items-center justify-center overflow-hidden bg-white  z-10">
                            <div className='absolute top-0 left-0 w-full h-full rounded-full -translate-x-full delay-75 group-hover:translate-x-0 transition-all duration-300 -z-10 bg-black'></div>
                            <span className = "font-primary text-body font-normal px-4 text-nowrap text-white -translate-x-full delay-150 group-hover:translate-x-0 transition-all duration-300">Me Contacter</span>
                        </div>
                        <div className = "rounded-full h-16 w-16 group-hover:scale-0 origin-center transition-all duration-200 relative z-20 ">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" >
                                <path d="M20 51H62q11 6-2 19Q73 57 90 50 73 44 60 30q13 14 2 19H20Z" fill = 'black' className = "">
                                    <animateTransform
                                        attributeName="transform"
                                        attributeType="XML"
                                        type="translate"
                                        values="-20 0;0 0; -20 0"
                                        to="0 0"
                                        dur="1s"
                                        keySplines="0.26 0 0.74 1; 0.26 0 0.74 1"
                                        calcMode="spline"
                                        repeatCount="indefinite" />
                                </path>
                            </svg>
                        </div>
                        <span className='font-primary text-body font-normal px-4'>Me Contacter</span>
                    </Link>
                    <div className='rounded-full w-28 h-28 relative flex items-center justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 overflow-y-visible'>
                        <Magnetic>
                            <svg width="100" height="100" viewBox="0 0 100 100" className='w-full h-full'>
                                <defs>
                                    <clipPath id="clipping-circle">
                                        <circle cx="50" cy="50" r="50" className='origin-center scale-50'/>
                                    </clipPath>
                                    <path
                                        id="rotating-circle"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        />
                                </defs>

                                {/* Black circle */}
                                <circle cx="50" cy="50" r="50" fill="black" className='origin-center scale-50'/>

                                {/* White text outside the circle */}
                                <text
                                x="50"
                                y="50"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="14"
                                fontWeight="bold"
                                fill="black"
                                className='animate-rotate animate-duration-4000 origin-center font-primary font-light'
                                >
                                    <textPath href="#rotating-circle" startOffset="3%">
                                        Scroll
                                    </textPath>

                                    <textPath href="#rotating-circle" startOffset="75%">
                                        Scroll
                                    </textPath>
                                </text>

                                {/* White text inside the circle */}
                                {/* <text
                                x="50"
                                y="50"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="16"
                                fontWeight="bold"
                                fill="white"
                                clipPath="url(#clipping-circle)"
                                className='animate-rotate animate-duration-4000 origin-center'
                                >
                                    <textPath href="#rotating-circle" startOffset="3%">
                                        Scroll
                                    </textPath>

                                    <textPath href="#rotating-circle" startOffset="75%">
                                        Scroll
                                    </textPath>
                                </text> */}
                            </svg>
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className='absolute top-0 left-0 origin-center rotate-90 scale-50'>
                                <path d="M60 50q0 6-15 15L75 50 45 35Q60 45 60 50" fill = 'white' className = "">
                                    <animateTransform
                                        attributeName="transform"
                                        attributeType="XML"
                                        type="translate"
                                        values="-20 0;0 0; -20 0"
                                        to="0 0"
                                        dur="1s"
                                        keySplines="0.26 0 0.74 1; 0.26 0 0.74 1"
                                        calcMode="spline"
                                        repeatCount="indefinite" />
                                </path>
                            </svg>
                        </Magnetic>
                    </div>
                    <div className='relative'>
                        <h2 className='absolute flex items-start justify-start flex-col h-full w-full mix-blend-difference text-jet-200 -left-[25%] top-[0%] md:-left-[25%] md:top-0 lg:-left-[20%] lg:top-[3%]'>
                        <span className='font-primary font-bold text-body md:text-h6 text-nowrap'>Basé à</span>
                        <span className='font-primary text-body md:text-h6'>Paris</span>
                        </h2>
                        <svg className='h-20 md:h-24 lg:h-28 aspect-square z-0' viewBox='0 0 100 100'>
                            <g stroke = "rgb(22,22,22)" className=' origin-bottom'>
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

                            <path d='M12 29 L28 29 Q30 29 30 30 Q30 31 28 31 L12 31 Q10 31 10 30 Q10 29 12 29'></path>
                            <path d='M62 9 L83 9 Q85 9 85 10 Q85 11 83 11 L62 11 Q60 11 60 10 Q60 9 62 9'></path>
                            <path d='M72 49 L78 49 Q80 49 80 50 Q80 51 78 51 L72 51 Q70 51 70 50 Q70 49 72 49'></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] aspect-square rotate-45 z-[5] absolute grid grid-cols-10 grid-rows-10 pointer-events-none'>
                {[...Array(100)].map((cell, index) => (
                <div key={`cell_${index}`} className='mix-blend-difference flex'>
                    <span style={{clipPath : 'url(#starClipPath)'}} className='rounded-full h-2 w-2 -translate-x-1 -translate-y-1 bg-white mix-blend-difference'></span>
                </div>
                ))}
            </div>
            <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] opacity-20 aspect-square rotate-45 z-[6] absolute grid grid-cols-10 grid-rows-10 pointer-events-none'>
                {[...Array(100)].map((cell, index) => (
                <div key={`cell_${index}`} className='border border-opacity-20'>
                </div>
                ))}
            </div>
            <svg width={500} height={500} className='w-0 h-0 pointer-events-none'>
              <defs>
                <clipPath id = "starClipPath" clipPathUnits="objectBoundingBox" >
                  <path d='M1 0 Q0.5 0.5 1 1 Q0.5 0.5 0 1 Q0.5 0.5 0 0 Q 0.5 0.5 1 0'></path>
                </clipPath>
              </defs>
            </svg>
        </div>
    </section>
  )
}

export default Hero