import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Magnetic = ({children}) => {
  let containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", (self) => {
      const strengthX = 0.6;
      const strengthY = 0.4;

      const scaleXContainerTo = gsap.quickTo(containerRef.current, "scaleX", {duration : 0.25, ease : "power1.out"});
      const scaleYContainerTo = gsap.quickTo(containerRef.current, "scaleY", {duration : 0.25, ease : "power1.out"});
      const xContainerTo = gsap.quickTo(containerRef.current, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
      const yContainerTo = gsap.quickTo(containerRef.current, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

      const onMove = (event) => {
        const {clientX, clientY} = event;
        const {width, height, left, top} = containerRef.current.getBoundingClientRect();
        const containerX = (clientX - (left + width/2))*strengthX;
        const containerY = (clientY - (top + height/2))*strengthY;

        xContainerTo(containerX);
        yContainerTo(containerY);
      }

      const onEnter = () => {
        scaleXContainerTo(1.15);
        scaleYContainerTo(1.15);
      }

      const onLeave = () => {
        xContainerTo(0);
        yContainerTo(0);

        scaleXContainerTo(1);
        scaleYContainerTo(1);
      }

      self.add("onMove", onMove);
      self.add("onEnter", onEnter);
      self.add("onLeave", onLeave);
      
      containerRef.current.addEventListener("mousemove", self.onMove);
      containerRef.current.addEventListener("mouseenter", self.onEnter);
      containerRef.current.addEventListener("mouseleave", self.onLeave);

      return () => {
        containerRef.current?.removeEventListener("mousemove", self.onMove);
        containerRef.current.removeEventListener("mouseenter", self.onEnter);
        containerRef.current?.removeEventListener("mouseleave", self.onLeave);
      }
    });

    return () => {
      mm.revert();
    }
    
  }, {scope : containerRef});

  return (
    <div ref={containerRef} className = "group w-full h-full">
      {children}
    </div>
  )
}

export default Magnetic