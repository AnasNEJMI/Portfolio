import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Magnetic from '../basic_magnetic_item';


// const about = "Fort de ma formation de pointe au sein de l'une des la meilleures écoles d'ingénieurs de France, je combine passion et savoir-faire pour vous offrir des solutions sur mesure, qui respectent vos exigences de qualité et votre vision unique."
const about = "Formé au sein de l'une des meilleures écoles d'ingénieurs de France, j\'ai acquis une solide expertise technique que je mets au service de projets web ambitieux."
const aboutContd = "Ma passion pour le développement et mon exigence de qualité me poussent à proposer des solutions à la fois robustes , modernes et centrées sur l\'utilisateur."
const About = () => {
  let containerRef = useRef(null);

  useGSAP((context, contextSafe) => {
    const aboutMainTranslateY = gsap.quickTo(".clipped-word", "yPercent", {duration : 1, ease : "power1.out"});
    gsap.from('.title', {xPercent : -10, scrollTrigger : {
      trigger : '.title',
      start : "top bottom",
      end : "top center",
      scrub : true
    }});

    gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 100% 0 0)', scrollTrigger : {
      trigger : '.title',
      start : "top bottom",
      end : "center center",
      scrub : true
    }});

    const profileImageWrapperTranslateY = gsap.quickSetter('.profile-image-wrapper', "yPercent");
    const profileImageTranslateY = gsap.quickSetter('.profile-image', "yPercent");


    ScrollTrigger.create({
      trigger : '.title',
      start : "center center",
      scrub : true,
      onEnter : () => {
        aboutMainTranslateY(-100);
    }});

    ScrollTrigger.create({
      trigger : containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      ease : "power3.out",
      onUpdate : (self) => {
        profileImageWrapperTranslateY(-self.progress*10);
        profileImageTranslateY(self.progress*40);
    }});

  }, {scope : containerRef});
  return (
    <section ref = {containerRef} className='relative pl-nav pr-nav flex items-center justify-center z-20'>
      <div className = "wrapper w-full max-w-7xl rounded-3xl bg-zinc-900 pl-nav pr-nav py-section  overflow-hidden">
        <h2 className = "title font-secondary font-black text-start text-white text-h1 drop-shadow-md w-min text-nowrap pr-5">Qui suis-je?<span className='clipped-title absolute top-0 left-0 w-full h-full text-black opacity-75'>Qui suis-je?</span></h2>
        <div className='flex items-start justify-start flex-col-reverse lg:flex-row lg:justify-between gap-12  mt-12'>
          <div className='flex flex-col gap-8 items-center w-full justify-center grow h-max'>
            <div className = "w-full max-w-2xl flex flex-wrap gap-x-1 md:gap-x-2 gap-y-0">
                {
                  about.split(' ').map((word, index) => {
                    if (["meilleures", "expertise"].includes(word)){
                      return <div key={`word-${index}`} className='about-word font-primary font-bold text-h6 md:text-h5 text-nowrap overflow-hidden'><div className='clipped-word relative text-primary-regular top-full h-min'>{word}</div></div>
                    }else{
                      return <div key={`word-${index}`} className='about-word font-primary font-normal text-h6 md:text-h5 text-nowrap overflow-hidden'><div style = {{transform : 'translateY(100%)'}} className='clipped-word relative text-white'>{word}</div></div>
                    }
                  })
                }
            </div> 
            <div className = "w-full max-w-2xl flex flex-wrap gap-x-1 md:gap-x-2 gap-y-0">
                {
                  aboutContd.split(' ').map((word, index) => {
                    if (["passion", "expertise", "qualité", "robustes", "modernes"].includes(word)){
                      return <div key={`word-${index}`} className='about-word font-primary font-bold text-h6 md:text-h5 text-nowrap overflow-hidden'><div className='clipped-word relative text-primary-regular top-full h-min'>{word}</div></div>
                    }else{
                      return <div key={`word-${index}`} className='about-word font-primary font-normal text-h6 md:text-h5 text-nowrap overflow-hidden'><div style = {{transform : 'translateY(100%)'}} className='clipped-word relative text-white'>{word}</div></div>
                    }
                  })
                }
            </div> 
            <div className='flex items-center justify-center mt-8'>
              <div className='w-min min-w-40'>
                <Magnetic>
                        <Link href='/about' scroll = {false} className='bg-white text-black font-primary font-light text-h5 w-min text-nowrap px-12 rounded-full py-6'>
                            Mon Parcours
                        </Link>
                </Magnetic>

              </div>
            </div>
            
            {/* <div className='w-full flex flex-col justify-end text-white'>
              <p  style={{opacity : 0}} className='about-sub font-primary text-body md:text-h6 relative top-1/2 text-justify'>Chaque site web et application que je conçois offre une expérience exceptionnelle, alliant <span className = "font-bold text-primary-regular">performance</span>, <span className = "font-bold text-primary-regular">élégance</span> et <span className = "font-bold text-primary-regular">fonctionnalité</span>, pour captiver et fidéliser vos utilisateurs.</p>
            </div> */}
          </div>
          <div className = " w-full flex flex-col justify-center items-center  text-white">
            <div className='profile-image-wrapper w-full max-w-md aspect-[3/4] rounded-xl bg-white overflow-hidden flex items-center justify-center'>
                <div className='profile-image text-black text-h2 w-[125%] aspect-[3/4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minus ut facilis quia repudiandae repellendus unde praesentium, rem eos qui eum! Eius, inventore! Fugiat, saepe deleniti similique soluta totam aliquid?</div>
            </div>
          </div>
        </div>
          
      </div>  
    </section>
  )
}

export default About