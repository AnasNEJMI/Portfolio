import Link from 'next/link'
import React, { useRef } from 'react'
import Magnetic from '../basic_magnetic_item'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface BrandLinkButtonProps{
    title : string,
    theme? : 'light' | 'dark',
    href : string
}
const BrandLinkButton = ({title, href, theme = 'light'} : BrandLinkButtonProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null)

    useGSAP((_, contextSafe)=>{
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px", (context) => {
            const q = gsap.utils.selector(linkRef);
            const linkRipple = q('.link-ripple');
            const rippleScaleX = gsap.quickTo(".link-ripple", "scaleX", {duration : 0.3, ease : "power2.out"});
            const rippleScaleY = gsap.quickTo(".link-ripple", "scaleY", {duration : 0.3, ease : "power2.out"});

            if(!contextSafe) return;
            if(linkRef.current === null) return;

            context.add('onMouseEnter', (e : MouseEvent) => {
                const { clientX, clientY } = e;
                const boundingBox = linkRef.current!.getBoundingClientRect();
                const left = boundingBox.left;
                const top = boundingBox.top;
                const linkWidth = boundingBox.width;
                const linkHeight = boundingBox.height;
    
                const rippleOriginX = Math.round((clientX - left)/linkWidth * 100);
                const rippleOriginY = Math.round((clientY - top)/linkHeight * 100);
    
                gsap.set(linkRipple, {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});
    
                rippleScaleX(1);
                rippleScaleY(1);
            })
            context.add('onMouseLeave', (e : MouseEvent) => {
                const { clientX, clientY } = e;
                const boundingBox = linkRef.current!.getBoundingClientRect();
                const left = boundingBox.left;
                const top = boundingBox.top;
                const linkWidth = boundingBox.width;
                const linkHeight = boundingBox.height;
    
                const rippleOriginX = Math.round((clientX - left)/linkWidth * 100);
                const rippleOriginY = Math.round((clientY - top)/linkHeight * 100);
    
                gsap.set(linkRipple, {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});
    
                rippleScaleX(0);
                rippleScaleY(0);
            })

            linkRef.current.addEventListener('mouseenter', context.onMouseEnter);
            linkRef.current.addEventListener('mouseleave', context.onMouseLeave);
            
            return () => {
                linkRef.current?.removeEventListener('mouseenter', context.onMouseEnter);
                linkRef.current?.removeEventListener('mouseleave', context.onMouseLeave);
            }
        })

    }, {scope : linkRef})
  return (
    <Magnetic>
        <div className={`absolute -translate-x-1 -translate-y-1 w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)]  z-10 rounded-full ${theme === 'light'? 'bg-zinc-600' : 'bg-zinc-200'} group-hover:w-[calc(100%+0.75rem)] group-hover:h-[calc(100%+0.75rem)] group-hover:-translate-x-[6px] group-hover:-translate-y-[6px] duration-300 ease-in-out transition-all`}></div>
        <Link ref= {linkRef} href = {href} scroll = {false} className ={`${theme === 'light'? 'text-zinc-900 bg-white' : 'text-white bg-zinc-900'} w-full h-full flex items-center justify-center py-6 px-8 font-primary font-bold text-h6 md:text-h5 rounded-full cursor-pointer relative z-20 overflow-hidden`}>
            <div className='link-ripple w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary-regular rounded-full scale-0 pointer-events-none'></div>
            <span className={`link-title ${theme === 'light'? 'md:group-hover:text-white border-zinc-600' : 'md:group-hover:text-zinc-900 border-zinc-200'} relative ease-out transition-colors duration-200 z-20`}>{title}</span>
        </Link>
    </Magnetic>
  )
}

export default BrandLinkButton