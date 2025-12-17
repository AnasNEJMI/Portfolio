import React from "react";
import HomeHero from "@/components/home/hero";
import HomeAbout from "@/components/home/about";
import Contact from "@/components/contact";
import HomeProjects from "@/components/projects";
import HomeQualities from "@/components/home/qualities";
import HomeHighlights from "@/components/home/highlights";
import PageWrapper from "@/components/page-wrapper";

export default function Home() {
  return ( 
    <PageWrapper
      isHomePage = {true}
      links={[
            {
                label : 'Projets',
                href : '/projects',
            },
            {
                label : 'Contact',
                href : '/contact',
            },
        ]}
    >
      <HomeHero/>

      <HomeAbout/>
      {/* <HomeShapesTransition/> */}
      <HomeQualities/>
      <HomeProjects/>
      <HomeHighlights/>
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
