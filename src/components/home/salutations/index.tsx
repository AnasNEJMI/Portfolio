import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const salutations = ['Bonjour', 'こんにちは', 'नमस्कार',  '你好', 'أهلاً','Olá', 'Guten Tag','Hola', 'Hello',  "Bonjour"];

interface SalutationsProps{
    className ? : string
}
const Salutations = ({className} : SalutationsProps) => {
    const containerRef = useRef(null)
    
    useGSAP(() => {
        const salutationYSetter = gsap.quickSetter(".salutations", "yPercent");
        let salutationsTl = gsap.timeline({repeat: Infinity, delay : 4, repeatDelay : 1.5});

        for (let i = 1; i < salutations.length ; i++) {
            if(i < salutations.length - 1){
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out"}, (i === 1  )? "" : "<+=1.5");
            }else{
                salutationsTl.to(".salutations", {yPercent : i*100/(salutations.length), duration : .5, ease : "power3.out", onComplete : () => {salutationYSetter(0)}}, "<+=1.5");
            }
        }
    }, {scope : containerRef})
  return (
    <div ref={containerRef} className={cn('relative', className)}>
        <div className='absolute w-full h-full rounded-xl top-0 left-0 -translate-x-2 translate-y-2 bg-zinc-200 border border-zinc-300 -z-10'></div>
        <div className='origin-bottom h-12 relative overflow-hidden px-4 bg-black text-white rounded-xl'>
            <span className='opacity-0 pointer-events-none font-primary font-bold text-body md:text-h5 h-12 flex items-center justify-center'>こんにちは</span>
            <div className='salutations flex absolute bottom-0 left-0 z-0 items-center w-full  md:items-center justify-center flex-col'>
                {
                    salutations.map((salutation, index) => (
                    <span key={`salutation-${index}`} className='font-primary font-bold text-body md:text-h6 h-12 flex items-center justify-center'>{salutation}</span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Salutations