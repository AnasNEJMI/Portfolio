import { Separator } from '@/components/ui/separator'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const bioP1 = "Développeur full stack passionné, j\'ai été formé à l\'école d\'ingénieur de Télécom ParisTech, où j\'ai acquis des bases solides en développement logiciel, en algorithmique et en conception de systèmes. Au fil de mon parcours, je me suis spécialisé dans le développement web, en maîtrisant un ensemble de technologies modernes telles que React.js, Next.js, PHP, MySQL, Laravel et Tailwind CSS."


const AboutBio = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        const mm = gsap.matchMedia();
        
        mm.add('(min-width : 768px)', () => {
            const timeline = gsap.timeline({paused : true, repeat : -1});
            const elements = gsap.utils.toArray<HTMLDivElement>('.bio-element');
            elements.forEach((el, i) => {
                timeline.fromTo(el, {y : 100}, {y : 0, delay : i*0.1, scrollTrigger : {
                    trigger : el,
                    start : 'top bottom',
                    end : 'top top',
                    scrub : true,
                    onUpdate : (self) => {
                        console.log(self.progress);
                    }
                }})
            })
        });

        return () => {
            ScrollTrigger.killAll();
            mm.revert();
        }
    }, {scope : containerRef})
  return (
    <section ref={containerRef} className="section min-h-screen w-full flex flex-col justify-center items-center py-section px-nav">
        <div className="max-w-7xl w-full">
        <h1 className="w-min font-secondary font-light text-h5">Bio</h1>
        <div className='bio-element'>
            <Separator/>
        </div>
        <p className="bio-element font-primary font-medium text-pretty text-h5 md:text-h4 mt-4 text-black-color">{bioP1}</p>
        {/* <div className="mt-16 w-full flex items-center md:justify-end justify-center">
            <div style={{transformStyle : 'preserve-3d', transform : "rotateX(60deg) rotateZ(-45deg) "}} className='w-64 h-64 flex items-center justify-center'>
            <div style={{transformStyle : 'preserve-3d', }} className='w-40 h-40  absolute animate-hover-and-spin'>
                {
                    [...Array(9)].map((item, index) => {
                        const zStep = 160/8;
                        const zToCenter = Math.abs(80 - zStep*index);
                        const radius = Math.sqrt(Math.abs(Math.pow(80,2) - Math.pow(zToCenter, 2)));
                        return <div key={index} style={{transform : `translateX(-50%) translateY(-50%) translateZ(${zStep*index}px)`, width : radius*2, height : radius*2}} className='w-full h-full rounded-full border-2 left-1/2 top-1/2 border-zinc-700 absolute'>

                        </div>
                    })
                }
                {
                    [...Array(11)].map((item, index) => {
                        const deg = 360/10;
                        return <div key={index} style={{transform: `rotateX(90deg) rotateY(${deg*index}deg)`}} className='absolute w-full h-full border-2 border-zinc-700 top-1/2 origin-top rounded-full'>

                        </div>
                    })
                }

                
            </div>
            </div>
        </div> */}
        </div>
    </section>
  )
}

export default AboutBio