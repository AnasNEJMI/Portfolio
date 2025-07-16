import React, { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ProjectCard from '@/components/project-card/project-card';
import profile from '../../../public/images/c2.jpg';
import MagneticButton from '../magnetic-button/magnetic-button'
import { ScrollTrigger } from 'gsap/all';
import { ProjectsData } from '@/utils/helper_functions';

const HomeProjects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

    useGSAP((context, contextSafe) => {
      gsap.from('.title', {yPercent: -200, scrollTrigger : {
        trigger : '.title',
        start : "top bottom",
        end : "center top",
        scrub : true
      }});

      gsap.fromTo('.clipped-title', {clipPath : 'inset(0 0 0 0)'}, {clipPath : 'inset(0 0 0 100%)', scrollTrigger : {
        trigger : '.title',
        start : "top bottom",
        end : "center center",
        scrub : true
      }});

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
          gsap.fromTo('.project-image', {yPercent : 3}, {yPercent : -3, scrollTrigger : {
            trigger : cardsRef.current,
            start : 'top bottom',
            end : 'bottom top',
            scrub : true,
          }})
      });

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }

    }, {scope : containerRef});
  return (
    <section ref ={containerRef} className='section pt-[calc(var(--padding-nav)*4)] pb-[calc(var(--padding-nav)*4)] pl-nav pr-nav md:pt-[calc(var(--padding-nav)*3)] lg:pt-[calc(var(--padding-nav)*4)] min-h-screen w-full flex flex-col items-center justify-start relative z-10 bg-white'>
      <h2 className = "title relative font-secondary font-black text-end text-black text-h1 w-min text-nowrap py-nav">Mes Projets<span className='clipped-title absolute top-0 left-0 w-full h-full text-white opacity-75'>Mes Projets</span></h2>
      <div className='max-w-7xl w-full mt-20 md:mt-32'>
        <div ref={cardsRef} className='grid grid-cols-1 md:grid-cols-2 w-full gap-8'>
          {
            Object.values(ProjectsData).map((project, index) => (
              <ProjectCard
                key={index}
                href={`/projects/${project.href}`}
                title={project.title}
                description={project.stack.join(', ')}
                imgSrc={project.imgSrc}
              />
            ))
          }
        </div>
        <div className='flex items-center justify-center'>
          <div className=' mt-16 md:24'>
            <MagneticButton>
              <Link scroll= {false} href={'/projects'}>
                Voir Plus
              </Link>
            </MagneticButton>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProjects