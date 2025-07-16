"use client";

import { useFirstLoad } from '@/contexts/first_load_context';
import { usePageTransition } from '@/contexts/transition_context';
import React, { Ref } from 'react'
import { useOverlayTitle } from '@/contexts/overlay_title_context';
import { ReactRef, useGSAP } from '@gsap/react';
import localFont from 'next/font/local';
import MagneticMenuIcon from '../magnetic-menu-icon';
import VerticalNav from '../vertical_nav';
import HorizontalNavMagneticLink from '../horizontal_nav_magnetic_link';
import gsap from 'gsap';
import logo from '@/../public/images/logo.svg';
import useLocomotiveScroll from '../locomotive_scroll';
import Image from 'next/image';
import Link from 'next/link';

interface PageWrapperProps{
    className? : string,
    links : {label: string, href : string}[];
    children : React.ReactNode,
    ref : ReactRef
}

const fontPrimary = localFont({
  src: '../../assets/fonts/font-primary.ttf',
  variable : '--font-primary'
});

const fontSecondary = localFont({
  src: '../../assets/fonts/font-secondary.woff2',
  variable : '--font-secondary'
});

const PageWrapper = ({links, children, ref} : PageWrapperProps) => {
  // const containerRef = React.useRef(null);
  let {exitTimeline} = usePageTransition();
  let {isOnFirstLoad, setIsOnFirstLoad} = useFirstLoad();
  let {overlayTitle} = useOverlayTitle();
  const {scrollContainerRef} = useLocomotiveScroll();

  function map(value : number, min1 : number, max1 : number, min2 : number, max2 : number) {
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
    const updatePathCurve = contextSafe!(() => {
      let width = window.innerWidth;
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
    , ">").then(() => {
          onEnterAnimationDone();
      })

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

    const onEnterAnimationDone = contextSafe!(() => {
      if(isOnFirstLoad){
        setIsOnFirstLoad(false);
      }
    });

    return () => {
      window.removeEventListener("resize",updatePathCurve);
    }
  }, {scope: ref});
  return (
    <main
      ref = {ref}
      className={`min-h-screen relative bg-white ${fontPrimary.variable} ${fontSecondary.variable}`}
    >
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
          <Image src = {logo} alt = "Portfolio logo" width = {80} height = {37} className="invert h-16"/>
        </Link >

        <nav className="flex absolute top-0 right-0 z-20 h-16 justify-start md:justify-end p-nav">
          <ul  className = "hidden h-16 md:flex items-center gap-6 bg-white">
            {
              links.map((link, index) => (
                <HorizontalNavMagneticLink key={index} href = {link.href} text = {link.label}/>
              ))
            }
          </ul>
        </nav>
      </header>
      {children}
    </main>
  )
}

export default PageWrapper