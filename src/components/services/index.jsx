import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomEase } from 'gsap/CustomEase';
import SlidingText from '../sliding_text';
gsap.registerPlugin(CustomEase);

const subheading = "Je mets à votre disposition mon expertise et je travaille en étroite collaboration avec vous pour vous fournir des services de qualité."

const Services = () => {
    let containerRef = useRef(null);

    useGSAP((context, contextSafe) => {
        
        gsap.fromTo('.clipped-title-1', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 100% 0 0)', ease : CustomEase.create("custom", "M0,0 C0.603,0.307 0.924,0.862 1,1 "), scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "top top",
            scrub : true
        }});

        gsap.fromTo('.clipped-title-2', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 0 0 100%)',  ease : CustomEase.create("custom", "M0,0 C0.603,0.307 0.924,0.862 1,1 "), scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "top top",
            scrub : true
        }});

        gsap.from('.title-1', {xPercent : -150, scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "top top",
            scrub : true
          }});

        gsap.from('.title-2', {xPercent : 100, scrollTrigger : {
        trigger : containerRef.current,
        start : "top bottom",
        end : "top top",
        scrub : true
        }});

        // gsap.to('.content', {scale : 0.5, opacity : 0.5, scrollTrigger : {
        //     trigger : containerRef.current,
        //     start : "top top",
        //     end : "bottom top",
        //     scrub : true
        //     }});
      
    }, {scope : containerRef});
  return (
    <section ref = {containerRef} className='relative py-[calc(var(--padding-nav)*3)] pl-nav z-[5] pr-nav bg-white overflow-hidden'>
        {/* <svg className='curve w-full aspect-[3/2] absolute top-0 left-0 z-10 origin-top drop-shadow-2xl' viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d = "m0 0h100v100Q50 0 0 100Z" className = "fill-zinc-50 z-50"></path>
        </svg> */}
        <div className='w-full h-full  flex items-center justify-start flex-col content'>
            <div className = "flex md:gap-8 lg:gap-12 font-secondary font-black text-start text-black text-h1 drop-shadow-md w-min text-nowrap">
                <h1 className='title-1 relative h-full  px-4'>Mes<span className='clipped-title-1 absolute top-0 left-0 h-full w-min text-white opacity-75 px-4'>Mes</span></h1>
                <h1 className = "title-2 relative  px-4">Services <span className='clipped-title-2 absolute top-0 left-0 text-white opacity-75  px-4'>Services</span></h1>
            </div>
            <div className = "flex justify-between flex-wrap items-start w-full mt-nav gap-8 max-w-7xl">
                <div className='flex-1 max-w-[400px] min-w-[300px]'>
                    <p className='font-primary font-light text-h6 text-justify'>{subheading}</p>
                    <div className='font-primary font-black text-white text-h6 py-4 bg-zinc-50 w-full flex justify-center text-nowrap border border-zinc-200 mt-8 rounded-md cursor-pointer px-8 italic'>
                        <div className = "relative tracking-wider">
                            <div className=' absolute top-0 left-0 z-50  translate-x-1 -translate-y-1'><span className='text-stroke-black '>Design & Conception</span> <div className = "absolute top-0 left-0 text-white z-20">Design & Conception</div></div>
                            <div className=' absolute top-0 left-0 z-40  translate-x-[3px] -translate-y-[3px]'><span className='text-stroke-black '>Design & Conception</span> <div className = "absolute top-0 left-0 text-black z-20">Design & Conception</div></div>
                            <div className=' absolute top-0 left-0 z-30  translate-x-[2px] -translate-y-[2px]'><span className='text-stroke-black '>Design & Conception</span> <div className = "absolute top-0 left-0 text-black z-20">Design & Conception</div></div>
                            <div className=' absolute top-0 left-0 z-20  translate-x-px -translate-y-px'><span className='text-stroke-black '>Design & Conception</span> <div className = "absolute top-0 left-0 text-black z-20">Design & Conception</div></div>
                            <div className=' relative'><span className='text-stroke-black '>Design & Conception</span> <div className = "absolute top-0 left-0 text-black z-20">Design & Conception</div></div>
                        </div>
                    </div>
                    <div className='font-primary font-black text-white text-h6 py-4 bg-zinc-50 w-full flex justify-center text-nowrap border border-zinc-200 mt-4 rounded-md cursor-pointer px-8 italic'>
                        <div className = "relative tracking-wider">
                            <div className=' absolute top-0 left-0 z-50  translate-x-1 -translate-y-1'><span className='text-stroke-black '>Développement Web</span> <div className = "absolute top-0 left-0 text-white z-20">Développement Web</div></div>
                            <div className=' absolute top-0 left-0 z-40  translate-x-[3px] -translate-y-[3px]'><span className='text-stroke-black '>Développement Web</span> <div className = "absolute top-0 left-0 text-black z-20">Développement Web</div></div>
                            <div className=' absolute top-0 left-0 z-30  translate-x-[2px] -translate-y-[2px]'><span className='text-stroke-black '>Développement Web</span> <div className = "absolute top-0 left-0 text-black z-20">Développement Web</div></div>
                            <div className=' absolute top-0 left-0 z-20  translate-x-px -translate-y-px'><span className='text-stroke-black '>Développement Web</span> <div className = "absolute top-0 left-0 text-black z-20">Développement Web</div></div>
                            <div className=' relative'><span className='text-stroke-black '>Développement Web</span> <div className = "absolute top-0 left-0 text-black z-20">Développement Web</div></div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 max-w-[800px] min-w-[300px] border rounded-xl bg-white border-zinc-100'>
                    <div className='w-full py-24 flex items-center justify-center'>
                        <div style={{transformStyle: "preserve-3d", transform : "rotateX(60deg) rotateZ(-45deg) "}} className='w-2/4 aspect-[3/2] border  grid grid-cols-10 relative bg-seasalt-500'>
                            {
                            [...Array(120)].map((item, index) => (
                                <div key={index} className='w-full aspect-square border border-jet-900 opacity-40 transition-all bg-opacity-0 bg-jet-800 hover:bg-opacity-100 duration-1000 delay-0 hover:duration-100'>

                                </div>
                            ))
                            }

                            <div style={{transform : "rotateX(-90deg)"}} className='w-full h-12 bg-jet-900 text-white absolute top-full origin-top overflow-hidden bg-black'>
                                <SlidingText text='Design . Graphisme . Développement .'/>
                            </div>
                            <div style={{transform : "rotateY(-90deg)"}} className='h-full w-12 bg-jet-900  absolute right-full origin-right overflow-hidden bg-black text-white'>
                            <div className='w-full h-full rotate-90   absolute top-full -right-full origin-top-left'><SlidingText initialDirection={1} text=' Design . Graphisme . Développement .'/></div>
                            </div>
                            
                            <div style={{transformStyle : 'preserve-3d'}} className='animate-hover w-2/3 aspect-[4/4] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-bl-xl bg-white origin-bottom border border-zinc-200'>
                                <div style={{transformStyle : 'preserve-3d', transform : "rotateY(90deg) "}} className='w-full h-full absolute right-0 top-0 origin-right bg-white border border-zinc-200 rounded-bl-xl'>
                                    <div style = {{transform : ' rotateY(180deg) translateZ(150px)'}} className='absolute z-20 bg bg-indigo-500 w-full rounded-xl'>
                                    hello
                                    </div>
                                </div>

                                <div style={{transformStyle : 'preserve-3d', transform : "rotateX(90deg)"}} className='w-full aspect-square absolute right-0 top-0 origin-top bg-white border border-zinc-200 rounded-bl-xl'>
                                    <div style = {{transform : 'rotateX(180deg) translateY(-100%)'}} className='absolute z-20 bg bg-indigo-500 w-full rounded-xl'>
                                    hello
                                    </div>
                                </div>
                            </div>

                            <div className='animate-shadow w-2/3 aspect-[4/4] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-bl-3xl bg-zinc-400 origin-bottom'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services