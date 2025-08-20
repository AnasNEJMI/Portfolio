import React, { useRef } from "react";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePageTransition } from '../../contexts/transition_context';
import { useFirstLoad } from "../../contexts/first_load_context";
import { useOverlayTitle } from "../../contexts/overlay_title_context";
import localFont from 'next/font/local';
import MagneticMenuIcon from "../../components/magnetic-menu-icon";
import VerticalNav from "../../components/vertical_nav";
import Image from "next/image";
import HorizontalNavMagneticLink from "../../components/horizontal_nav_magnetic_link";
import Contact from "../../components/contact";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/project-card/project-card";
import { ProjectsData } from "@/utils/utils";
import Head from "next/head";
import logo from "@/../public/images/logo.png"

const fontPrimary = localFont({
  src: '../../assets/fonts/font-primary.ttf',
  variable : '--font-primary'
});

const fontSecondary = localFont({
  src: '../../assets/fonts/font-secondary.woff2',
  variable : '--font-secondary'
});


export default function Projects() {
  const containerRef = useRef(null);
  let {exitTimeline } = usePageTransition();
  let {isOnFirstLoad, setIsOnFirstLoad} = useFirstLoad();
  let {overlayTitle} = useOverlayTitle();

  function map(value, min1, max1, min2, max2) {
    return Math.round(min2 + (max2 - min2) * ((value - min1) / (max1 - min1)));
  }
  useGSAP((context, contextSafe) => {
    let enterTimeline = gsap.timeline({paused : true});

    let overlayPathElement = document.getElementById("overlay-path");
    let overlayTitleElement = document.getElementById("overlay-title");

    let sections = document.getElementsByClassName("section");
    
    //calculating the curve of the overlay path when entering/exiting the page
    let enterAnimationCurve = 50;
    let exitAnimationCurve = -15;
    const updatePathCurve = contextSafe(() => {
      let width = window.innerWidth;
      // enterAnimationCurve = map(width, 0, 1600, 10, 50);
      // exitAnimationCurve = map(width, 0, 1600, 25, -25);

      enterAnimationCurve = map(width, 300, 2000, 10, 30);
      exitAnimationCurve = map(width, 300, 2000, 10, -10);
    });

    window.addEventListener("resize",updatePathCurve);
    updatePathCurve();

    //overlay path progress for  enter animation
    const pathEnterAnimationStart = "m 0 0 h 100 v 100 q -50 0 -100 0 Z";
    const pathEnterAnimationMiddle = `m 0 0 h 100 v 20 q -50 -${enterAnimationCurve} -100 0 Z`
    const pathEnterAnimationEnd = `m 0 0 h 100 v 0 q -50 0 -100 0 Z`;
    
    //overlay path progress for  enter animation
    const pathExitAnimationStart = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
    const pathExitAnimationMiddle = `M 0 100 V 20 Q 50 ${exitAnimationCurve} 100 20 V 100 z`
    const pathExitAnimationEnd = `M 0 100 V 0 Q 50 0 100 0 V 100 z`;

   
    // ---- EXIT ANIMATION ---- //
    //1 - exit animation for the overlay path
    exitTimeline.add(gsap
      .fromTo(overlayPathElement,
      //first part of the animation
      {
        attr : {d : pathExitAnimationStart},
        ease : "power3.in",
        duration : 0.8,
      },
      {
          attr : {d : pathExitAnimationMiddle},
          ease : "power3.in",
          duration : 0.8,
      })
    , 0);

    exitTimeline.addLabel("path-overlay-exit-start", "<")

    exitTimeline.add(gsap
      //second part of the animation
      .to(overlayPathElement,
          {
              attr : {d : pathExitAnimationEnd},
              ease : "power3.out",
              duration : 0.4,
          })
    , ">");
    
    //add a label to control when the overlay enter animation starts
    exitTimeline.addLabel("path-overlay-exit-end", ">")

    //2 - exit animation for the overlay title
    exitTimeline.add(gsap
      .fromTo(overlayTitleElement,
        //first part of the animation
        {
          y : 100,
          opacity : 0
        },
        {
            y : 0,
            opacity : 1,
            ease : "power3.out",
            duration : 0.5,
        })
    ,0.7);

    //3 - exit animation for the rest of the page
    //todo
    exitTimeline.add(gsap
      .fromTo(sections,
        {
          y : 0,
          opacity : 1
        },
        {
            y : -100,
            opacity : 0,
            stagger : 0.05,
            ease : "power1.in",
            duration : 0.8,
        }
    ),"path-overlay-exit-start");

    // ---- ENTER ANIMATION ---- //
    //add the animation for the overlay, then stick the animation for the rest of the page at the end
    //1 - enter animation for the overlay
    
    enterTimeline.fromTo(overlayPathElement,
      //first part of the animation
      {
        attr : {d : pathEnterAnimationStart},
        ease : "power3.in",
        duration : 0.8,
      },
      {
          attr : {d : pathEnterAnimationMiddle},
          ease : "power3.in",
          duration : 0.8,
      }
    , ">");

    enterTimeline.addLabel("path-overlay-enter-start", "<")
    //second part of the animation
    enterTimeline.to(overlayPathElement,
      {
          attr : {d : pathEnterAnimationEnd},
          ease : "power3.out",
          duration : 0.4,
      }
    ).then(() => {
          onEnterAnimationDone();
      }, ">")

    //add a label to control when the overlay enter animation starts
    enterTimeline.addLabel("path-overlay-enter-end", ">")

    //2 - enter animation for the overlay title
    enterTimeline.fromTo(overlayTitleElement,
        //first part of the animation
        {
          y : 0,
          opacity : 1
        },
        {
            y : -550,
            opacity : 0,
            ease : "power3.in",
            duration : 0.8,
        }, "path-overlay-enter-start");

    //3 - enter animation for the rest of the page
    //todo
    enterTimeline.fromTo(sections,
      {
        y : 100,
        opacity : 0
      },
      {
          y : 0,
          opacity : 1,
          stagger : 0.05,
          ease : "power1.out",
          duration : 0.4,
      }
    , "path-overlay-enter-start+=0.6");
      

    //start the enter animations
    enterTimeline.play();

    const onEnterAnimationDone = contextSafe(() => {
      if(isOnFirstLoad){
        setIsOnFirstLoad(false);
      }
    });

    return () => {
      window.removeEventListener("resize",updatePathCurve);
    }
  }, {scope: containerRef});

  

  return ( 
    <main ref = {containerRef}
      className={`min-h-screen relative bg-white ${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      <Head>
        <title>
          Anas NEJMI - Développeur Full-Stack
        </title>
        <meta
          name="description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="keywords"
          content="développeur full-stack, react, vite, nextjs, PHP, Java, Laravel, TailwindCSS"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Anas NEJMI" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          property="og:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anasnejmi.com" />
        <meta
          property="og:image"
          content="/images/anasnejmi-og.webp"
        />
        <meta property="og:image:alt" content="Anas NEJMI" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="957" />
        <meta property="og:image:height" content="700" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          name="twitter:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="twitter:image"
          content="/images/anasnejmi-og.webp"
        />
        <link rel="canonical" href="https://www.anasnejmi.com/about"/>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div id = "overlay-container" className='fixed font-primary top-0 left-0 z-[60] right-0 w-full h-screen flex justify-center items-center pointer-events-none will-change-transform'>
        <h2 id = "overlay-title" className = "will-change-transform font-secondary text-h1 text-white">{overlayTitle}</h2>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className = "w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center">
            <path id = "overlay-path" d = "M 0 0 H 100 V 100 q -50 0 -100 0 Z" className = "fill-black-color z-50"></path>
        </svg>
      </div>
      
      <header>
        <MagneticMenuIcon/>
        <VerticalNav/>
        
        <Link scroll= {false} href = "/" className = "h-16 flex items-center justify-center fixed top-0 left-0 mt-nav ml-nav mix-blend-difference z-50">
          <Image src = {logo} alt = "Portfolio logo" width = {80} height = {37} className="invert"/>
        </Link >

        <nav className="flex absolute top-0 right-0 z-20 h-16 justify-start md:justify-end p-nav">
          <ul  className = "hidden h-16 md:flex items-center gap-6 bg-white">
            <HorizontalNavMagneticLink href = "/" text = "Acceuil"/>
            <HorizontalNavMagneticLink href = "/about" text = "Parcours"/>
            <HorizontalNavMagneticLink href = "/contact" text = "Contact"/>
          </ul>
        </nav>
      </header>
      <section className="section min-h-screen w-full flex flex-col items-center bg-white pt-48">
        <div className="w-full px-nav flex flex-col items-start max-w-7xl">
          <h1 className="font-secondary font-black text-h1 mt-4">Mes Projects</h1>
          <Separator className="mt-4 mb-16"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 w-full max-w-7xl px-nav mb-48">
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
    </main>
  );
}