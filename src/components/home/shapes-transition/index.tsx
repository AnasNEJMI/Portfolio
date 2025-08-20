import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

interface ShapesTransitionProps{
    className? : string,

}
const HomeShapesTransition = ({className} : ShapesTransitionProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const shape1Ref = useRef<HTMLDivElement>(null)
    const shape2Ref = useRef<HTMLDivElement>(null)
    const shape3Ref = useRef<HTMLDivElement>(null)
    const shape4Ref = useRef<HTMLDivElement>(null)
    const shape5Ref = useRef<HTMLDivElement>(null)
    const shape6Ref = useRef<HTMLDivElement>(null)
    const shape7Ref = useRef<HTMLDivElement>(null)
    const shape8Ref = useRef<HTMLDivElement>(null)

    useGSAP((context) => {
        if(containerRef.current === null) return;

        // small screens
        if(shape1Ref.current){
            gsap.to(shape1Ref.current, {yPercent : -73, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        if(shape2Ref.current){
            gsap.to(shape2Ref.current, {yPercent : -92.5, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        
        if(shape3Ref.current){
            gsap.to(shape3Ref.current, {yPercent : -105, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }


        // big screens
        if(shape4Ref.current){
            gsap.to(shape4Ref.current, {yPercent : -73, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        if(shape5Ref.current){
            gsap.to(shape5Ref.current, {yPercent : -92.5, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        
        if(shape6Ref.current){
            gsap.to(shape6Ref.current, {yPercent : -105, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        if(shape7Ref.current){
            gsap.to(shape7Ref.current, {yPercent : -92.5, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }
        if(shape8Ref.current){
            gsap.to(shape8Ref.current, {yPercent : -105, scrollTrigger : {
                trigger : containerRef.current,
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})
        }

        return () => {
            ScrollTrigger.killAll()
        }
    }, {scope: containerRef})
  return (
    <section ref={containerRef} className={cn('section shapes-transition h-[50vh] w-full relative z-30 -translate-y-[10%] -top-px bg-gradient-to-b from-zinc-900 via-zinc-900 via-30% to-transparent to-35%', className)}>
        {/* small screens */}
        <div ref={shape1Ref} className='lg:hidden shape-left absolute -top-0 left-0 w-1/3 h-[150vh] rounded-full bg-primary-regular'>
        </div>
        <div ref={shape2Ref} className='lg:hidden shape-center absolute top-[25vh] left-1/3 w-1/3 h-[200vh] rounded-full bg-green-300'>
        </div>
        <div ref={shape3Ref} className='lg:hidden shape-right absolute top-[50vh] left-2/3 w-1/3 h-[200vh] rounded-full bg-green-200'>
        </div>
        {/* big screens */}
        <div ref={shape4Ref} className='hidden lg:block shape-left absolute -top-0 left-0 w-1/5 h-[150vh] rounded-full bg-primary-regular'>
        </div>
        <div ref={shape5Ref} className='hidden lg:block shape-center absolute top-[25vh] left-[20%] w-1/5 h-[200vh] rounded-full bg-zinc-800'>
        </div>
        <div ref={shape6Ref} className='hidden lg:block shape-right absolute top-[50vh] left-[40%] w-1/5 h-[150vh] rounded-full bg-green-300'>
        </div>
        <div ref={shape7Ref} className='hidden lg:block shape-center absolute top-[25vh] left-[60%] w-1/5 h-[200vh] rounded-full bg-zinc-700'>
        </div>
        <div ref={shape8Ref} className='hidden lg:block shape-right absolute top-[50vh] left-[80%] w-1/5 h-[200vh] rounded-full bg-green-200'>
        </div>
    </section>
  )
}

export default HomeShapesTransition