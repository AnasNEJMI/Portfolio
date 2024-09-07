import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
    let containerRef = useRef(null);

    useGSAP((context, contextSafe) => {
        gsap.from('.title', {xPercent : 50, scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "top top",
            scrub : true
          }});
      
          gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 100% 0 0)', scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "top top",
            scrub : true
          }});
    }, {scope : containerRef});
  return (
    <footer ref = {containerRef} className = "section h-screen pt-[calc(var(--padding-nav)*4)] pl-nav pr-nav md:pt-[calc(var(--padding-nav)*3)] lg:pt-[calc(var(--padding-nav)*2)] text-white w-full flex flex-col items-end justify-start relative z-30 bg-black overflow-hidden">
        <h2 className = "title font-secondary font-black text-start text-white text-h1 drop-shadow-md w-min text-nowrap pr-5">Collaborons<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90'>Collaborons</span></h2>
        <h2 className = "title font-secondary font-black text-start text-white text-h1 drop-shadow-md w-min text-nowrap pr-5">Ensemble !<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90'>Ensemble !</span></h2>
    </footer>
  )
}

export default Contact