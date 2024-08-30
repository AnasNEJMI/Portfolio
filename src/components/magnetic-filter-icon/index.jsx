import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MagneticFilterIcon = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const containerRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", (context) => {
            let iconElement = containerRef.current.querySelector(".icon");

            const strengthX = 0.8;
            const strengthY = 0.5;
            const size = 300;

            const xContainerTo = gsap.quickTo(containerRef.current, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const yContainerTo = gsap.quickTo(containerRef.current, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const scaleXContainerTo = gsap.quickTo(containerRef.current, "scaleX", {duration : 0.3, ease :"power3.out"});
            const scaleYContainerTo = gsap.quickTo(containerRef.current, "scaleY", {duration : 0.3, ease :"power3.out"});

            const xIconTo = gsap.quickTo(iconElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
            const yIconTo = gsap.quickTo(iconElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

            const onBtnMove = (event) => {
                const {clientX, clientY} = event;
                const {width, height, left, top} = containerRef.current.getBoundingClientRect();
                const containerX = (clientX - (left + width/2))*strengthX;
                const containerY = (clientY - (top + height/2))*strengthY;
      
                const iconX = size * containerX / window.innerWidth;
                const iconY = size * containerY / window.innerHeight;
      
                xContainerTo(containerX);
                yContainerTo(containerY);
      
                xIconTo(iconX);
                yIconTo(iconY);
                  
                scaleXContainerTo(1.15);
                scaleYContainerTo(1.15);
              }
      
              const onBtnLeave = (event) => {
                  xContainerTo(0);
                  yContainerTo(0);
                  xIconTo(0);
                  yIconTo(0);

                  scaleXContainerTo(1);
                  scaleYContainerTo(1);
              }
      
              context.add("onBtnMove", onBtnMove);
              context.add("onBtnLeave", onBtnLeave);
              
              containerRef.current?.addEventListener("mousemove", context.onBtnMove);
              containerRef.current?.addEventListener("mouseleave", context.onBtnLeave);
      
              return () => {
                  containerRef.current?.removeEventListener("mousemove", context.onBtnMove);
                  containerRef.current?.removeEventListener("mouseleave", context.onBtnLeave);
              }
        });
        

        return () => {
            mm.revert();
        }

    }, {scope : containerRef})



  return (
    <button ref = {containerRef} onClick={() => {setIsActive(!isActive)}} className = {`rounded-full h-16 w-16 transition-all ease-out duration-300  overflow-hidden flex items-center justify-center bg-black-color hover:opacity-90`}>
       <div className = {`icon transition-all ease-out duration-300 ${isActive? 'fill-white stroke-transparent' : 'fill-transparent stroke-white'}`}>
            {children}
        </div>
    </button>
  )
}

export default MagneticFilterIcon