import React, { useRef } from "react";
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePageTransition } from '@/contexts/transition_context';
import { useFirstLoad } from "@/contexts/first_load_context";
import { useOverlayTitle } from "@/contexts/overlay_title_context";
import useLocomotiveScroll from "@/components/locomotive_scroll";
import LogoAnimation from "@/components/logo_animation";
import MagneticMenuIcon from "@/components/magnetic-menu-icon";
import VerticalNav from "@/components/vertical_nav";
import Hero from "@/components/hero";
import Image from "next/image";
import HorizontalNavMagneticLink from "@/components/horizontal_nav_magnetic_link";
import localFont from 'next/font/local';
import About from "@/components/about";
import Contact from "@/components/contact";
import Realisations from "@/components/realisations";
import { mapRounded } from "@/utils/helper_functions";

const fontPrimary = localFont({
  src: '../assets/fonts/font-primary.ttf',
  variable : '--font-primary'
});

const fontSecondary = localFont({
  src: '../assets/fonts/font-secondary.woff2',
  variable : '--font-secondary'
});

export default function Home() {
  let {exitTimeline } = usePageTransition();
  let {isOnFirstLoad, setIsOnFirstLoad} = useFirstLoad();
  let {overlayTitle} = useOverlayTitle();
  let {scrollContainerRef} = useLocomotiveScroll();
  let timeline = useRef(gsap.timeline({paused : true}));

  useGSAP((context, contextSafe) => {
    let enterTimeline = timeline.current;
    // let enterTimeline = gsap.timeline({paused : true});

    let overlayPathElement = document.getElementById("overlay-path");
    let overlayTitleElement = document.getElementById("overlay-title");
    let overlayLogoElement = document.getElementById("overlay-logo");

    let sections = document.getElementsByClassName("section");
    
    //calculating the curve of the overlay path when entering/exiting the page
    let enterAnimationCurve = 50;
    let exitAnimationCurve = -15;
    let enterAnimationCurve2 = 60;
    const updatePathCurve = contextSafe(() => {
      let width = window.innerWidth;
      enterAnimationCurve = mapRounded(width, 300, 2000, 10, 30);
      exitAnimationCurve = mapRounded(width, 300, 2000, 10, -10);
      enterAnimationCurve2 = mapRounded(width, 0, 1600, 15, 60);
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

    // exitTimeline.add(gsap.to(null, {duration : 50}), ">");

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
            ease : "power1.in",
            duration : 0.8,
        }
    ),"path-overlay-exit-start");

    const initial = "M 0 0 V 100 Q 50 100 100 100 V 0 z";
    const middle = `M 0 0 V 20 Q 50 ${enterAnimationCurve2} 100 20 V 0 z`;
    const end = "M 0 0 V 0 Q 50 0 100 0 V 0 z"
    // ---- ENTER ANIMATION ---- //
    //add the animation for the overlay, then stick the animation for the rest of the page at the end
    //1 - enter animation for the overlay
    if(isOnFirstLoad){
      //play the logo animation first
      const logoAnimationDuration = 2.5;
      enterTimeline.set(overlayTitleElement, {display : 'none'});
      enterTimeline.to(overlayLogoElement,{duration : logoAnimationDuration}, 0);
    }else{
      //delay the overlay enter animation by 1 second
      enterTimeline.set(overlayLogoElement, {display : 'none'});
    }

    //1- part 1 animation the path
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

    //2- part 2 animation the path
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
    if(!isOnFirstLoad){
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
    }else{
      enterTimeline.fromTo(overlayLogoElement,
        //first part of the animation
        {
          y : 0,
          opacity : 1
        },
        {
            y : -600,
            opacity : 0,
            ease : "back.in",
            duration : 0.8,
        }, "path-overlay-enter-start");
    }

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
        console.log("hello");
        enterTimeline.to(overlayTitleElement, {display : 'block'});
        enterTimeline.set(overlayLogoElement, {display : 'none'});
        setIsOnFirstLoad(false);
      }
    });

    return () => {
      window.removeEventListener("resize",updatePathCurve);
    }
  }, {scope: scrollContainerRef});

  return ( 
    <main ref = {scrollContainerRef}
      className={`min-h-screen relative bg-white ${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      
      <div id = "overlay-container" className='fixed font-primary top-0 left-0 z-[60] right-0 w-full h-screen flex justify-center items-center pointer-events-none will-change-transform'>
        <LogoAnimation id = "overlay-logo"/>
        <h2 id = "overlay-title" className = " will-change-transform">{overlayTitle}</h2>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className = "w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center">
            <path id = "overlay-path" d = "M 0 0 H 100 V 100 q -50 0 -100 0 Z" className = "fill-black-color z-50"></path>
        </svg>
      </div>

      <header>
        <MagneticMenuIcon/>
        <VerticalNav/>
        
        <Link href = "/" className = "h-16 flex items-center justify-center fixed top-0 left-0 mt-nav ml-nav mix-blend-difference z-50">
          <Image src = "/images/logo.svg" alt = "Logo" width = {80} height = {37} className="invert h-full aspect-[1/2]"/>
        </Link >

        <nav className="flex absolute top-0 right-0 z-20 h-16 justify-start md:justify-end p-nav">
          <ul  className = "hidden h-16 md:flex items-center gap-6 bg-white">
            <HorizontalNavMagneticLink href = "/about" text = "À Propos"/>
            <HorizontalNavMagneticLink href = "/projects" text = "Projets"/>
          </ul>
        </nav>
        <Hero/>
      </header>

      <About/>
      <Realisations/>
      <Contact/>
      
    </main>
  );
}
