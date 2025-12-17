import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(CustomEase);

interface LogoAnimationProps extends React.ComponentProps<'div'>{
    className ? : string
}

const LogoAnimation = ({className, ...props} : LogoAnimationProps) => {
    const letterNRef = useRef(null)
    const letterARef = useRef(null)
    const containerRef = useRef(null)

    useGSAP(() => {
        let logoAnimTimeline = gsap.timeline({paused : true});
        let duration = 1.2;

        logoAnimTimeline.fromTo('.n-diag-slash', {width : 0, height : 0}, {width:"15%", height: "15%", duration : 0.3, ease : "power2.inOut"},0)
                       .fromTo('.a-diag-slash', {width : 0, height : 0}, {width:"15%", height: "15%", duration : 0.3, ease : "power2.inOut"},0)
                       .to('.n-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},0.5)
                       .to('.a-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},0.5)
                       .to('.n-diag-slash', {height: "15%", duration : 0.15, ease : "power2.inOut"},0.65)
                       .to('.a-diag-slash', {height: "15%", duration : 0.15, ease : "power2.inOut"},0.65)
                       .to('.n-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},1)
                       .to('.a-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},1)
                       .to('.n-diag-slash', {height: "80%", duration : 0.4, ease : "power3.out"},1.15)
                       .to('.a-diag-slash', {height: "80%", duration : 0.4, ease : "power3.out"},1.15)
                       .fromTo(letterNRef.current, {rotate : 0}, {rotate :135, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
                       .fromTo('.n-left-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
                       .fromTo('.n-right-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
                       .fromTo(letterARef.current, {rotate : 0}, {rotate :210, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
                       .to('.a-diag-slash', {height : "65%", duration : duration, ease : "power2.out"}, 1.65)
                       .fromTo('.a-left-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
                       .fromTo('.a-right-slash', {rotate : 0}, {rotate :-420, height : "100%", duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, 1.65)
        
        logoAnimTimeline.play();
    },{scope : containerRef})

  return (
    <div {...props} ref = {containerRef} className={cn('flex items-center justify-center relative w-full h-full will-change-transform', className)}>
            <div ref = {letterARef} className='lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='a-diag-slash relative will-change-transform'>
                    <div className='absolute z-30 w-full h-full bg-white outline-[12px] outline outline-black-color  rounded-full will-change-transform'></div>
                    <div className='a-left-slash absolute top-0 z-10  w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    <div className='a-right-slash absolute bottom-0 z-20  w-full h-3/4 bg-white origin-anchor-bottom rounded-full outline-[12px] outline outline-black-color will-change-transform'></div>
                </div>
            </div>

            <div ref = {letterNRef} className='lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='n-diag-slash relative will-change-transform'>
                    <div className='absolute z-30 w-full h-full bg-white outline-[12px] outline outline-black-color rounded-full will-change-transform'></div>
                    <div className='n-left-slash absolute top-0 z-20  w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    <div className='n-right-slash absolute bottom-0 z-10  w-full h-3/4 bg-white origin-anchor-bottom rounded-full will-change-transform'></div>
                </div>
            </div>
    </div>
  )
}

export default LogoAnimation