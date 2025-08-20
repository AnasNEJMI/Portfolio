import ImaginationAnim from '@/components/imagination-anim'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const about2 = "Je fais preuve de rigueur et d'attention aux détails pour livrer un code propre et maintenable."
const about3 = "Créatif et curieux, j'aime explorer de nouvelles approches et technologies."
const about4 = "Je mets mon imagination et mon savoir-faire au service de la création d'expériences numériques uniques, percutantes et durables."
const about5 = "J'ai un niveau avancé en anglais (TOEIC : 990/990)."
const HomeQualities = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const elements = gsap.utils.toArray<HTMLDivElement>('.qual-el');
            elements.forEach((el, i) => {
                gsap.fromTo(el, {y : 100}, {y : 0, delay : i*0.15, scrollTrigger : {
                    trigger : el,
                    start : 'top bottom',
                    end : 'top top',
                    scrub : true,
                }})
            })
    })
  return (
    <section ref={containerRef} className="section w-full bg-white z-[9] py-40 flex items-center justify-center overflow-hidden">
        <div className='w-full flex flex-col lg:flex-row max-w-7xl items-center justify-center px-nav gap-24'>
            <ImaginationAnim/>
            <div className='max-w-lg font-primary text-zinc-900 text-h5 flex flex-col gap-8'>
                <p className='qual-el'>{about2}</p>
                <div className='qual-el w-full h-px bg-zinc-200'></div>
                <p className='qual-el'>{about5}</p>
                <div className='qual-el w-full h-px bg-zinc-200'></div>
                <p className='qual-el'>{about3}</p>
                <div className='qual-el w-full h-px bg-zinc-200'></div>
                <p className='qual-el'>{about4}</p>

            </div>
        </div>
    </section>

  )
}

export default HomeQualities