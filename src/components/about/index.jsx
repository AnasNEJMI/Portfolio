import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { title } from 'process';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const about = "Fort de ma formation en  et développement au sein de la meilleure école d'ingénieurs en télécommunications de France, je combine passion et expertise pour offrir des solutions sur mesure. Chaque projet allie esthétique, performance, et fonctionnalité, tout en respectant les exigences de qualité et la vision unique de mes clients."
const about1 = "Fort de ma formation de pointe au sein de l'une des la meilleures écoles d'ingénieurs de France, je combine passion et expertise pour vous offrir des solutions sur mesure, qui respectent vos exigences de qualité et votre vision unique."
const About = () => {
  let containerRef = useRef(null);

  useGSAP((context, contextSafe) => {
    const aboutMainTranslateY = gsap.quickTo(".clipped-word", "yPercent", {duration : 1.5, ease : "power1.out"});
    const aboutSubTranslateY = gsap.quickTo(".about-sub", "yPercent", {duration : 1.5, ease : "power1.out", delay :5});
    const aboutSubOpacity = gsap.quickTo(".about-sub", "opacity", {duration : 1.5, ease : "power1.out", delay :5});
    gsap.from('.title', {xPercent : -50, scrollTrigger : {
      trigger : containerRef.current,
      start : "top bottom",
      end : "top top",
      scrub : true
    }});

    gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 0 0 100%)', scrollTrigger : {
      trigger : containerRef.current,
      start : "top bottom",
      end : "top top",
      scrub : true
    }});

    ScrollTrigger.create({
      trigger : containerRef.current,
      start : "50% bottom",
      scrub : true,
      onEnter : () => {
        aboutMainTranslateY(-100);
        aboutSubTranslateY(-25)
        aboutSubOpacity(1);
        // gsap.fromTo('.clipped-word', {yPercent : 100}, {yPercent : 0, ease : "power3.out",duration : 1.2});
    }});

    gsap.fromTo('.curve',{scaleY: 0.8}, {scaleY : 0, scrollTrigger : {
      trigger : containerRef.current,
      start : "bottom bottom",
      end : "bottom top",
      scrub : true
    }})
      
      // gsap.to('.svg-path', {{attr : }})
    // gsap.fromTo('.about-word', {yPercent : -100}, {yPercent : 0, ease : "power1.inOut", scrollTrigger : {
    //   trigger : containerRef.current,
    //   start : "top+=300px bottom",
    //   end : "+=600px",
    //   markers : true,
    //   scrub : true
    // }});

    // ScrollTrigger.create({
    //   trigger : containerRef.current,
    //   start : "top top",
    //   end : "+=300px",
    //   markers : true,
    //   scrub : true});

  }, {scope : containerRef});
  return (
    <section ref = {containerRef} className='relative py-section pl-nav pr-nav flex items-center justify-center z-10 bg-zinc-50 overflow-hidden'>
      <div className = "w-full max-w-7xl rounded-3xl">
        <h2 className = "title font-secondary font-black text-start text-black text-h1 drop-shadow-md w-min text-nowrap pr-5">Qui suis-je?<span className='clipped-title absolute top-0 left-0 w-full h-full text-white opacity-75'>Qui suis-je?</span></h2>
        <div className='flex items-start justify-start flex-col lg:flex-row lg:justify-between gap-12  mt-6'>
          <div className = "w-full max-w-2xl flex flex-wrap gap-x-1 md:gap-x-2 gap-y-0">
              {
                about1.split(' ').map((word, index) => {
                  if (["passion", "expertise", "exigences", "vision", "unique."].includes(word)){
                    console.log(word);
                    return <div key={`word-${index}`} className='about-word font-primary font-bold text-h6 md:text-h5 text-nowrap overflow-hidden'><div className='clipped-word relative text-primary-regular top-full h-min'>{word}</div></div>
                  }else{
                    return <div key={`word-${index}`} className='about-word font-primary font-normal text-h6 md:text-h5 text-nowrap overflow-hidden'><div style = {{transform : 'translateY(100%)'}} className='clipped-word relative text-black'>{word}</div></div>
                  }
                })
              }
              {/* <p className = "mt-4 font-primary font-normal text-h6 sm:text-h5 leading-snug text-justify">
                  <span>Fort de ma formation de pointe au sein de l&apos;une des la meilleures écoles d&apos;ingénieurs de France, </span>
                  <span>je combine <span className='font-bold'>passion</span> et <span className='font-bold'>expertise</span> pour offrir des solutions sur mesure, </span>
                  <span>qui respectent vos <span className='font-bold'>exigences de qualité</span> et votre <span className='font-bold'>vision unique</span>.</span>
              </p> */}
              {/* <p className = "mt-6 text-black font-primary font-normal text-h6 text-pretty max-w-2xl">
                  <span>Chaque projet allie :</span>
              </p>
              <ul className='flex-col ml-3 pt-2 gap-2 font-primary font-normal text-h6 text-pretty list-item list-disc'>
                <li className='font-bold text-white w-min'>Esthétique</li>
                <li className='font-bold text-white w-min'>Performance</li>
                <li className='font-bold text-white w-min'>Fonctionnalité</li>
              </ul> */}
          </div> 
          <div className = " w-full flex flex-col justify-end max-w-md">
            <p  style={{opacity : 0}} className='about-sub font-primary text-body md:text-h6 relative top-1/2 text-justify'>Chaque site web et application que je conçois offre une expérience exceptionnelle, alliant <span className = "font-bold text-primary-regular">performance</span>, <span className = "font-bold text-primary-regular">élégance</span> et <span className = "font-bold text-primary-regular">fonctionnalité</span>, pour captiver et fidéliser vos utilisateurs.</p>
            <div className='w-full flex-1 min-w-80 p-nav flex items-center justify-center'>
                <Link href='/about' scroll = {false} className='bg-black text-white font-primary font-light text-h5 w-min text-nowrap px-12 rounded-full py-6'>
                    Mon Parcours
                </Link>
            </div>
          </div>
        </div>
      </div>  

      {/* <svg className='curve absolute -bottom-2 left-0 w-full h-1/2 pointer-events-none z-10 origin-bottom' viewBox="0 0 100 100" preserveAspectRatio="none">
        <path fill = 'black' d = "M0 0Q50 150 100 0V100H0V0Z"></path>
      </svg> */}
    </section>
  )
}

export default About