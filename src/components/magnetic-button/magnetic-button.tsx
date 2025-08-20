import React, { useRef } from 'react'
import Magnetic from '../basic_magnetic_item/index';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className? : string,
    type? : "button" | "submit" | "reset" | undefined,
    children : React.ReactNode,
    variant? : "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined,
}
const MagneticButton = ({className, type, children, variant = 'default', ...props} : MagneticButtonProps) => {
  const containerRef = useRef<HTMLButtonElement>(null)
  useGSAP((context) => {
    const rippleScaleX = gsap.quickTo(".ripple", "scaleX", {duration : 0.3, ease : "power3.out"});
    const rippleScaleY = gsap.quickTo(".ripple", "scaleY", {duration : 0.3, ease : "power3.out"});
          
    const onEnter = (e : MouseEvent) => {
      const {clientX, clientY} = e;
      const boundingBox = containerRef.current!.getBoundingClientRect();

      const left = boundingBox.left;
      const top = boundingBox.top;
      const linkWidth = boundingBox.width;
      const linkHeight = boundingBox.height;
      const rippleOriginX = Math.round((clientX - left)* 100/linkWidth);
      const rippleOriginY = Math.round((clientY - top)* 100/linkHeight);

      gsap.set('.ripple', {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});
      rippleScaleX(1);
      rippleScaleY(1);
    }
    const onLeave = (e : MouseEvent) => {
      const {clientX, clientY} = e;
      const boundingBox = containerRef.current!.getBoundingClientRect();

      const left = boundingBox.left;
      const top = boundingBox.top;
      const linkWidth = boundingBox.width;
      const linkHeight = boundingBox.height;
      const rippleOriginX = Math.round((clientX - left)/linkWidth * 100);
      const rippleOriginY = Math.round((clientY - top)/linkHeight * 100);

      gsap.set('.ripple', {transformOrigin : `${rippleOriginX}% ${rippleOriginY}%`});
      rippleScaleX(0);
      rippleScaleY(0);
    }

    context.add('onEnter', onEnter)
    context.add('onLeave', onLeave)
    containerRef.current?.addEventListener('mouseenter', context.onEnter);
    containerRef.current?.addEventListener('mouseleave', context.onLeave);
    
    return () => {
      containerRef.current?.removeEventListener('mouseenter', context.onEnter);
      containerRef.current?.removeEventListener('mouseleave', context.onLeave);
    }

  }, {scope : containerRef})
  
  return (
    <Magnetic>
        <Button {...props} ref={containerRef} type={type? type : 'button'} variant={variant} className={cn('relative group overflow-hidden font-primary bg-primary-regular hover:bg-primary-regular', className)}>
            <div className='ripple w-full aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-regular bg-primary-light rounded-full scale-0 pointer-events-none z-10'></div>
            <div className='content relative z-20 text-white group-hover:font-bold duration-200 ease-out group-hover:text-zinc-900'>
              {children}
            </div>
        </Button>
    </Magnetic>
  )
}

export default MagneticButton