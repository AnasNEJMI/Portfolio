import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ProjectCard from '@/components/project-card/project-card';
import { ScrollTrigger } from 'gsap/all';
import { ProjectsData } from '@/lib/data';
import BrandLinkButton from '../brand-button';
import useProjectsSectionAnimations from '@/hooks/use-projects-section-animations';
gsap.registerPlugin(ScrollTrigger);

const title = "Une formation d'ingénieur au cœur du numérique"

const HomeProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useProjectsSectionAnimations({containerRef})
  return (
    <section ref ={containerRef} className='section py-32 px-nav min-h-screen w-full flex flex-col items-center justify-start relative z-10 bg-zinc-100'>
      <div className='max-w-7xl w-full'>
        <h2 className = "title relative font-secondary font-black text-end text-black text-h4 md:text-h3 w-min text-nowrap">Mes dernières contributions<span style={{clipPath : 'inset(0 0 0 0)'}} className='clipped-title absolute top-0 left-0 w-full h-full text-white opacity-75'>Mes dernières contributions</span></h2>
      </div>
      <div className='max-w-7xl w-full mt-20 md:mt-32 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-8'>
          {
            Object.values(ProjectsData).map((project, index) => (
              <ProjectCard
                key={index}
                href={`/projects/${project.href}`}
                title={project.title}
                description={project.stack.join(', ')}
                src={project.banner.src}
                width={project.banner.width}
                height={project.banner.height}
                color = {project.color}
                
              />
            ))
          }
        </div>
        <div className='flex items-center justify-center mt-20 md:mt-32'>
            <BrandLinkButton
              href='/projects'
              title='En Savoir Plus'
            />
        </div>
      </div>
      <section className='w-full flex justify-center pt-32 md:pt-48'>
          <div className='w-full max-w-7xl font-primary flex flex-col items-center'>
            <p className='formation-title text-h4 font-medium max-w-xl text-balance text-center'>{title}</p>
            <div className='timeline-wrapper relative w-full h-full flex flex-col gap-[40vh] py-32 max-w-5xl overflow-hidden'>
              <div className='timeline-line absolute top-0 left-1/2 -translate-x-1/2 h-0 w-1 rounded-full bg-green-400 timeline-line-glow'></div>
              <div className='telecom opacity-0 flex md:gap-12 items-start justify-center'>
                <div className='flex-1 flex flex-col gap-4'>
                  <div className='flex justify-start gap-8 md:justify-between md:gap-0 items-center'>
                    <span className='font-secondary font-medium text-h4'>Cycle Ingénieur</span>
                    <span className='font-primary font-light text-h4'>2012-2016</span>
                  </div>
                  <div className=''>
                    <span className='font-primary font-medium text-h5 opacity-75'>Télecom Paristech, Paris</span>
                  </div>
                  <div className='h-px w-full bg-zinc-200'></div>
                  <p className='font-primary text-h6 leading-7 text-balance'>Formation d&apos;excellence dans le développement logiciel, l&apos;algorithmique et la fouilles des données</p>
                </div>
                <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
                <div className='md:flex-1'></div>
              </div>
              <div className='cpge opacity-0 flex md:gap-12 items-start justify-center'>
                <div className='md:flex-1'></div>
                <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
                <div className='flex-1 flex flex-col gap-4'>
                  <div className='flex justify-end gap-8 md:justify-between md:gap-0 items-center'>
                    <span className='font-secondary font-medium text-h4'>CPGE</span>
                    <span className='font-primary font-light text-h4'>2010-2012</span>
                  </div>
                  <div className='w-full flex justify-end md:justify-start'>
                    <span className='font-primary font-medium text-h5 opacity-75'>Lycée Moulay Youssef, Maroc</span>
                  </div>
                  <div className='h-px w-full bg-zinc-200 flex flex-col'></div>
                  <p className='font-primary text-h6 leading-7 text-end md:text-start'>Filière MPSI/MP*</p>
                  <p className='font-primary text-h6 leading-7 text-end md:text-start'>Specialités : mathématiques, physique/chimie, informatique</p>
                </div>
              </div>
              <div className='bac opacity-0 flex md:gap-12 items-start justify-center'>
                <div className='flex-1 flex flex-col gap-4'>
                  <div className='flex justify-start gap-8 md:justify-between md:gap-0 items-center'>
                    <span className='font-secondary font-medium text-h4'>Baccalauréat S</span>
                    <span className='font-primary font-light text-h4'>2010</span>
                  </div>
                  <div className=''>
                    <span className='font-primary font-medium text-h5 opacity-75'>Lycée Med V, Maroc</span>
                  </div>
                  <div className='h-px w-full bg-zinc-200'></div>
                  <p className='font-primary text-h6 leading-7'>Option mathématiques et science d&apos;ingénieurs.</p>
                  <p className='font-primary text-h6 leading-7 text-balance'>Obtenu avec une mention <span className='font-bold underline'>Très Bien</span></p>
                </div>
                <div className='hidden md:block w-2 h-2 bg-green-300 rounded-full mt-8'></div>
                <div className='md:flex-1'></div>
              </div>
            </div>
          </div>
      </section>
      <div className='w-full h-[100vh] flex flex-col items-center'>
          <div className='w-full max-w-5xl aspect-square'></div>
      </div>
    </section>
  )
}

export default HomeProjects