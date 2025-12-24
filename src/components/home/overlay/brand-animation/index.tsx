import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const BrandAnimation = () => {
    const letterNRef = useRef<HTMLDivElement>(null)
    const letterARef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const logoAnimTimeline = useRef<gsap.core.Timeline>(gsap.timeline({paused : true}))

    useGSAP(() => {
        const q = gsap.utils.selector(containerRef);
        const ndotUp = q('.n-dot-up');

        // logoAnimTimeline.current
        // .to(ndotUp, {scaleY : 1, duration : 0.3, ease : "power2.inOut"}, 0)

        
        // logoAnimTimeline.current.play();
    }, {scope : containerRef})
  return (
    <div ref={containerRef} id='overlay-logo' className='flex items-center justify-center w-full h-48'>
        <div className='n-spine z-0 relative h-[11.8rem] w-16 scale-y-0 will-change-transform origin-center'>
            <div className='relative z-20 w-full h-full bg-white border-l-8 border-r-8 border-black'></div>
            <div className='n-dot-up absolute z-10 -translate-y-1/2 top-0 left-0 w-16 h-16'>
                <div className='relative z-20 w-full h-full rounded-full bg-white border-8 border-black'></div>
                <div className='n-right absolute left-0 top-0 z-10 w-16 h-48 origin-[50%_16.5%] rounded-full bg-white border-8 border-black'></div>
            </div>
            <div className='n-dot-bottom absolute z-10 translate-y-1/2 bottom-0 left-0 w-16 h-16'>
                <div className='relative z-20 w-full h-full rounded-full bg-white border-8 border-black'></div>
                <div className='n-left absolute left-0 bottom-0 z-10 w-16 h-48 origin-[50%_83.5%] rounded-full bg-white border-8 border-black'></div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(BrandAnimation)