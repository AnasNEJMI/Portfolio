import { Separator } from '../../ui/separator'
import NextSVG from '../../logos/next/logo';
import ReactRouterSVG from '../../logos/react-router/logo';
import ViteSVG from '../../logos/vite/logo';
import LaravelSVG from '../../logos/laravel/logo';
import TypescriptSVG from '../../logos/typescript/logo';
import PhpSVG from '../../logos/php/logo';
import MySQLLogo from '../../logos/mysql/logo';
import JavaLogo from '../../logos/java/logo';
import CSharpLogo from '../../logos/c-sharp/logo';
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const AboutComptences = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        const mm = gsap.matchMedia();
        
        
        mm.add('(min-width : 768px)', () => {
            const elements = gsap.utils.toArray<HTMLDivElement>('.comp-element');
            elements.forEach((el, i) => {
                gsap.fromTo(el, {y : 100}, {y : 0, delay : i*0.15, scrollTrigger : {
                    trigger : el,
                    start : 'top bottom',
                    end : 'top top',
                    scrub : true,
                }})
            })
        });

        return () => {
            ScrollTrigger.killAll();
            mm.revert();
        }
    }, {scope : containerRef})
  return (
    <section ref={containerRef} className="section min-h-screen w-full flex flex-col justify-center items-center py-section px-nav">
        <div className="max-w-7xl w-full">
            <h1 className="w-min font-secondary font-light text-h5">Compétences</h1>
            <div className='comp-element'>
                <Separator />
            </div>
            <div className="comp-element mt-16 font-primary">
                <div className="grid grid-cols-2 md:grid-cols-3 font-primary font-bold text-body md:text-h6">
                    <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-h5">Languages</span>
                    </div>
                    <div className="py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                        <PhpSVG/>
                        PHP
                    </div>
                    <div className="py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <TypescriptSVG/>
                    Typescript
                    </div>
                    <div className="py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <MySQLLogo/>
                    MySQL
                    </div>
                    <div className="py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <JavaLogo/>
                    Java
                    </div>
                    <div className="py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <CSharpLogo/>
                    C#  
                    </div>
                </div>
            </div>
            <div className='comp-element my-16'>
                <Separator/>
            </div>
            <div className="comp-element mt-16 font-primary">
                <div className="grid grid-cols-2 md:grid-cols-3 font-primary font-bold text-body md:text-h6">
                    <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-h5">Frameworks</span>
                    </div>
                    <div className=" py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <ReactRouterSVG/>
                    <span>React Router</span>
                    </div>
                    <div className=" py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <NextSVG/>
                    NextJS
                    </div>
                    <div className=" py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <ViteSVG/>
                    Vite
                    </div>
                    <div className=" py-16 border border-zinc-200 flex items-center justify-center flex-col gap-2">
                    <LaravelSVG/>
                    Laravel
                    </div>
                </div>
            </div>
            <div className='comp-element my-16'>
                <Separator/>
            </div>
        </div>
    </section>
  )
}

export default AboutComptences