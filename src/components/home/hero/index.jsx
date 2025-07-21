import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {throttle} from 'lodash';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParisSVG from '../../paris-svg/index'

const salutations = ['Bonjour', 'こんにちは', 'नमस्कार',  '你好', 'أهلاً','Olá', 'Guten Tag','Hola', 'Hello',  "Bonjour"];

gsap.registerPlugin(ScrollTrigger);

const HomeHero = () => {
    const containerRef = useRef(null);

    useGSAP((_, contextSafe) => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {

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
                ScrollTrigger.killAll();
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
                <p className='text-pretty flex items-center justify-center gap-4'>
                    <span className = "passioned text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Passionné</span>
                    <span className = "authentic text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Authentique</span>
                    <span className = "rigorous text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Rigoureux</span>
                </p>
                </div>
            </div>
        </div>
        <div className = "w-full flex items-center justify-end max-w-7xl p-nav relative mt-[calc(var(--padding-nav)*.8)] lg:mt-[calc(var(--padding-nav)*2)]">
            <ParisSVG/>
        </div>

    </section>
  )
}

export default HomeHero