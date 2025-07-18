import { useGSAP } from '@gsap/react'
import { Separator } from '../../ui/separator'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AboutEducation = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        const mm = gsap.matchMedia();
        
        
        mm.add('(min-width : 768px)', () => {
            const elements = gsap.utils.toArray<HTMLDivElement>('.ed-element');
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
    <section ref = {containerRef} className="section min-h-screen w-full flex flex-col items-center justify-center py-section px-nav">
        <div className="max-w-7xl w-full">
            <h1 className="w-min font-secondary font-light text-h5">Formation</h1>
            <div className='ed-element'>
                <Separator/>
            </div>
            <div className="ed-element grid grid-cols-2 gap-2 md:gap-8 mt-16 font-primary">
                <div className="flex flex-col">
                    <span className="font-bold text-h5 max-w-20 md:max-w-full">Télécom Paristech</span>
                    <span className="font-bold text-base text-zinc-700">2012 - 2016</span>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-body text-balance md:text-h6">CYCLE INGÉNIEUR - FORMATION INITIALE</h3>
                    <span className="mt-4 font-regular text-balance text-body">Développement logiciel et apprentissage informatique</span>
                    <span className="mt-2 font-regular text-balance text-body">Machine learning, fouille & traitement de données</span>
                </div>
            </div>
            <div className='ed-element my-16'>
                <Separator/>
            </div>
            <div className="ed-element grid grid-cols-2 gap-2 md:gap-8 font-primary">
                <div className="flex flex-col">
                    <span className="font-bold text-h5 max-w-20 md:max-w-full">Lycée Moulay Youssef</span>
                    <span className="font-bold text-base text-zinc-700">2010 - 2012</span>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-body text-balance md:text-h6">CLASSES PRÉPARATOIRES MPSI/MP*</h3>
                    <span className="mt-4 font-regular text-balance text-body">Classes Préparatoires aux grandes écoles</span>
                    <span className="font-regular text-balance text-body">Spécialités : Maths, Physique/Chimie, Informatique</span>
                </div>
            </div>
            <div className='ed-element my-16'>
                <Separator/>
            </div>
        </div>
    </section>
  )
}

export default AboutEducation