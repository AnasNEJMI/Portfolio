import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useVerticalNavState } from '@/contexts/vertical_nav_state_context';

gsap.registerPlugin(ScrollTrigger);

const MagneticMenuIcon = () => {
    const containerRef = useRef(null);
    let {isVerticalNavOpen, setIsVerticalNavOpen} = useVerticalNavState();

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", (context) => {
            let containerElement = containerRef.current.querySelector(".container");
            let iconElement = containerRef.current.querySelector(".icon");
            let titleElement = containerRef.current.querySelector(".title");

            const strengthX = 0.8;
            const strengthY = 0.5;
            const size = 300;

            const scaleXContainerTo = gsap.quickTo(containerRef.current, "scaleX", {duration : 0.25, ease : "power1.out"});
            const scaleYContainerTo = gsap.quickTo(containerRef.current, "scaleY", {duration : 0.25, ease : "power1.out"});

            gsap.set(containerRef.current, {scale : 0});

            const xButtonContainerTo = gsap.quickTo(containerElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const yButtonContainerTo = gsap.quickTo(containerElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const scaleXButtonContainerTo = gsap.quickTo(containerElement, "scaleX", {duration : 0.3, ease :"power3.out"});
            const scaleYButtonContainerTo = gsap.quickTo(containerElement, "scaleY", {duration : 0.3, ease :"power3.out"});
            

            const xIconTo = gsap.quickTo(iconElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const yIconTo = gsap.quickTo(iconElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

            const xTitleTo = gsap.quickTo(titleElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const yTitleTo = gsap.quickTo(titleElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

            const onBtnMove = (event) => {
                const {clientX, clientY} = event;
                const {width, height, left, top} = containerElement.getBoundingClientRect();
                const containerX = (clientX - (left + width/2))*strengthX;
                const containerY = (clientY - (top + height/2))*strengthY;
      
                const iconX = size * containerX / window.innerWidth;
                const iconY = size * containerY / window.innerHeight;
      
                xButtonContainerTo(containerX);
                yButtonContainerTo(containerY);
      
                xIconTo(iconX);
                yIconTo(iconY);

                xTitleTo(iconX);
                yTitleTo(iconY);
                  
                scaleXButtonContainerTo(1.15);
                scaleYButtonContainerTo(1.15);
              }
      
              const onBtnLeave = (event) => {
                  xButtonContainerTo(0);
                  yButtonContainerTo(0);
                  xIconTo(0);
                  yIconTo(0);

                  xTitleTo(0);
                  yTitleTo(0);

                  scaleXButtonContainerTo(1);
                  scaleYButtonContainerTo(1);
              }
      
            context.add("onBtnMove", onBtnMove);
            context.add("onBtnLeave", onBtnLeave);
              
            containerElement?.addEventListener("mousemove", context.onBtnMove);
            containerElement?.addEventListener("mouseleave", context.onBtnLeave);

            //   on big screens show the menu only once we leave the top of the page
            ScrollTrigger.create({
                trigger : document.documentElement,
                start : 0,
                end : window.innerHeight/6,
                onEnterBack: () => {
                    console.log("enter back");
                    // gsap.to(containerRef.current, {scale : 0, duration : 0.25, ease : "power1.out"})
                    scaleXContainerTo(0);
                    scaleYContainerTo(0);
                },
                onLeave: () => {
                    console.log("leave");
                    // gsap.to(containerRef.current, {scale : 1, duration : 0.25, ease : "power1.out"})
                    scaleXContainerTo(1);
                    scaleYContainerTo(1);
                }
            });
            
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                containerElement?.removeEventListener("mousemove", context.onBtnMove);
                containerElement?.removeEventListener("mouseleave", context.onBtnLeave);
            }
        });
        

        return () => {
            mm.revert();
        }

    }, {scope : containerRef})



  return (
    <div ref = {containerRef} className='fixed top-0 right-0 p-nav z-50'>
        <button onClick={() => {setIsVerticalNavOpen(!isVerticalNavOpen)}} className = {`container rounded-full h-16 transition-all ease-out duration-300 ${isVerticalNavOpen? 'w-32' : 'w-16'} overflow-hidden flex items-center justify-end bg-primary-regular hover:opacity-90 origin-right`}>
            <div className='relative flex items-center justify-start'>
                <div className={`title transition-all ease-out duration-300 font-bold text-white ${isVerticalNavOpen? 'mr-4' : 'mr-12'}`}>Menu</div>
                <div className = "icon">
                    <div className={`block h-[1px] w-8 mr-4 relative bg-white transition ease-out duration-300 ${isVerticalNavOpen? ' -rotate-45 top-[calc(50% - 1px)]' : 'top-[5px]'}`}></div>
                    <div className={`block h-[1px] w-8 mr-4 relative bg-white transition ease-out duration-300 ${isVerticalNavOpen? ' rotate-45 top-[-1px]' : 'top-[-5px]'}`}></div>
                </div>
            </div>
        </button>
    </div>
  )
}

export default MagneticMenuIcon