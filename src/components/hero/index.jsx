import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {throttle} from 'lodash';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from '../basic_magnetic_item';
import ParisSVG from '../paris-svg/index'

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

            const devTranslateY = gsap.quickSetter(".dev", "yPercent");
            const fullStackTranslateY = gsap.quickSetter(".full-stack", "yPercent");
            const passionedTranslateY = gsap.quickSetter(".passioned", "yPercent");
            const authenticTranslateY = gsap.quickSetter(".authentic", "yPercent");
            const rigorousTranslateY = gsap.quickSetter(".rigorous", "yPercent");
            const parisSVGTranslateY = gsap.quickSetter(".paris-svg", "yPercent");
            const maskRevealBtnTranslateY = gsap.quickSetter(".mask-reveal-btn", "yPercent");
    
    
            devTranslateY(0);
            fullStackTranslateY(0);
            passionedTranslateY(0);
            authenticTranslateY(0);
            rigorousTranslateY(0);
            parisSVGTranslateY(0);
            maskRevealBtnTranslateY(0);
    
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                ease : "power3.out",
                onUpdate : (self) => {
                    console.log(self.progress);
                    devTranslateY(self.progress * 120);
                    fullStackTranslateY(self.progress * 120);
                    passionedTranslateY(self.progress * 500);
                    authenticTranslateY(self.progress * 500);
                    rigorousTranslateY (self.progress * 500);
                    parisSVGTranslateY (self.progress *200);
                    maskRevealBtnTranslateY(self.progress *200)
                }   
            });

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

        
        
        return () => {
            mm.revert();
            salutationsTl.revert();
        }

    }, {scope: containerRef});

  return (
    <section ref = {containerRef} className='section relative z-10 h-svh-screen pt-[144px] w-full flex items-center justify-between flex-col overflow-hidden'>
        <div className='absolute top-0 left-0 h-screen w-full flex items-center justify-center'>
            <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] opacity-20 aspect-square rotate-45 z-[6]  grid grid-cols-10 grid-rows-10 pointer-events-none md:translate-y-0 translate-y-1/4'>
                {[...Array(100)].map((_, index) => (
                <div key={`cell_${index}`} className='border border-black border-opacity-20'>
                </div>
                ))}
            </div>
        </div>
        <div className = "flex flex-col items-center w-full max-w-7xl lg:items-start pl-0 lg:pl-24 pt-[calc(var(--padding-nav))] relative z-30">
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

        <div className='lg:pt-20'>
            <h1 className= "heading flex flex-col items-center justify-center leading-tight font-black z-20 select-none">
                <span className = "dev font-secondary text-h1">Développeur</span>
                <span className = "full-stack font-secondary  text-h1">Full-Stack</span>
            </h1>

            <div className= "w-full relative z-30 mt-8">
                <div className = "flex flex-col items-center text-body md:text-h6 font-bold px-nav relative z-10">
                {/* <p className = "font-primary font-medium">Je transforme vos <span>idées</span> en sites web</p> */}
                <p className='text-pretty flex items-center justify-center gap-4'>
                    <span className = "passioned text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Passionné</span>
                    <span className = "authentic text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Authentique</span>
                    <span className = "rigorous text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Rigoureux</span>
                </p>
                </div>
            </div>
        </div>
        <div className = "w-full flex items-center justify-between max-w-7xl p-nav relative mt-[calc(var(--padding-nav)*.8)] lg:mt-[calc(var(--padding-nav)*2)]">
            <div className='mask-reveal-btn w-20 h-20 md:h-28 md:w-28 rounded-full '>
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
                        fontSize="12"
                        fontWeight="bold"
                        fill="black"
                        className='animate-rotate animate-duration-4000 origin-center font-primary font-light'
                        >
                            <textPath href="#rotating-circle" startOffset="-10%">
                                Appuyer
                            </textPath>

                            <textPath href="#rotating-circle" startOffset="36%">
                                Appuyer
                            </textPath>
                            <textPath href="#rotating-circle" startOffset="62%">
                                Appuyer
                            </textPath>
                            <textPath href="#rotating-circle" startOffset="86%">
                                Appuyer
                            </textPath>
                        </text>
                    </svg>
                    <svg width="100%" height="100%" viewBox="-32 0 512 512" preserveAspectRatio="none" className='absolute top-0 left-0 origin-center scale-[0.21] w-full aspect-square'>
                        <path stroke='none' fill='white' d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                values="0 -20;0 0;0 -20"
                                to="0 0"
                                dur="1s"
                                keySplines="0.26 0 0.74 1; 0.26 0 0.74 1"
                                calcMode="spline"
                                repeatCount="indefinite" />
                        </path>
                    </svg>
                </Magnetic>
            </div>
            <ParisSVG/>
        </div>

        <div className = "masked-hero pt-[144px] hidden md:flex absolute top-0 left-0 w-full h-full items-center justfy-stretch flex-col bg-black z-50 pointer-events-none">
            {/* TODO: fill this section with something cool. */}

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