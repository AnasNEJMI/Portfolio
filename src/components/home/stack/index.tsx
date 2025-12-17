import React, { useRef } from 'react'
import NextSVG from '../../logos/next/logo';
import ReactRouterSVG from '../../logos/react-router/logo';
import TailwindSVG from '../../logos/tailwind/logo';
import GsapSVG from '../../logos/gsap';
import ShadcnSVG from '../../logos/shadcn';
import ScssSVG from '../../logos/scss';
import FramerSVG from '../../logos/framer';
import ViteSVG from '../../logos/vite/logo';
import LaravelSVG from '../../logos/laravel/logo';
import TypescriptSVG from '../../logos/typescript/logo';
import PhpSVG from '../../logos/php/logo';
import MySQLLogo from '../../logos/mysql/logo';
import JavaLogo from '../../logos/java/logo';
import CSharpLogo from '../../logos/c-sharp/logo';
import { useGSAP } from '@gsap/react';
import Magnetic from '@/components/basic_magnetic_item';
import { X } from 'lucide-react';
import gsap from 'gsap';

const languages = [
    {
        svg : PhpSVG,
        label : 'PHP',
    },
    {
        svg : TypescriptSVG,
        label : 'Typescript',
    },
    {
        svg : MySQLLogo,
        label : 'MySQL',
    },
    {
        svg : JavaLogo,
        label : 'Java',
    },
    {
        svg : CSharpLogo,
        label : 'C#',
    },
]

const frameworks = [
    {
        svg : ReactRouterSVG,
        label : 'React Router',
    },
    {
        svg : NextSVG,
        label : 'NextJS',
    },
    {
        svg : ViteSVG,
        label : 'Vite',
    },
    {
        svg : LaravelSVG,
        label : 'Laravel',
    },
]

const ui = [
    {
        svg : TailwindSVG,
        label : 'TailwindCSS',
    },
    {
        svg : ShadcnSVG,
        label : 'Shadcn UI',
    },
    {
        svg : ScssSVG,
        label : 'SCSS',
    },
    {
        svg : GsapSVG,
        label : 'GSAP',
    },
    {
        svg : FramerSVG,
        label : 'Framer',
    },
]

