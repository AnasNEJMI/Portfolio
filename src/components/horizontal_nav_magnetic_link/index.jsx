import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const HorizontalNavMagneticLink = ({href, text}) => {
  let containerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", (self) => {
        let circleElement = containerRef.current.querySelector(".circle");
        let textElement = containerRef.current.querySelector(".text");

        const strengthX = 0.6;
        const strengthY = 0.4;
        const multiplier = 200;

        const scaleXContainerTo = gsap.quickTo(containerRef.current, "scaleX", {duration : 0.25, ease : "power1.out"});
        const scaleYContainerTo = gsap.quickTo(containerRef.current, "scaleY", {duration : 0.25, ease : "power1.out"});
        const xContainerTo = gsap.quickTo(containerRef.current, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
        const yContainerTo = gsap.quickTo(containerRef.current, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

        const xCircleTo = gsap.quickTo(circleElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
        const yCircleTo = gsap.quickTo(circleElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

        const xTextTo = gsap.quickTo(textElement, "x", {duration : 1.2, ease : "elastic.out(1, 0.2)"});
        const yTextTo = gsap.quickTo(textElement, "y", {duration : 1.2, ease : "elastic.out(1, 0.2)"});

        const onMove = (event) => {
            const {clientX, clientY} = event;
            const {width, height, left, top} = containerRef.current.getBoundingClientRect();
            const containerX = (clientX - (left + width/2))*strengthX;
            const containerY = (clientY - (top + height/2))*strengthY;

            const circleX = multiplier * containerX / window.innerWidth;
            const circleY = multiplier * containerY / window.innerHeight;

            xContainerTo(containerX);
            yContainerTo(containerY);

            // xCircleTo(circleX);
            // yCircleTo(circleY);

            xTextTo(circleX);
            yTextTo(circleY);
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

            // xCircleTo(0);
            // yCircleTo(0);

            xTextTo(0);
            yTextTo(0);
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
    <li ref = {containerRef} className='bg-white group w-30 overflow-visible flex justify-center'>
        <Link href = {href} className = " py-2 px-4 w-full flex justify-center rounded-full text-body font-medium relative">
        <div className = "circle rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-black h-2 aspect-square group-hover:scale-[600%] origin-left transition-all duration-300"></div>
        <span className="text flex relative text-white font-primary font-light mix-blend-difference">{text}</span>
        </Link>
    </li>
  )
}

export default HorizontalNavMagneticLink