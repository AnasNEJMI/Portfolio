import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { map } from '@/lib/helpers';

interface CurtainSetter{
  opacity : Function,
  start : number, 
  end : number};
  
// const about = "Fort de ma formation de pointe au sein de l'une des la meilleures écoles d'ingénieurs de France, je combine passion et savoir-faire pour vous offrir des solutions sur mesure, qui respectent vos exigences de qualité et votre vision unique."
const about = "Formé au sein de l'une des meilleures écoles d'ingénieurs de France, j\'ai acquis une solide expertise technique que je mets au service de projets ambitieux."
const bio = "Designer & Développeur passionné, j'ai été formé à l'école d'ingénieur de Télécom ParisTech, où je me suis spécialisé dans le développement logiciel, l'algorithmique et la conception de systèmes."
const bioCtd = "Rigoureux et polyvalant, je mets en oeuvre mon savoir-faire en tant que designer et développeur full-stack pour booster les entreprises comme la votre et pour créer des expériences digitales marquantes."


// const aboutContd = "Ma passion pour le développement et mon exigence de qualité me poussent à proposer des solutions à la fois robustes , modernes et centrées sur l\'utilisateur."


const HomeAbout = () => {
  let containerRef = useRef(null);

  useGSAP((context, contextSafe) => {

    gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 100% 0 0)', scrollTrigger : {
      trigger : '.title',
      start : "200% bottom",
      end : "center center",
      scrub : true,
    }});


    const profileImageWrapperTranslateY = gsap.quickSetter('.profile-image-wrapper', "yPercent");
    const profileImageTranslateY = gsap.quickSetter('.profile-image', "yPercent");


    const imgScroll = ScrollTrigger.create({
      trigger : containerRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      onUpdate : (self) => {
        profileImageWrapperTranslateY(-self.progress*10);
        profileImageTranslateY(self.progress*40);
    }});

    const bioCurtains = gsap.utils.toArray('.bio-curtain');
    const bioWords = gsap.utils.toArray('.bio-word');

    const bioCurtainSetters : CurtainSetter[] = bioCurtains.map((curtain, index) => {
      const start = (1/bioCurtains.length)*index;
      const end = (1/bioCurtains.length)*(index+1);
      return {
        opacity : gsap.quickSetter((curtain as gsap.TweenTarget) , 'opacity'),
        start : start,
        end : end
      };
    })
    const bioWordSetters : CurtainSetter[] = bioWords.map((word, index) => {
      const start = (1/bioWords.length)*index;
      const end = (1/bioWords.length)*(index+1);
      return {
        opacity : gsap.quickSetter((word as gsap.TweenTarget) , 'opacity'),
        start : start,
        end : end
      };
    })

    const bioCurtainScroll = ScrollTrigger.create({
      trigger : '.bio-wrapper',
      start : "center bottom",
      end : "bottom bottom",
      scrub : 5,
      onUpdate : (self) => {
        bioCurtainSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 0, 1))
        });
        
        
    }});
    const bioWordScroll = ScrollTrigger.create({
      trigger : '.bio-wrapper',
      start : "bottom bottom",
      end : "center center",
      onUpdate : (self) => {
        bioCurtainSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 1, 0))
        });
        bioWordSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 0, 1))
        });
    }});

    const bioCtdCurtains = gsap.utils.toArray('.bioCtd-curtain');
    const bioCtdWords = gsap.utils.toArray('.bioCtd-word');

    const bioCtdCurtainSetters : CurtainSetter[] = bioCtdCurtains.map((curtain, index) => {
      const start = (1/bioCtdCurtains.length)*index;
      const end = (1/bioCtdCurtains.length)*(index+1);
      return {
        opacity : gsap.quickSetter((curtain as gsap.TweenTarget) , 'opacity'),
        start : start,
        end : end
      };
    })
    const bioCtdWordSetters : CurtainSetter[] = bioCtdWords.map((word, index) => {
      const start = (1/bioCtdWords.length)*index;
      const end = (1/bioCtdWords.length)*(index+1);
      return {
        opacity : gsap.quickSetter((word as gsap.TweenTarget) , 'opacity'),
        start : start,
        end : end
      };
    })

    const bioCtdCurtainScroll = ScrollTrigger.create({
      trigger : '.bioCtd-wrapper',
      start : "bottom bottom",
      end : "top center",
      scrub : 3.5,
      onUpdate : (self) => {
        bioCtdCurtainSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 0, 1))
        });
        
        
    }});
    const bioCtdWordScroll = ScrollTrigger.create({
      trigger : '.bioCtd-wrapper',
      start : "top center",
      end : "bottom center",
      onUpdate : (self) => {
        bioCtdCurtainSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 1, 0))
        });
        bioCtdWordSetters.forEach((element) => {
          element.opacity(map(self.progress, element.start, element.end, 0, 1))
        });
    }});


    return () => {
      bioCurtainScroll.kill();
      bioWordScroll.kill();
      bioCtdCurtainScroll.kill();
      bioCtdWordScroll.kill();
      imgScroll.kill()
    }
  }, {scope : containerRef});
  return (
    <section ref = {containerRef} className='section relative pl-nav pr-nav flex items-center justify-center z-20 mt-20 md:mt-32 lg:mt-40 pb-20 md:pb-60'>
      <div className='background bg-zinc-900 absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
        
      </div>
      <div className = "wrapper w-full max-w-5xl rounded-3xl py-32 md:py-40  overflow-hidden">
        <div className='w-full flex items-center justify-center md:justify-start'>
          <h2 className = "title font-secondary font-black text-center md:text-start text-primary-regular text-h2 drop-shadow-md w-min text-nowrap">Qui suis-je?<span className='clipped-title absolute top-0 left-0 w-full h-full text-white'>Qui suis-je?</span></h2>
        </div>
          
        <div className='flex items-start justify-start flex-col lg:flex-row lg:justify-between gap-24 mt-20 md:mt-32'>
          <div className='flex flex-col gap-24 items-center w-full justify-center grow mb-96 lg:mb-0'>
            <div className='bio-wrapper w-full flex flex-wrap items-center justify-center md:justify-start max-w-5xl gap-[2px] md:gap-1'>
              {
                bio.split(' ').map((word, index)=> (
                  <div key={index} className='relative text-white p-px md:p-1 overflow-hidden rounded-full'>
                    <div className='bio-curtain absolute top-0 left-0 w-full h-full rounded-full z-20 bg-zinc-800 opacity-0'></div>
                    <div className='bio-word relative z-10 font-primary font-medium text-h5 md:text-h3 opacity-0'>{word}</div>
                  </div>
                ))
              }
            </div>
            <div className='bioCtd-wrapper w-full flex flex-wrap items-center justify-center md:justify-start max-w-5xl  gap-[2px] md:gap-1 '>
              {
                bioCtd.split(' ').map((word, index)=> (
                  <div key={index} className='relative text-white p-px md:p-1 overflow-hidden rounded-full'>
                    <div className='bioCtd-curtain absolute top-0 left-0 w-full h-full rounded-full z-20 bg-zinc-800 opacity-0'></div>
                    <div className='bioCtd-word relative z-10 font-primary font-medium text-h5 md:text-h3 opacity-0'>{word}</div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
          
      </div>  
    </section>
  )
}

export default HomeAbout