const Stack = () => {
    const containerRef = useRef(null)
    const stackRevealState = useRef<'opening' | 'open' | 'closing' | 'closed'>('closed');
    const openStackTl = useRef(gsap.timeline({paused : true}));

    const {contextSafe} = useGSAP(() => {
        const openBtn = document.getElementById("stack-open-btn");
        const closeBtn = document.getElementById("stack-close-btn");
        
        if(!openBtn || !closeBtn) return;

        const boundingBox = openBtn.getBoundingClientRect();
        const openBtnCenterX = (boundingBox.left + boundingBox.width/2)*100/window.innerWidth;
        const openBtnCenterY = (boundingBox.top + boundingBox.height/2)*100/window.innerHeight;

        console.log('centerX : ', openBtnCenterX, ' centerY : ', openBtnCenterY);
        openStackTl.current
            .set('.stack-wrapper', {clipPath : `circle(0% at ${openBtnCenterX}% ${openBtnCenterY}%)`}, 0)
            .set('.stack-wrapper', {pointerEvents : 'auto'}, 0)
            .set('.open-stack-btn-wrapper', {pointerEvents : 'none'}, 0)
            .fromTo(openBtn, {scale : 1}, {scale : 0, duration : 0.5, ease : 'back.in'}, 0)
            .to('.stack-wrapper ', {clipPath : `circle(150% at ${openBtnCenterX}% ${openBtnCenterY}%)`, duration: 1.5, ease : 'expo.out'}, 0.5)
            .fromTo('.languages-title', {opacity : 0, y : 20}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.1)
            .fromTo('.frameworks-title', {opacity : 0, y : 20}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.2)
            .fromTo('.ui-title', {opacity : 0, y : 20}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.3)
            .fromTo(closeBtn, {scale : 0}, {scale : 1, duration : 0.5, ease : 'back.out'}, 1.5)

        const languageEls = gsap.utils.toArray('.languages-el');
        languageEls.forEach((el, index) => {
            openStackTl.current.fromTo(el as gsap.TweenTarget, {opacity : 0, y : 30}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.1+0.05*index);
        });

        const frameworkEls = gsap.utils.toArray('.frameworks-el');
        frameworkEls.forEach((el, index) => {
            openStackTl.current.fromTo(el as gsap.TweenTarget, {opacity : 0, y : 30}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.2+0.05*index);
        });

        const uiEls = gsap.utils.toArray('.ui-el');
        uiEls.forEach((el, index) => {
            openStackTl.current.fromTo(el as gsap.TweenTarget, {opacity : 0, y : 30}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 1.3+0.05*index);
        });

    }, {scope : containerRef})


    const onOpenStackClickHandler = contextSafe(() => {
        if(stackRevealState.current === 'opening' || stackRevealState.current === 'open') return;
        stackRevealState.current = 'opening';
        openStackTl.current.play().then(() => {
            stackRevealState.current = 'open';
            console.log('open');
        })
    });

    const onCloseStackClickHandler = contextSafe(() => {
        if(stackRevealState.current === 'closing' || stackRevealState.current === 'closed') return;
        stackRevealState.current = 'closing';
        openStackTl.current.pause();

        openStackTl.current.reverse().then(() => {
            stackRevealState.current = 'closed';
        })
    });
  return (
        <div ref={containerRef} className='absolute z-10 top-0 left-0 w-full h-screen'>
            <div style = {{clipPath : 'circle(0% at 0 100%)'}} className='stack-wrapper pointer-events-none absolute top-0 left-0 w-full h-full bg-zinc-900 z-20 pt-[120px] md:pt-48 flex items-center justify-start flex-col px-nav gap-16 pb-nav'>
                <div className='flex w-full flex-col items-start justify-start md:justify-evenly max-w-7xl gap-4 lg:gap-16'>
                    <div className='flex max-w-7xl w-full gap-2 md:gap-8 md:flex-row flex-col'>
                        <span className='languages-title text-white font-secondary font-bold text-h5 md:text-h4 lg:text-h3 md:w-48 lg:w-64'>Languages</span>
                        <div className='grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-4'>
                        {
                            languages.map((language, index) => (
                                <div key={index} className='languages-el md:p-8 rounded-xl w-full max-w-36 aspect-square bg-white flex items-center justify-center flex-col gap-2 text-zinc-900 font-primary font-bold text-tiny xs:text-caption md:text-body'>
                                    <language.svg/>
                                    {language.label}
                                </div>

                            ))
                        }
                        </div>
                    </div>
                    <div className='flex max-w-7xl w-full gap-2 md:gap-8 md:flex-row flex-col'>
                        <span className='frameworks-title text-white font-secondary font-bold text-h5 md:text-h4 lg:text-h3 md:w-48 lg:w-64'>Frameworks</span>
                        <div className='grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-4'>
                            {
                                frameworks.map((framework, index) => (
                                    <div key={index} className='frameworks-el w-full max-w-36 aspect-square md:p-8 rounded-xl bg-white flex items-center justify-center flex-col gap-2 text-zinc-900 font-primary font-bold text-nowrap text-tiny xs:text-caption md:text-body'>
                                        <framework.svg/>
                                        {framework.label}
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className='flex max-w-7xl w-full gap-2 md:gap-8 md:flex-row flex-col'>
                        <span className='ui-title text-white font-secondary font-bold text-h5 md:text-h4 lg:text-h3 md:w-48 lg:w-64'>UI</span>
                        <div className='grid grid-cols-4 sm:grid-cols-5 gap-2 md:gap-4'>
                            {
                                ui.map((ui, index) => (
                                    <div key={index} className='ui-el w-full max-w-36 aspect-square md:p-8 rounded-xl bg-white flex items-center justify-center flex-col gap-2 text-zinc-900 font-primary font-bold text-nowrap text-tiny xs:text-caption md:text-body'>
                                        <ui.svg/>
                                        {ui.label}
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end max-w-7xl w-full absolute bottom-0 pr-nav pb-nav'>
                    <Magnetic>
                        <button id = 'stack-close-btn' onClick={() => onCloseStackClickHandler()} className='h-24 lg:h-32 aspect-square rounded-full bg-white text-zinc-900 font-bold flex items-center justify-center cursor-pointer'>
                            <X size={48} /> 
                        </button>

                    </Magnetic>
                </div>
            </div>
            <div className='open-stack-btn-wrapper absolute z-30 bottom-0 pl-nav pb-nav w-full max-w-7xl left-1/2 -translate-x-1/2 flex justify-start'>
                <Magnetic>
                    <button id = 'stack-open-btn' onClick={() => onOpenStackClickHandler()} className='h-24 lg:h-32 aspect-square rounded-full bg-zinc-900 text-zinc-900 font-bold flex items-center justify-center cursor-pointer'>
                        <svg viewBox="0 0 500 500"  xmlns="http://www.w3.org/2000/svg" className='w-full h-full rounded-full fill-zinc-900'>
                            <path d="M 400 250 A 150 150 0 0 1 250 400 A 150 150 0 0 1 100 250 A 150 150 0 0 1 250 100 A 150 150 0 0 1 400 250 Z" id="circle-text-path"></path>
                            <text style={{animationDuration : '10s'}} className='animate-spin origin-center'><textPath fontSize={55} xlinkHref="#circle-text-path" className='font-bold font-primary text-[4.1rem] fill-white'>Ma Stack . Ma Stack . Ma Stack .</textPath></text>
                            <ellipse cx="250" cy="250" rx="50" ry="50" fill='white'></ellipse>
                            <path d="M 250 278.28 L 268.85 259.43 M 250 278.28 L 231.15 259.43 M 250 278.28 L 250 221.72" id="circle-arrow"></path>
                        </svg>
                    </button>
                </Magnetic>
            </div>
        </div>
  )
}

export default Stack