import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { map, mapRounded } from '@/lib/helpers';
import { Copy, MoveDownLeft } from 'lucide-react';
import MagneticButton from '../magnetic-button/magnetic-button';
import logo from '@/../public/images/logo.png';
import Image from 'next/image';
import { toast } from 'sonner';

const Contact = () => {
    let containerRef = useRef(null);
    let linkRef = useRef(null);

    useGSAP((context, contextSafe) => {
        gsap.from('.title', {xPercent : -50, scrollTrigger : {
            trigger : containerRef.current,
            start : "top bottom",
            end : "bottom bottom",
            scrub : true
          }});

        gsap.from('.title-2', {xPercent : -50, scrollTrigger : {
          trigger : containerRef.current,
          start : "top bottom",
          end : "bottom bottom",
          scrub : true
        }});
    
        gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 100% 0 0)', scrollTrigger : {
          trigger : containerRef.current,
          start : "top bottom",
          end : "bottom bottom",
          scrub : true
        }});

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", (self) => {
          const outerCircle1TranslateX = gsap.quickTo(".outer-circle-1", "x", {duration : 0.5, ease : "power3.out"});
          const outerCircle2TranslateX = gsap.quickTo(".outer-circle-2", "x", {duration : 1, ease : "power3.out"});
          const outerCircle3TranslateX = gsap.quickTo(".outer-circle-3", "x", {duration : 1, ease : "power3.out"});
          const outerCircle4TranslateX = gsap.quickTo(".outer-circle-4", "x", {duration : 1, ease : "power3.out"});

          const outerCircle1TranslateY = gsap.quickTo(".outer-circle-1", "y", {duration : 0.5, ease : "power3.out"});
          const outerCircle2TranslateY = gsap.quickTo(".outer-circle-2", "y", {duration : 1, ease : "power3.out"});
          const outerCircle3TranslateY = gsap.quickTo(".outer-circle-3", "y", {duration : 1, ease : "power3.out"});
          const outerCircle4TranslateY = gsap.quickTo(".outer-circle-4", "y", {duration : 1, ease : "power3.out"});

          const outerCircle1ScaleX = gsap.quickTo(".outer-circle-1", "scaleX", {duration : 1, ease : "power3.out"});
          const outerCircle2ScaleX = gsap.quickTo(".outer-circle-2", "scaleX", {duration : 1, ease : "power3.out"});
          const outerCircle3ScaleX = gsap.quickTo(".outer-circle-3", "scaleX", {duration : 1, ease : "power3.out"});
          const outerCircle4ScaleX = gsap.quickTo(".outer-circle-4", "scaleX", {duration : 1, ease : "power3.out"});

          const outerCircle1ScaleY = gsap.quickTo(".outer-circle-1", "scaleY", {duration : 1, ease : "power3.out"});
          const outerCircle2ScaleY = gsap.quickTo(".outer-circle-2", "scaleY", {duration : 1, ease : "power3.out"});
          const outerCircle3ScaleY = gsap.quickTo(".outer-circle-3", "scaleY", {duration : 1, ease : "power3.out"});
          const outerCircle4ScaleY = gsap.quickTo(".outer-circle-4", "scaleY", {duration : 1, ease : "power3.out"});

          const rippleScaleX = gsap.quickTo(".link-ripple", "scaleX", {duration : 0.3, ease : "power3.out"});
          const rippleScaleY = gsap.quickTo(".link-ripple", "scaleY", {duration : 0.3, ease : "power3.out"});

          const onMouseMove = contextSafe((e) => {
              const { clientX, clientY } = e;
              const boundingBox = linkRef.current.getBoundingClientRect();
              const positionX = boundingBox.left + boundingBox.width/2;
              const positionY = boundingBox.top + boundingBox.height/2;
              const windowWidth = window.innerWidth;
              const windowHeight = window.innerHeight;

              const x1 = mapRounded(clientX - positionX, -windowWidth/2, windowWidth/2, -10, 10);
              const y1 = mapRounded(clientY - positionY, -windowHeight/2, windowHeight/2, -10, 10);

              const x2 = mapRounded(clientX - positionX, -windowWidth/2, windowWidth/2, -15, 15);
              const y2 = mapRounded(clientY - positionY, -windowHeight/2, windowHeight/2, -15, 15);

              const x3 = mapRounded(clientX - positionX, -windowWidth/2, windowWidth/2, -20, 20);
              const y3 = mapRounded(clientY - positionY, -windowHeight/2, windowHeight/2, -20, 20);

              const x4 = mapRounded(clientX - positionX, -windowWidth/2, windowWidth/2, -30, 30);
              const y4 = mapRounded(clientY - positionY, -windowHeight/2, windowHeight/2, -30, 30);

              const distance = Math.sqrt(Math.pow(clientX - positionX, 2) + Math.pow(clientY - positionY, 2));
              const maxDistance = windowWidth;

              const scale1 = map(distance, 0, maxDistance, 1, 1.05);
              const scale2 = map(distance, 0, maxDistance, 1, 1.1);
              const scale3 = map(distance, 0, maxDistance, 1, 1.18);
              const scale4 = map(distance, 0, maxDistance, 1, 1.3);
              outerCircle1TranslateX(x1);
              outerCircle1TranslateY(y1);
              outerCircle2TranslateX(x2);
              outerCircle2TranslateY(y2);
              outerCircle3TranslateX(x3);
              outerCircle3TranslateY(y3);
              outerCircle4TranslateX(x4);
              outerCircle4TranslateY(y4);

              outerCircle1ScaleX(scale1);
              outerCircle1ScaleY(scale1);
              
              outerCircle2ScaleX(scale2);
              outerCircle2ScaleY(scale2);

              outerCircle3ScaleX(scale3);
              outerCircle3ScaleY(scale3);

              outerCircle4ScaleX(scale4);
              outerCircle4ScaleY(scale4);
          });

          const onMouseLeave = contextSafe((e) => {
            outerCircle1TranslateX(0);
            outerCircle1TranslateY(0);
            outerCircle2TranslateX(0);
            outerCircle2TranslateY(0);
            outerCircle3TranslateX(0);
            outerCircle3TranslateY(0);
            outerCircle4TranslateX(0);
            outerCircle4TranslateY(0);

            outerCircle1ScaleX(1);
            outerCircle1ScaleY(1);
            
            outerCircle2ScaleX(1);
            outerCircle2ScaleY(1);

            outerCircle3ScaleX(1);
            outerCircle3ScaleY(1);

            outerCircle4ScaleX(1);
            outerCircle4ScaleY(1);
          });

          const onMouseEnterLink = contextSafe((e) => {
            containerRef.current.removeEventListener("mousemove", onMouseMove);
            containerRef.current.removeEventListener("mouseleave", onMouseLeave);

            const { clientX, clientY } = e;
            const boundingBox = linkRef.current.getBoundingClientRect();
            const left = boundingBox.left;
            const top = boundingBox.top;
            const linkWidth = boundingBox.width;
            const linkHeight = boundingBox.height;

            const rippleOriginX = Math.round((clientX - left)/linkWidth * 100);
            const rippleOriginY = Math.round((clientY - top)/linkHeight * 100);

            console.log('xPercent', rippleOriginX);
            console.log('yPercent', rippleOriginY);

            gsap.set('.link-ripple', {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});

            rippleScaleX(1);
            rippleScaleY(1);

            outerCircle1TranslateX(0);
            outerCircle1TranslateY(0);
            outerCircle2TranslateX(0);
            outerCircle2TranslateY(0);
            outerCircle3TranslateX(0);
            outerCircle3TranslateY(0);
            outerCircle4TranslateX(0);
            outerCircle4TranslateY(0);

            outerCircle1ScaleX(1);
            outerCircle1ScaleY(1);
            
            outerCircle2ScaleX(1);
            outerCircle2ScaleY(1);

            outerCircle3ScaleX(1);
            outerCircle3ScaleY(1);

            outerCircle4ScaleX(1);
            outerCircle4ScaleY(1);
          });

          const onMouseLeaveLink = contextSafe((e) => {
            containerRef.current.addEventListener("mousemove", onMouseMove);
            containerRef.current.addEventListener("mouseleave", onMouseLeave);

            const { clientX, clientY } = e;
            const boundingBox = linkRef.current.getBoundingClientRect();
            const left = boundingBox.left;
            const top = boundingBox.top;
            const linkWidth = boundingBox.width;
            const linkHeight = boundingBox.height;

            const rippleOriginX = Math.round((clientX - left)/linkWidth * 100);
            const rippleOriginY = Math.round((clientY - top)/linkHeight * 100);

            console.log('xPercent', rippleOriginX);
            console.log('yPercent', rippleOriginY);

            gsap.set('.link-ripple', {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});

            rippleScaleX(0);
            rippleScaleY(0);

            xLinkTo(0);
            yLinkTo(0);

            xTitleTo(0);
            yTitleTo(0);

            // scaleXLinkTo(1);
            // scaleYLinkTo(1);
          });

          const xLinkTo = gsap.quickTo(linkRef.current, "x", {duration : 1.5, ease : "elastic.out(1, 0.5)"});
          const yLinkTo = gsap.quickTo(linkRef.current, "y", {duration : 1.5, ease : "elastic.out(1, 0.5)"});
          // const scaleXLinkTo = gsap.quickTo(linkRef.current, "scaleX", {duration : 0.3, ease :"power3.out"});
          // const scaleYLinkTo = gsap.quickTo(linkRef.current, "scaleY", {duration : 0.3, ease :"power3.out"});
          
          const xTitleTo = gsap.quickTo(".link-title", "x", {duration : 1.5, ease : "elastic.out(1, 0.5)"});
          const yTitleTo = gsap.quickTo(".link-title", "y", {duration : 1.5, ease : "elastic.out(1, 0.5)"});
          
          const strengthX = 0.6;
          const strengthY = 0.3;
            
          const onMouseMoveLink = contextSafe((e) => {
            const {clientX, clientY} = e;
            const {width, height, left, top} = linkRef.current.getBoundingClientRect();
            const containerX = (clientX - (left + width/2))*strengthX;
            const containerY = (clientY - (top + height/2))*strengthY;
  
            const iconX = 500 * containerX / window.innerWidth;
            const iconY = 500 * containerY / window.innerHeight;
  
            xLinkTo(containerX);
            yLinkTo(containerY);

            xTitleTo(iconX);
            yTitleTo(iconY);

            outerCircle1TranslateX(containerX*0.95);
            outerCircle1TranslateY(containerY*0.95);
            outerCircle2TranslateX(containerX*0.9);
            outerCircle2TranslateY(containerY*0.9);
            outerCircle3TranslateX(containerX*0.82);
            outerCircle3TranslateY(containerY*0.82);
            outerCircle4TranslateX(containerX*0.7);
            outerCircle4TranslateY(containerY*0.7);
              
            // scaleXLinkTo(1.15);
            // scaleYLinkTo(1.15);
          });

          containerRef.current.addEventListener("mousemove", onMouseMove);
          containerRef.current.addEventListener("mouseleave", onMouseLeave);
          linkRef.current.addEventListener("mouseenter", onMouseEnterLink);
          linkRef.current.addEventListener("mouseleave", onMouseLeaveLink);
          linkRef.current.addEventListener("mousemove", onMouseMoveLink);
          return () => {
            containerRef.current.removeEventListener("mousemove", onMouseMove);
            containerRef.current.removeEventListener("mouseleave", onMouseLeave);
            linkRef.current.removeEventListener("mouseenter", onMouseEnterLink);
            linkRef.current.removeEventListener("mouseleave", onMouseLeaveLink);
            linkRef.current.removeEventListener("mousemove", onMouseMoveLink);
          }
        });

        gsap.to('.curve', {scaleY : 0, scrollTrigger : {
          trigger : containerRef.current,
          start : "top bottom",
          end : "90% bottom",
          scrub : true
        }});

        return () => {
          mm.revert();
        }
    }, {scope : containerRef});
  return (
    <footer ref = {containerRef} className = "section px-nav pb-nav pt-[calc(var(--padding-nav)*3.6)] text-white w-full relative z-30  flex flex-col items-center justify-start bg-black overflow-hidden">
      <svg className='curve w-full aspect-[3/2] absolute top-0 left-0 z-10 origin-top drop-shadow-2xl' viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d = "m0 0h100v100Q50 0 0 100Z" className = "fill-white z-50"></path>
      </svg>
      <div className='flex items-start justify-between max-w-5xl w-full'>
        <div className=' flex flex-col items-start justify-start  '>
          <h2 className = "title font-secondary font-black text-start text-white text-h3 md:text-h2 drop-shadow-md w-min text-nowrap px-5 leading-tight">Me<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90 px-5'>Me</span></h2>
          <h2 className = "title-2 font-secondary font-black text-start text-white text-h3 md:text-h2 drop-shadow-md w-min text-nowrap px-5 leading-tight">Joindre<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-90 px-5'>Joindre</span></h2>
        </div>
        <div className='flex-1 flex flex-col gap-4 items-end'>
          <div className='flex gap-2 items-end'>
            <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Via le site</span>
            <MoveDownLeft size={16}/>
          </div>
          <div className='w-40 h-20 md:w-48 md:h-24 lg:w-60 relative'> 
            <div className='outer-circle-1 absolute top-0 left-0 h-full w-full origin-center bg-transparent border-2 border-white rounded-full pointer-events-none opacity-80'/>
            <div className='outer-circle-2 absolute top-0 left-0 h-full w-full origin-center bg-transparent border-2 border-white rounded-full pointer-events-none opacity-60'/>
            <div className='outer-circle-3 absolute top-0 left-0 h-full w-full origin-center bg-transparent border-2 border-white rounded-full pointer-events-none opacity-50'/>
            <div className='outer-circle-4 absolute top-0 left-0 h-full w-full origin-center bg-transparent border-2 border-white rounded-full pointer-events-none opacity-40'/>
            <Link ref= {linkRef} href = "/contact" scroll = {false} className = "group w-full h-full flex items-center justify-center text-black bg-white font-primary font-bold text-h6 md:text-h5 rounded-full cursor-pointer relative overflow-hidden">
              <div className='link-ripple w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-regular rounded-full scale-0 pointer-events-none'></div>
              <span className='link-title md:group-hover:text-white ease-out transition-colors duration-200'>Allons-y !</span>
            </Link>
          </div>
        </div>

      </div>

      <div className='w-full max-w-5xl bg-zinc-500 h-px my-16'></div>
      <div className='flex w-full max-w-5xl flex-col lg:flex-row gap-12'>
        <div className='flex justify-start flex-1'>
          <div className='flex flex-col w-44 items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Liens</span>
              <MoveDownLeft size={16}/>
            </div>
            <Link scroll = {false} href={'/projects'} className='font-primary font-semibold text-h5 text-white mt-4'>Projets</Link>
            <Link scroll = {false} href={'/contact'} className='font-primary font-semibold text-h5 text-white mt-1'>contact</Link>
          </div>
          <div className='flex flex-col w-44 items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Réseaux</span>
              <MoveDownLeft size={16}/>
            </div>
            <Link scroll = {false} href={'https://dribbble.com/AansNEJMI'} className='font-primary font-semibold text-h5 text-white mt-4'>Dribble</Link>
            <Link scroll = {false} href={'https://github.com/AnasNEJMI'} className='font-primary font-semibold text-h5 text-white mt-1'>Github</Link>
          </div>
        </div>
        <div className='flex flex-col gap-8 justify-start flex-1'>
          <div className='flex flex-col items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>E-Mail</span>
              <MoveDownLeft size={16}/>
            </div>
            <div className='flex items-center justify-between gap-4 mt-4'>
              <Link scroll = {false} href={'mailto:anasnejmi@gmail.com'} className='font-primary font-semibold text-h5 text-white'>anasnejmi@gmail.com</Link>
              <MagneticButton onClick={() => {
                  navigator.clipboard.writeText('07 80 12 60 77')
                  toast('Numéro de télephone copié avec succès')
                }} className='rounded-full w-10 md:w-10 h-10 md:h-10 md:px-0 px-0 py-0 bg-zinc-900 border border-white'>
                <Copy size={16}/>
              </MagneticButton>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <div className='flex gap-2 items-end'>
              <span className='font-secondary font-bold text-caption text-zinc-300 uppercase tracking-widest'>Tél</span>
              <MoveDownLeft size={16}/>
            </div>
            <div className='flex items-center justify-between gap-4  mt-1'>
              <Link scroll = {false} href={'tel:07 80 12 60 77'} className='font-primary font-semibold text-h5 text-white'>(+33) 07 80 12 60 77</Link>
              <MagneticButton onClick={() => {
                  navigator.clipboard.writeText('07 80 12 60 77')
                  toast('Numéro de télephone copié avec succès')
                }} className='rounded-full w-10 md:w-10 h-10 md:h-10 md:px-0 px-0 py-0 bg-zinc-900 border border-white'>
                <Copy size={16}/>
              </MagneticButton>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className = "w-full h-full max-w-5xl mt-16 font-primary flex flex-col justify-end">
        <div className='w-full  h-px opacity-70 bg-white '></div>
        <div className='w-full flex items-start justify-between mt-4 '>
          <Link scroll= {false} href = "/" className = "flex items-start justify-center mix-blend-difference">
            <Image src = {logo} alt = "Portfolio logo" width = {48} height = {24} className="invert"/>
          </Link >
          <div className='text-caption text-white flex flex-col items-end'>
            <span className='opacity-70'>Version</span>
            <span className='text-white'>2024/2025</span>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Contact