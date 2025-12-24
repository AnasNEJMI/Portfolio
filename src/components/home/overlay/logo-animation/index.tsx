import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(CustomEase);

const logoEase = CustomEase.create(
    "logoEase",
    "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")    

interface LogoAnimationProps extends React.ComponentProps<'div'>{
    className ? : string
}

const LogoAnimation = ({className, ...props} : LogoAnimationProps) => {
    const containerRef = useRef(null)
    const logoAnimTimeline = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        let duration = 1.2;
        const q = gsap.utils.selector(containerRef);
        const n = {
            wrapper : q('.n-wrapper'),
            diag : q('.n-diag-slash'),
            left : q('.n-left-slash'),
            right : q('.n-right-slash'),
        };
        const a = {
            wrapper : q('.a-wrapper'),
            diag : q('.a-diag-slash'),
            left : q('.a-left-slash'),
            right : q('.a-right-slash'),
        };
        
        if (!logoAnimTimeline.current) {
            logoAnimTimeline.current = gsap.timeline({ paused: true });
        }

        logoAnimTimeline.current.clear();

        logoAnimTimeline.current
                        .set([n.diag, a.diag],{width:0, height: 0},0)
                        .to([n.diag, a.diag],{width:"15%", height: "15%", duration : 0.3, ease : "power2.inOut"},0)
                        .to([n.diag, a.diag], {height: "0%", duration : 0.15, ease : "power2.inOut"},0.5)
                        .to([n.diag, a.diag], {height: "15%", duration : 0.15, ease : "power2.inOut"},0.65)
                        .to([n.diag, a.diag], {height: "0%", duration : 0.15, ease : "power2.inOut"},1)
                        .to([n.diag, a.diag], {height: "80%", duration : 0.4, ease : "power3.out"},1.15)
                        .to(n.wrapper, {rotate :135, duration : duration, ease :  logoEase}, 1.65)
                        .to(n.left, {rotate :-315, duration : duration, ease :  logoEase}, 1.65)
                        .to(n.right, {rotate :-315, duration : duration, ease :  logoEase}, 1.65)
                        .to(a.wrapper, {rotate :210, duration : duration, ease :  logoEase}, 1.65)
                        .to(a.diag, {height : "65%", duration : duration, ease : "power2.out"}, 1.65)
                        .to(a.left, {rotate :-315, duration : duration, ease :  logoEase}, 1.65)
                        .to(a.right, {rotate :-420, height : "100%", duration : duration, ease :  logoEase}, 1.65)
        
        logoAnimTimeline.current.play();
    },{scope : containerRef})

  return (
    <div {...props} ref = {containerRef} className={cn('flex items-center justify-center relative w-full h-full pointer-events-none', className)}>
            <div className='a-wrapper lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='a-diag-slash relative will-change-transform'>
                    <div className='absolute z-30 w-full h-full bg-white outline-[6px] sm:outline-[10px] lg:outline-[12px] outline outline-black-color  rounded-full'></div>
                    <div className='a-left-slash absolute top-0 z-10  w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    <div className='a-right-slash absolute bottom-0 z-20  w-full h-3/4 bg-white origin-anchor-bottom rounded-full outline-[6px] sm:outline-[10px] lg:outline-[12px] outline outline-black-color will-change-transform'></div>
                </div>
            </div>

            <div className='n-wrapper lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='n-diag-slash w-0 h-0 relative will-change-transform'>
                    <div className='absolute z-30 w-full h-full bg-white outline-[6px] sm:outline-[10px] lg:outline-[12px] outline outline-black-color rounded-full'></div>
                    <div className='n-left-slash absolute top-0 z-20  w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    <div className='n-right-slash absolute bottom-0 z-10  w-full h-3/4 bg-white origin-anchor-bottom rounded-full will-change-transform'></div>
                </div>
            </div>
    </div>
  )
}

export default LogoAnimation