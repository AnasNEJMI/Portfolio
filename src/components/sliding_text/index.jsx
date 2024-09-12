import React, {useRef, useLayoutEffect, useEffect} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const SlidingText = ({text, initialDirection}) => {

    const containerRef = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const timeline = useRef();

    useGSAP((context, contextSafe) => {
        // timeline.current = gsap.timeline({repeat : Infinity});
        // timeline.current.set(firstText.current, {xPercent : 100, duration : 10, ease : 'none'});
        gsap.to(firstText.current, {xPercent : 100, duration : 10, ease : 'none', repeat : Infinity});
        // gsap.to(containerRef.current, {
        //     scrollTrigger : {
        //         trigger : containerRef.current,
        //         onUpdate : e => direction.current = e.direction * initialDirection,
        //     },
        // })
  
        // const animate = () => {
        // if(xPercent.current < -100){
        //     xPercent.current = 0;
        // }else if (xPercent.current > 0){
        //     xPercent.current = -100;
        // }
        
        // if(firstText.current){
        //     gsap.set(firstText.current, {xPercent : xPercent.current});
        // }

        // requestAnimationFrame(animate);
        // xPercent.current += 0.005 * direction.current;
        // }
        
        // animate();
    });

    // useLayoutEffect(() => {
    //   let context = gsap.context((self) => {
    //     gsap.to(containerRef.current, {
    //       scrollTrigger : {
    //           trigger : containerRef.current,
    //           onUpdate : e => direction.current = e.direction * initialDirection,
    //       },
    //       // x : "-500px",
    //     })

    //     const animate = () => {
    //       if(xPercent.current < -100){
    //           xPercent.current = 0;
    //       }else if (xPercent.current > 0){
    //           xPercent.current = -100;
    //       }
          
    //       if(firstText.current){
    //         gsap.set(firstText.current, {xPercent : xPercent.current});
    //       }

    //       requestAnimationFrame(animate);
    //       xPercent.current += 0.005 * direction.current;
    //     }
        
    //     animate();
    //   });

    //   return () => {
    //     context.revert();
    //   }
    //   }, [])

    
  return (
    <div ref={containerRef} className='relative whitespace-nowrap flex justify-start text-h5 font-medium'>
        <h2 ref={firstText} className='relative m-0  flex justify-start font-primary'>
          {text} <span className='opacity-0'> .</span>
          <span className='absolute right-full top-0 m-0 font-moriRegular'>{text} <span className='opacity-0'> .</span> </span>
          <span className='absolute right-[200%] top-0 m-0 font-moriRegular'>{text} <span className='opacity-0'> .</span> </span>
          <span className='absolute right-[300%] top-0 m-0 font-moriRegular'>{text} <span className='opacity-0'> .</span> </span>
        </h2>
        
    </div>
)
}

export default SlidingText