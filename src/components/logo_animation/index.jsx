import React, { useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { on } from 'events';

gsap.registerPlugin(CustomEase);

const LogoAnimation = ({id}) => {
    const letterNRef = useRef(null)
    const letterARef = useRef(null)
    const containerRef = useRef(null)

    useGSAP(() => {
        let letterNTimeline = gsap.timeline({repeat : 0, repeatDelay : 4});
        let duration = 1.2;

        letterNTimeline.fromTo('.n-diag-slash', {width : 0, height : 0}, {width:"15%", height: "15%", duration : 0.3, ease : "power2.inOut"},">");
        letterNTimeline.to('.n-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},">+=0.2");
        letterNTimeline.to('.n-diag-slash', {height: "15%", duration : 0.15, ease : "power2.inOut"},">");
        letterNTimeline.to('.n-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},">+=0.2");
        letterNTimeline.to('.n-diag-slash', {height: "80%", duration : 0.4, ease : "power3.out"},">+=0.1");

        letterNTimeline.addLabel("rotation", ">+=0.1");

        letterNTimeline.fromTo(letterNRef.current, {rotate : 0}, {rotate :135, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        letterNTimeline.fromTo('.n-left-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        // letterNTimeline.fromTo('.n-left-slash-trail-red', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.015")
        // letterNTimeline.fromTo('.n-left-slash-trail-green', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.03")
        // letterNTimeline.fromTo('.n-left-slash-trail-blue', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.045")

        letterNTimeline.fromTo('.n-right-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        // letterNTimeline.fromTo('.n-right-slash-trail-red', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.015")
        // letterNTimeline.fromTo('.n-right-slash-trail-green', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.03")
        // letterNTimeline.fromTo('.n-right-slash-trail-blue', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.045")
        // letterNTimeline.pause();
        
        // letterNTimeline.to(containerRef.current,{yPercent : -75, opacity : 0, duration : duration/2, ease :  CustomEase.create("custom", "M0,0 C0.173,0 0.195,-0.056 0.3,0.022 0.396,0.095 0.449,0.367 0.502,0.506 0.546,0.622 0.647,0.848 0.753,0.94 0.826,1.004 0.869,1 1,1 ")}, `rotation+=${duration+0.4}`)
        // letterNTimeline.set(containerRef.current, {display : "none"}, ">");

    },{scope : letterNRef})

    useGSAP(() => {
        // onAnimationDone();
        let letterATimeline = gsap.timeline();
        let duration = 1.2;

        letterATimeline.fromTo('.a-diag-slash', {width : 0, height : 0}, {width:"15%", height: "15%", duration : 0.3, ease : "power2.inOut"},">");
        letterATimeline.to('.a-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},">+=0.2");
        letterATimeline.to('.a-diag-slash', {height: "15%", duration : 0.15, ease : "power2.inOut"},">");
        letterATimeline.to('.a-diag-slash', {height: "0%", duration : 0.15, ease : "power2.inOut"},">+=0.2");
        letterATimeline.to('.a-diag-slash', {height: "80%", duration : 0.4, ease : "power3.out"},">+=0.1");

        letterATimeline.addLabel("rotation", ">+=0.1");

        letterATimeline.fromTo(letterARef.current, {rotate : 0}, {rotate :210, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        letterATimeline.to('.a-diag-slash', {height : "65%", duration : duration, ease : "power2.out"}, "rotation");
        letterATimeline.fromTo('.a-left-slash', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        // letterATimeline.fromTo('.a-left-slash-trail-red', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.015")
        // letterATimeline.fromTo('.a-left-slash-trail-green', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.03")
        // letterATimeline.fromTo('.a-left-slash-trail-blue', {rotate : 0}, {rotate :-315, duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.045")

        letterATimeline.fromTo('.a-right-slash', {rotate : 0}, {rotate :-420, height : "100%", duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation")
        // letterATimeline.fromTo('.a-right-slash-trail-red', {rotate : 0}, {rotate :-420,height : "100%", duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.01")
        // letterATimeline.fromTo('.a-right-slash-trail-green', {rotate : 0}, {rotate :-420,height : "100%", duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.02")
        // letterATimeline.fromTo('.a-right-slash-trail-blue', {rotate : 0}, {rotate :-420,height : "100%", duration : duration, ease :  CustomEase.create("custom", "M0,0 C0.176,0 0.258,0.111 0.31,0.251 0.338,0.326 0.374,0.517 0.374,0.517 0.374,0.517 0.497,1.04 0.61,1.065 0.706,1.08 0.741,1.045 0.798,1.029 0.856,1.013 0.95,1 1,1  ")}, "rotation+=0.03")
        // // letterATimeline.pause();
    }, {scope : letterARef})
  return (
    <div id = {id} ref = {containerRef} className='flex items-center justify-center relative w-full h-full'>
            <div ref = {letterARef} className='lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='relative a-diag-slash will-change-transform'>
                    <div className=' absolute z-30 w-full h-full bg-white outline-[12px] outline outline-black-color  rounded-full will-change-transform'>
                    
                    </div>
                    
                    <div className='absolute top-0 z-10 a-left-slash w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    {/* <div className='absolute top-0 z-[7] a-left-slash-trail-blue w-full h-3/4 origin-anchor-top bg-[#0030ff] rounded-full '></div>
                    <div className='absolute top-0 z-[8] a-left-slash-trail-green w-full h-3/4 origin-anchor-top bg-[#0cff00] rounded-full '></div>
                    <div className='absolute top-0 z-[9] a-left-slash-trail-red w-full h-3/4 origin-anchor-top bg-[#ff0000] rounded-full mix-blend-screen'></div> */}

                    <div className='absolute bottom-0 z-20 a-right-slash w-full h-3/4 bg-white origin-anchor-bottom rounded-full outline-[12px] outline outline-black-color will-change-transform'></div>
                    {/* <div className='absolute bottom-0 z-[17] a-right-slash-trail-blue w-full h-3/4 origin-anchor-bottom  bg-[#0030ff] rounded-full '></div>
                    <div className='absolute bottom-0 z-[18] a-right-slash-trail-green w-full h-3/4 origin-anchor-bottom  bg-[#0cff00] rounded-full '></div>
                    <div className='absolute bottom-0 z-[19] a-right-slash-trail-red w-full h-3/4 origin-anchor-bottom  bg-[#ff0000] rounded-full mix-blend-screen'></div>    */}
                </div>
            </div>

            <div ref = {letterNRef} className='lg:w-80 lg:h-80 sm:w-64 sm:h-64 w-40 h-40 flex items-center justify-center'>
                <div className='relative n-diag-slash will-change-transform'>
                    <div className=' absolute z-30 w-full h-full bg-white outline-[12px] outline outline-black-color rounded-full will-change-transform'>
                    
                    </div>
                    
                    <div className='absolute top-0 z-20 n-left-slash w-full h-3/4 origin-anchor-top bg-white rounded-full will-change-transform'></div>
                    {/* <div className='absolute top-0 z-[17] n-left-slash-trail-blue w-full h-3/4 origin-anchor-top bg-[#0030ff] rounded-full '></div>
                    <div className='absolute top-0 z-[18] n-left-slash-trail-green w-full h-3/4 origin-anchor-top bg-[#0cff00] rounded-full '></div>
                    <div className='absolute top-0 z-[19] n-left-slash-trail-red w-full h-3/4 origin-anchor-top bg-[#ff0000] rounded-full mix-blend-screen'></div> */}

                    <div className='absolute bottom-0 z-10 n-right-slash w-full h-3/4 bg-white origin-anchor-bottom rounded-full will-change-transform'></div>
                    {/* <div className='absolute bottom-0 z-[7] n-right-slash-trail-blue w-full h-3/4 origin-anchor-bottom  bg-[#0030ff] rounded-full '></div>
                    <div className='absolute bottom-0 z-[8] n-right-slash-trail-green w-full h-3/4 origin-anchor-bottom  bg-[#0cff00] rounded-full '></div>
                    <div className='absolute bottom-0 z-[9] n-right-slash-trail-red w-full h-3/4 origin-anchor-bottom  bg-[#ff0000] rounded-full mix-blend-screen'></div>    */}
                </div>
            </div>
    </div>
  )
}

export default LogoAnimation