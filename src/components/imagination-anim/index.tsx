import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const designText = "◆ Polyvalant ⟡◆⟡ Autonome ⟡◆ Rigoureux ⟡◆⟡ Créatif ⟡◆ Curieux ⟡◆⟡ Méthodique  ⟡"
const ImaginationAnim = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)
    const imageContainerRef = useRef<HTMLDivElement>(null)
    const rotatingTextRef = useRef<SVGSVGElement>(null)
    const rotationDir = useRef(-1)

     useGSAP((context, contextSafe) => {
        const rotationScroll = ScrollTrigger.create({
            trigger : containerRef.current,
            start : 'top bottom',
            end : 'bottom start',
            onUpdate : e => {
                if(e.direction != rotationDir.current){
                    rotationDir.current = e.direction;
                    requestAnimationFrame(() => {gsap.to(rotatingTextRef.current, {rotateZ : `${rotationDir.current === 1? '+=360' : '-=360'}`, duration : 20, repeat : Infinity, ease : "none"});})
                }
                
            }
        })

        gsap.to(rotatingTextRef.current, {translateZ : 0, rotateZ : 360, duration : 20, repeat : Infinity, ease : "none"});

        return () => {
            rotationScroll.kill();
        }
     })
  return (
    <div ref={containerRef} className='flex items-start justify-center w-full max-w-xl'>
        <div ref = {imagesRef} style={{transformStyle : 'preserve-3d'}} className='relative w-[75%] aspect-[2/3]'>
            <div ref = {imageContainerRef}  className='relative w-full h-full flex items-center justify-center overflow-hidden'>
                <DotLottieReact
                src="images/avatar-anim-2.lottie"
                loop
                autoplay
                className=''
            />
            </div>

            <div style={{transformStyle : 'preserve-3d', transform : 'translateX(-50%) translateY(-50%) rotateY(25deg) rotateX(45deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center overflow-hidden'>
            <svg ref = {rotatingTextRef} style={{transformStyle : 'preserve-3d'}} className='w-full relative aspect-square overflow-visible' viewBox='0 0 100 100'>
                <defs>
                    <mask id = "mask">
                        <circle cx={50} cy={50} r={50}  fill='white'></circle>
                        <circle cx={50} cy={50} r={40}  fill='black'></circle>
                    </mask>
                </defs>
                
                <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='white'></circle>

                <path id='orbitText' preserveAspectRatio='false' d='M2 50 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0' stroke='transparent' fill='transparent'></path>
                <path id='orbitExt'  preserveAspectRatio='false' d='M0 50 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0' stroke='black' fill='transparent' strokeWidth={0.2}></path>
                <path id='orbitInt' preserveAspectRatio='false' d='M10 50 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0' stroke='black' fill='transparent' strokeWidth={0.2}></path>

                <text  textAnchor='middle' className=' origin-center absolute left-[-5%] flex'>
                    <textPath href='#orbitText' fill='rbg(34 34 34)' startOffset='50%'  className='font-primary text-[8px] fill-zinc-800'> 
                        {designText}
                    </textPath>
                </text>
                
            </svg>
            </div>
            
            <svg  style={{transform : 'translateX(calc(-50% + 2px)) translateY(calc(-50% + 8px)) rotateY(25deg) rotateX(45deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2' viewBox='0 0 100 100'>
            <defs>
                <mask id = "mask">
                    <circle cx={50} cy={50} r={50}  fill='white'></circle>
                    <circle cx={50} cy={50} r={44}  fill='black'></circle>
                </mask>
            </defs>
            
            <circle cx={50} cy={50} r={50} mask = 'url(#mask)' className='fill-zinc-800'></circle>
            </svg>
        </div>
    </div>
  )
}

export default ImaginationAnim