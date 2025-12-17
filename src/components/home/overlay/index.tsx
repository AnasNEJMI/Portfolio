import LogoAnimation from '@/components/home/overlay/logo_animation'
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react';
import React from 'react'
import OverlayTitle from './title';
import { mapRounded } from '@/lib/helpers';
import { usePageTransition } from '@/contexts/transition_context';
import { useFirstLoad } from '@/contexts/first_load_context';

interface OverlayProps{
    className ?: string,
    isHomePage : boolean,
}
const Overlay = ({className, isHomePage = false} : OverlayProps) => {
    let {exitTimeline, enterTimeline} = usePageTransition();
    let {isOnFirstLoad, setIsOnFirstLoad} = useFirstLoad();

    useGSAP((_, contextSafe) => {
        let overlayPathElement = document.getElementById("overlay-path");
        let overlayTitleElement = document.getElementById("overlay-title");
        let overlayLogoElement = document.getElementById("overlay-logo");

        let sections = document.getElementsByClassName("section");

        //calculating the curve of the overlay path when entering/exiting the page
        let enterAnimationCurve = 50;
        let exitAnimationCurve = -15;
        let enterAnimationCurve2 = 60;

        if(contextSafe){
            const updatePathCurve = contextSafe(() => {
                let width = window.innerWidth;
                enterAnimationCurve = mapRounded(width, 300, 2000, 10, 30);
                exitAnimationCurve = mapRounded(width, 300, 2000, 10, -10);
                enterAnimationCurve2 = mapRounded(width, 0, 1600, 15, 60);
            });
        
            window.addEventListener("resize",updatePathCurve);
            updatePathCurve();
        }
    
        //overlay path progress for  enter animation
        const pathEnterAnimationStart = "m 0 0 h 100 v 100 q -50 0 -100 0 Z";
        const pathEnterAnimationMiddle = `m 0 0 h 100 v 20 q -50 -${enterAnimationCurve} -100 0 Z`
        const pathEnterAnimationEnd = `m 0 0 h 100 v 0 q -50 0 -100 0 Z`;
        
        //overlay path progress for  enter animation
        const pathExitAnimationStart = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
        const pathExitAnimationMiddle = `M 0 100 V 20 Q 50 ${exitAnimationCurve} 100 20 V 100 z`
        const pathExitAnimationEnd = `M 0 100 V 0 Q 50 0 100 0 V 100 z`;

        //Enter Animation

        enterTimeline.clear();

        if(isOnFirstLoad && isHomePage){
            enterTimeline.set(overlayTitleElement, {display : 'none'}, 0);
            enterTimeline.set(overlayPathElement, {attr : {d : pathEnterAnimationStart}}, 0)
            enterTimeline.addLabel('animStart', 2.5)
            enterTimeline.fromTo(overlayLogoElement,{y : 0,opacity : 1},
            {
                y : -600,
                opacity : 0,
                ease : "back.in",
                duration : 0.8,
            }, 'animStart');
        }else if (!isOnFirstLoad){
            if(isHomePage){
                enterTimeline.set(overlayLogoElement, {display : 'none'}, 0);
            }
            enterTimeline.addLabel('animStart', 0)
            enterTimeline.set(overlayTitleElement, {y : 0, opacity : 1}, 0);
            enterTimeline.to(overlayTitleElement,
            {
                y : -550,
                opacity : 0,
                ease : "power3.in",
                duration : 0.8,
            }, 'animStart')
        }

        enterTimeline.fromTo(overlayPathElement, {attr : {d : pathEnterAnimationStart}},
                                {
                                    attr : {d : pathEnterAnimationMiddle},
                                    ease : "power3.in",
                                    duration : 0.8,
                                }
                    ,'animStart')
                    .to(overlayPathElement, 
                        {
                            attr : {d : pathEnterAnimationEnd},
                            ease : "power3.out",
                            duration : 0.4,
                        }
                    , 'animStart+=0.8')
                    .then(() => {
                        if(isOnFirstLoad){
                            enterTimeline.to(overlayTitleElement, {display : 'block'});
                            if(isHomePage){
                                enterTimeline.set(overlayLogoElement, {display : 'none'});
                            }
                            setIsOnFirstLoad(false);
                        }
                    })
        enterTimeline.set(sections, {y : 100, opacity : 0}, 0)
        enterTimeline.to(sections,
        {
            y : 0,
            opacity : 1,
            stagger : 0.05,
            ease : "power1.out",
            duration : 0.4,
        }
        , 'animStart+=0.65');

        enterTimeline.play();


        //Exit Animation
        exitTimeline.fromTo(overlayPathElement,
                        {
                            attr : {d : pathExitAnimationStart},
                            ease : "power3.in",
                            duration : 0.8,
                        },
                        {
                            attr : {d : pathExitAnimationMiddle},
                            ease : "power3.in",
                            duration : 0.8,
                        }
                    , 'animStart')
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
                    , 'animStart')
                    .fromTo(overlayTitleElement,{y : 100,opacity : 0},
                        {
                            y : 0,
                            opacity : 1,
                            ease : "power3.out",
                            duration : 0.5,
                        }
                    , 'animStart+=0.7')
                    .to(overlayPathElement,
                        {
                            attr : {d : pathExitAnimationEnd},
                            ease : "power3.out",
                            duration : 0.4,
                        }
                    , 'animStart+=0.8')
    })

  return (
    <div id = "overlay-container" className={cn(className, 'font-primary w-full h-screen flex justify-center items-center pointer-events-none will-change-transform')}>
        {
            isHomePage && <LogoAnimation id = "overlay-logo"/>
        }
        <OverlayTitle id = "overlay-title"/>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className = "w-full h-full absolute top-0 left-0 -z-10 flex justify-center items-center">
            <path id = "overlay-path" d = "M 0 0 H 100 V 100 q -50 0 -100 0 Z" className = "fill-black-color z-50"></path>
        </svg>
    </div>
  )
}

export default Overlay