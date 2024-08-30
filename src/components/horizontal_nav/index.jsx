import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HorizontalNav = () => {
    // let containerRef = useRef(null);

    // useEffect(() => {
    //   const container = containerRef.current;
    //   console.log("hello intersection");
    //   const options = {
    //     root : null,
    //     rootMargin : '0px 0px 0px 0px',
    //     threshold : Array.from({length : 101}, (_, i) => i/100),
    //   }

    //   const callback = (entries) => {
    //     entries.forEach(entry => {
    //       console.log(entry);
    //       if(entry.isIntersecting){
    //         console.log("enter");
    //         console.log(`Intersection %: ${entry.intersectionRatio.toFixed(2)}`)
    //       }else{
    //         console.log("exit");
    //       }
    //     });
    //   }

    //   const observer = new IntersectionObserver(callback, options);

    //   if(container){
    //     observer.observe(container);
    //   }

    //   return () => {
    //     if(container){
    //       observer.unobserve(container);
    //     }
    //   }
    // }, []);

    // useGSAP(() => {
    //     let mm = gsap.matchMedia();


    //     mm.add("(min-width: 768px)", () => {
    //         const translateNavY = gsap.quickTo(containerRef.current, "y", {duration : 0.25, ease : "power1.out"});
    //         ScrollTrigger.create({
    //             trigger : document.documentElement,
    //             start : 0,
    //             end : window.innerHeight/6,
    //             onUpdate: throttle(e => {
    //                     console.log(e.progress);
    //                     translateNavY(-e.progress*200);
    //                     }, 16)
    //             ,
    //             //PERFORMANCE IMPROVEMENT
    //             // onEnterBack: (e) => {
    //             //     console.log("enter back");
    //             //     // gsap.to(containerRef.current, {scale : 0, duration : 0.25, ease : "power1.out"})
    //             //     translateNavY(e.progress*200);
    //             // },
    //             // onLeave: () => {
    //             //     console.log("leave");
    //             //     // gsap.to(containerRef.current, {scale : 1, duration : 0.25, ease : "power1.out"})
    //             //     translateNavY(e.progress*200);
    //             // }
    //         });
    //     });
        
    // }, {scope : containerRef})

  return (
    <nav className="flex w-full justify-start md:justify-between relative z-20">
        <Link href = "/" className = "h-16 flex items-center justify-center">
          <Image src = "/images/logo.svg" alt = "Logo" width = {80} height = {80} className="h-auto"/>
        </Link >

        <ul  className = "hidden md:flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-6">
            <li><Link href = "/about" className = "py-4 px-7 rounded-full text-body font-semibold">À Propos</Link></li>
            <div className = "h-6 w-px bg-black"></div>
            <li><Link href = "/" className = "py-4 px-7 rounded-full text-body font-semibold">Projets</Link></li>
        </ul>
        <Link href = "/" className = "h-16 hidden md:flex items-center justify-center text-body font-semibold">Me Contacter</Link>
    </nav>
  )
}

export default HorizontalNav