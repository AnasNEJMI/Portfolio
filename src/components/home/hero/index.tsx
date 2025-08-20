import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import avatar from '@/../public/images/avatar.svg'
import ParisSVG from '@/components/paris-svg';
import NextSVG from '../../logos/next/logo';
import ReactRouterSVG from '../../logos/react-router/logo';
import ViteSVG from '../../logos/vite/logo';
import LaravelSVG from '../../logos/laravel/logo';
import TypescriptSVG from '../../logos/typescript/logo';
import PhpSVG from '../../logos/php/logo';
import MySQLLogo from '../../logos/mysql/logo';
import JavaLogo from '../../logos/java/logo';
import CSharpLogo from '../../logos/c-sharp/logo';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Magnetic from '@/components/basic_magnetic_item';
import {X} from 'lucide-react';

const salutations = ['Bonjour', 'こんにちは', 'नमस्कार',  '你好', 'أهلاً','Olá', 'Guten Tag','Hola', 'Hello',  "Bonjour"];

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

const Frameworks = [
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

const HomeHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const openStackBtnRef = useRef<HTMLButtonElement>(null);
    const closeStackBtnRef = useRef<HTMLButtonElement>(null);
    const stackRevealState = useRef<'opening' | 'open' | 'closing' | 'closed'>('closed');

    useGSAP((context, contextSafe) => {
        // let mm = gsap.matchMedia();

        // mm.add("(min-width: 768px)", () => {

        //     const devTranslateY = gsap.quickSetter(".dev", "yPercent");
        //     const fullStackTranslateY = gsap.quickSetter(".full-stack", "yPercent");
        //     const passionedTranslateY = gsap.quickSetter(".passioned", "yPercent");
        //     const authenticTranslateY = gsap.quickSetter(".authentic", "yPercent");
        //     const rigorousTranslateY = gsap.quickSetter(".rigorous", "yPercent");
        //     const parisSVGTranslateY = gsap.quickSetter(".paris-svg", "yPercent");
        //     const maskRevealBtnTranslateY = gsap.quickSetter(".mask-reveal-btn", "yPercent");
    
    
        //     devTranslateY(0);
        //     fullStackTranslateY(0);
        //     passionedTranslateY(0);
        //     authenticTranslateY(0);
        //     rigorousTranslateY(0);
        //     parisSVGTranslateY(0);
        //     maskRevealBtnTranslateY(0);
    
        //     ScrollTrigger.create({
        //         trigger: containerRef.current,
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: 0.5,
        //         ease : "power3.out",
        //         onUpdate : (self) => {
        //             devTranslateY(self.progress * 120);
        //             fullStackTranslateY(self.progress * 120);
        //             passionedTranslateY(self.progress * 500);
        //             authenticTranslateY(self.progress * 500);
        //             rigorousTranslateY (self.progress * 500);
        //             parisSVGTranslateY (self.progress *200);
        //             maskRevealBtnTranslateY(self.progress *200)
        //         }   
        //     });

        //     return () => {
        //         ScrollTrigger.killAll();
        //     }
        // });

        const salutationYSetter = gsap.quickSetter(".salutations", "yPercent");

        let salutationsTl = gsap.timeline({repeat: Infinity, delay : 4, repeatDelay : 1.5});

        for (let i = 1; i < salutations.length ; i++) {
            if(i < salutations.length - 1){
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out"}, (i === 1  )? "" : "<+=1.5");
            }else{
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out", onComplete : () => {salutationYSetter(0)}}, "<+=1.5");
            }
        }

        if(openStackBtnRef.current !== null && closeStackBtnRef.current !== null){
            const centerX = (openStackBtnRef.current.offsetLeft + openStackBtnRef.current.clientWidth/2)*100/window.innerWidth
            const centerY = (openStackBtnRef.current.offsetTop + openStackBtnRef.current.clientHeight/2)*100/window.innerHeight;

            console.log('centerX ', centerX, ' centerY', centerY)

            const stackRevealAnimDur = 1.9; 
            const stackRevealTl = gsap.timeline({paused: true});
            stackRevealTl.addLabel('start', 0);
            stackRevealTl.set('.stack-wrapper', {clipPath : `circle(0% at ${centerX}% ${centerY}%)`}, 'start')
            stackRevealTl.set('.stack-wrapper', {pointerEvents : 'auto'}, 'start')
            stackRevealTl.fromTo(openStackBtnRef.current, {scale : 1}, {scale : 0, duration : 0.5, ease : 'back.in'}, 'start');
            stackRevealTl.to('.stack-wrapper ', {clipPath : `circle(150% at ${centerX}% ${centerY}%)`, duration: 1.5, ease : 'expo.out'}, 'start+=0.5')
            stackRevealTl.fromTo('.languages-title', {opacity : 0, y : 20}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 'start+=1.1');
            stackRevealTl.fromTo('.frameworks-title', {opacity : 0, y : 20}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, 'start+=1.1');

            const languageEls = gsap.utils.toArray('.languages-el');
            languageEls.forEach((el, index) => {
                stackRevealTl.fromTo(el as gsap.TweenTarget, {opacity : 0, y : 30}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, `start+=${1.1+0.05*index}`);
            });
            const frameworkEls = gsap.utils.toArray('.frameworks-el');
            frameworkEls.forEach((el, index) => {
                stackRevealTl.fromTo(el as gsap.TweenTarget, {opacity : 0, y : 30}, {opacity : 1, y : 0, duration : 0.5, ease : 'power3.out'}, `start+=${1.1+0.05*index}`);
            });
            stackRevealTl.fromTo(closeStackBtnRef.current, {scale : 0}, {scale : 1, duration : 0.5, ease : 'back.out'}, 'start+=1.5');


            const onOpenStack = (event : MouseEvent) => {
                if(stackRevealState.current === 'opening' || stackRevealState.current === 'open') return;
    
                stackRevealState.current = 'opening';
                console.log('opening');
                stackRevealTl.play().then(() => {
                    stackRevealState.current = 'open';
                    console.log('open');
                    
                })
            }
            const onCloseStack = (event : MouseEvent) => {
                if(stackRevealState.current === 'closing' || stackRevealState.current === 'closed') return;
    
                stackRevealState.current = 'closing';
                stackRevealTl.pause();
                stackRevealTl.reverse().then(() => {
                    stackRevealState.current = 'closed';
                    
                })
            }

            context.add('onOpenStack', onOpenStack);
            context.add('onCloseStack', onCloseStack);
            
            openStackBtnRef.current.addEventListener('click', context.onOpenStack)
            closeStackBtnRef.current.addEventListener('click', context.onCloseStack)
            
            var lastScrollTop = 0;
            const onScroll = () => {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                    if(stackRevealState.current === 'opening' || 'open'){
                        stackRevealTl.pause();
                        stackRevealState.current = 'closing';
                        stackRevealTl.reverse().then(() => {
                            stackRevealState.current = 'closed';
                        });
                    }
                }
                lastScrollTop = st <= 0 ? 0 : st;
            }

            context.add('onScroll', onScroll)
            window.addEventListener('scroll', context.onScroll);
        }


        
        
        return () => {
            // mm.revert();
            salutationsTl.revert();
            openStackBtnRef.current?.removeEventListener('click', context.onOpenStack)
            closeStackBtnRef.current?.removeEventListener('click', context.onCloseStack)
            window.removeEventListener('scroll', context.onScroll);
        }

    }, {scope: containerRef});

  return (
    <section ref={containerRef} className='section relative z-10 h-svh-screen pt-[144px] w-full flex items-center justify-start gap-8 flex-col overflow-hidden px-nav pb-nav bg-white'>
        <div style = {{clipPath : 'circle(0% at 0 100%)'}}className='stack-wrapper absolute top-0 left-0 w-full h-full bg-zinc-900  z-20 pointer-events-none pt-[120px] md:pt-60 flex items-center justify-start flex-col px-nav gap-16 pb-nav'>
            <div className='flex w-full flex-col items-start justify-start md:justify-evenly max-w-7xl gap-8 lg:gap-16'>
                <div className='flex max-w-7xl w-full gap-4 md:gap-8 md:flex-row flex-col'>
                    <span className='languages-title text-white font-secondary font-bold text-h5 md:text-h4 lg:text-h3'>Languages</span>
                    <div className='grid grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4'>
                    {
                        languages.map((language, index) => (
                            <div key={index} className='languages-el md:p-8 rounded-xl w-full max-w-36 aspect-square bg-white flex items-center justify-center flex-col gap-2 text-zinc-900 font-primary font-bold text-caption md:text-body'>
                                <language.svg/>
                                {language.label}
                            </div>

                        ))
                    }
                    </div>
                </div>
                <div className='flex max-w-7xl w-full gap-4 md:gap-8 md:flex-row flex-col'>
                    <span className='frameworks-title text-white font-secondary font-bold text-h5 md:text-h4 lg:text-h3'>Frameworks</span>
                    <div className='grid grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4'>
                        {
                            Frameworks.map((franework, index) => (
                                <div key={index} className='frameworks-el w-full max-w-36 aspect-square md:p-8 rounded-xl bg-white flex items-center justify-center flex-col gap-2 text-zinc-900 font-primary font-bold text-nowrap text-caption md:text-body'>
                                    <franework.svg/>
                                    {franework.label}
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end max-w-7xl w-full absolute bottom-0 pr-nav pb-nav'>
                <Magnetic >
                    <button ref = {closeStackBtnRef} className='h-24 lg:h-32 aspect-square rounded-full bg-white text-zinc-900 font-bold flex items-center justify-center cursor-pointer'>
                        <X size={48} />
                    </button>

                </Magnetic>
            </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
            <div className='relative'>
                <div className='absolute w-full h-full rounded-xl top-0 left-0 -translate-x-2 translate-y-2 bg-zinc-200 border border-zinc-300 -z-10'></div>
                <div className='origin-bottom h-12 relative overflow-hidden px-4 bg-black text-white rounded-xl'>
                    <span className='opacity-0 pointer-events-none font-primary font-bold text-body md:text-h5 h-12 flex items-center justify-center'>こんにちは</span>
                    <div className='salutations flex absolute bottom-0 left-0 z-0 items-center w-full  md:items-center justify-center flex-col'>
                        {
                            salutations.map((salutation, index) => (
                            <span key={`salutation-${index}`} className='font-primary font-bold text-body md:text-h5 h-12 flex items-center justify-center'>{salutation}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center text-h5 font-primary gap-2 text-zinc-900'>
                <span>Je suis </span>
                <h1 className='text-h5 font-bold font-secondary'>Anas NEJMI</h1>
            </div>
        </div>
        
        
        <div className='flex flex-col'>
            <h1 className='font-secondary font-medium text-6xl sm:text-7xl md:text-[6rem] lg:text-[10rem] leading-[1] text-center text-zinc-900 drop-shadow-2xl'>Designer &</h1>
            <h1 className='font-secondary font-medium text-6xl sm:text-7xl md:text-[6rem] lg:text-[10rem] leading-[1] text-center text-zinc-900 drop-shadow-2xl'>Développeur</h1>
        </div>
        <div className='w-full aspect-[6/4] max-w-[500px] lg:hidden grow flex items-center justify-center'>
             <DotLottieReact
                src="images/avatar-anim2.lottie"
                loop
                autoplay
                className='w-full aspect-[6/4]'
            />
            {/* <Image
                src = {avatar}
                width={600}
                height={400}
                alt='avatar animation'
                className='w-full aspect-[6/4]'
                /> */}
        </div>
        <div className='flex items-end justify-between w-full max-w-7xl font-primary text-body'>
            <Magnetic>
                <button ref = {openStackBtnRef} className='h-24 lg:h-32 aspect-square rounded-full bg-zinc-900 text-zinc-900 font-bold flex items-center justify-center cursor-pointer'>
                    <svg viewBox="0 0 500 500"  xmlns="http://www.w3.org/2000/svg" className='w-full h-full rounded-full fill-zinc-900'>
                        <path d="M 400 250 A 150 150 0 0 1 250 400 A 150 150 0 0 1 100 250 A 150 150 0 0 1 250 100 A 150 150 0 0 1 400 250 Z" id="circle-text-path"></path>
                        <text style={{animationDuration : '10s'}} className='animate-spin origin-center'><textPath fontSize={55} xlinkHref="#circle-text-path" className='font-bold font-primary text-[4.1rem] fill-white'>Ma Stack . Ma Stack . Ma Stack .</textPath></text>
                        <ellipse cx="250" cy="250" rx="50" ry="50" fill='white'></ellipse>
                        <path d="M 250 278.28 L 268.85 259.43 M 250 278.28 L 231.15 259.43 M 250 278.28 L 250 221.72" id="circle-arrow"></path>
                    </svg>
                </button>
            </Magnetic>

            <div className='w-full aspect-[6/4] max-w-[600px] hidden lg:block'>
                <DotLottieReact
                    src="images/avatar-anim2.lottie"
                    loop
                    autoplay
                    className='w-full aspect-[6/4]'
                />
                {/* <Image
                        src = {avatar}
                        width={600}
                        height={400}
                        alt='avatar animation'
                        className='w-full aspect-[6/4]'
                    /> */}
            </div>

            <div className = "origin-bottom-right">
                <ParisSVG className='h-24 lg:h-32'/>
            </div>
        
        </div>
    </section>
    // <section ref = {containerRef} className='section relative z-10 h-svh-screen pt-[144px] w-full flex items-center justify-between flex-col overflow-hidden'>
    //     <div className='absolute top-0 left-0 h-screen w-full flex items-center justify-center'>
    //         <div style={{clipPath : 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%, 5% 5%)'}} className='h-[50%] md:h-[70.7%] opacity-20 aspect-square rotate-45 z-[6]  grid grid-cols-10 grid-rows-10 pointer-events-none md:translate-y-0 translate-y-1/4'>
    //             {[...Array(100)].map((_, index) => (
    //             <div key={`cell_${index}`} className='border border-black border-opacity-20'>
    //             </div>
    //             ))}
    //         </div>
    //     </div>
    //     <div className = "flex flex-col items-center w-full max-w-7xl lg:items-start pl-0 lg:pl-24 pt-[calc(var(--padding-nav))] relative z-30">
            // <div className='origin-bottom relative overflow-hidden h-full px-4 md:px-0 text-h6 font-medium'>
            //     <p className='opacity-0 pointer-events-none h-10 w-28'>こんにちは</p>
            //     <div className='salutations flex absolute bottom-0 left-0 z-0 items-center md:items-start justify-start flex-col  px-4 md:px-0'>
            //         {
            //             salutations.map((salutation, index) => (
            //             <p key={`salutation-${index}`} className='h-10 font-primary font-normal w-28 text-center md:text-start'>{salutation}</p>
            //             ))
            //         }
            //     </div>
            // </div>
    //         <p className = "font-primary"><span className = "font-primary font-normal text-h6">Je m&apos;appelle</span> <span className = "ml-2 font-primary font-medium text-h6 px-4 py-1 rounded-md border border-zinc-800 border-opacity-50 bg-white relative">Anas<span className ="absolute -z-10 rounded-md top-0 left-0 -translate-x-1 translate-y-1 w-full h-full bg-black"></span></span></p>
    //     </div>

    //     <div className='lg:pt-20'>
    //         <h1 className= "heading flex flex-col items-center justify-center leading-tight font-black z-20 select-none">
    //             <span className = "dev font-secondary text-h1">Développeur</span>
    //             <span className = "full-stack font-secondary  text-h1">Full-Stack</span>
    //         </h1>

    //         <div className= "w-full relative z-30 mt-8">
    //             <div className = "flex flex-col items-center text-body md:text-h6 font-bold px-nav relative z-10">
    //             <p className='text-pretty flex items-center justify-center gap-4'>
    //                 <span className = "passioned text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Passionné</span>
    //                 <span className = "authentic text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Authentique</span>
    //                 <span className = "rigorous text-black font-primary font-black text-h6 md:text-h5 translate-y-0">Rigoureux</span>
    //             </p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className = "w-full flex items-center justify-end max-w-7xl p-nav relative mt-[calc(var(--padding-nav)*.8)] lg:mt-[calc(var(--padding-nav)*2)]">
    //         <ParisSVG/>
    //     </div>

    // </section>
  )
}

export default HomeHero