import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

interface useProjectsSectionAnimationsProps{
    containerRef : React.RefObject<HTMLDivElement>
}
const useProjectsSectionAnimations = ({containerRef} : useProjectsSectionAnimationsProps) => {
    useGSAP(()=>{
        const q = gsap.utils.selector(containerRef);
        const title = q('.title');
        const clippedTitle = q('.clipped-title');
        const formationTitle = q('.formation-title');
        
        const timelineItems = [
            {el : q('.telecom'), fromX : -40},
            {el : q('.cpge'), fromX : 40},
            {el : q('.bac'), fromX : -40}
        ]
        const tlWrapper = q('.timeline-wrapper');
        const tlLine = q('.timeline-line');

        // ----------------- CONTAINER BACKGROUND COLOR ----------------- //
        const bgColorTrigger = ScrollTrigger.create({
            trigger : formationTitle,
            start : 'center 75%',
            onEnter : () => {
                gsap.to(containerRef.current,{background : '#18181b', color : '#ffffff', duration : 0.5, ease : 'power3.out',})
            },
            onLeaveBack : () => {
                gsap.to(containerRef.current,{background : '#f4f4f5', color : '#18181b', duration : 0.5, ease : 'power3.out',})
            }
        })

        // ----------------- TIMELINE LINE OPACITY ----------------- //
        const tlLineOpacity = gsap.quickTo(tlLine, 'opacity', {duration : 1, ease : 'power3.out'})
        const lineOpacityTrigger = ScrollTrigger.create({
            trigger : timelineItems[2].el, // bac element
            end : "center center",
            onEnterBack : () => {
                tlLineOpacity(1)
            },
            onLeave : () => {
                tlLineOpacity(0)  
            },
        })
        
        // ----------------- TIMELINE ITEMS ----------------- //
        const tlItemTriggers = timelineItems.map((tlItem) => {
            return createRevealTrigger(tlItem.el, tlItem.fromX);
        })

        // ----------------- TIMELINE LINE HEIGHT ----------------- //
        gsap.to(tlLine, {height : '100%', ease : 'none', scrollTrigger : {
            trigger : tlWrapper, 
            start : 'top center',
            end : "bottom center",
            scrub : true
        }})

        // ----------------- CLIPPED TITLE ----------------- //
        gsap.to(clippedTitle, {clipPath : 'inset(0 0 0 100%)', scrollTrigger : {
            trigger : title,
            start : "top bottom",
            end : "bottom 25%",
            scrub : true,
            }
        });
        
        
        return () => {
            tlItemTriggers.forEach(trigger => trigger.kill);
            bgColorTrigger.kill();
            lineOpacityTrigger.kill();
        }
    }, {scope : containerRef})

    function createRevealTrigger(element : gsap.TweenTarget, fromX : number){
        const x = gsap.quickTo(element, 'x', {duration : 1, ease : "power3.out"});
        const opacity = gsap.quickTo(element, 'opacity', {duration : 1, ease : "power3.out"});

        return ScrollTrigger.create({
            trigger : element as gsap.DOMTarget,
            start : "bottom bottom",
            onEnter: () => {
                opacity(1);
            },
            onLeaveBack: () => {
                opacity(0);
            }
        })
    }
}

export default useProjectsSectionAnimations

//create a website for