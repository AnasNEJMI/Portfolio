import React, { useRef } from "react";
import Contact from "../../components/contact";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/project-card/project-card";
import { ProjectsData } from "@/lib/data";
import PageWrapper from "@/components/page-wrapper";


export default function Projects() {

  return ( 
    <PageWrapper
      isHomePage = {false}
      links={[
            {
                label : 'Acceuil',
                href : '/',
            },
            {
                label : 'Contact',
                href : '/contact',
            },
        ]}

    >
      <section className="section min-h-screen w-full flex flex-col items-center bg-white pt-48">
        <div className="w-full px-nav flex flex-col items-start max-w-7xl">
          <h1 className="font-secondary font-black text-h1 mt-4">Mes Projects</h1>
          <Separator className="mt-4 mb-16"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-nav mb-48">
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
                color={project.color}
              />
            ))
          }
        </div>
      </section>
      <Contact/>
      <svg viewBox="0 0 100 100" width="0" height="0">
          <defs>
              <clipPath id="project-card-clip" className='project-card-icon-clip' clipPathUnits="objectBoundingBox">
                  <path d="M.5 0C1 0 1 0 1 .5 1 1 1 1 .5 1 0 1 0 1 0 .5 0 0 0 0 .5 0Z"></path>
              </clipPath>
          </defs>
      </svg>
    </PageWrapper>
  );
}