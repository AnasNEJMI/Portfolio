import { map } from '@/lib/helpers'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import React, { useRef } from 'react'

interface PhoneDisplaysProps{
    className? : string,
    title : string,
    data : {src : string, width : number, height : number, type : 'image' | 'video'}[],
}
const PhoneDisplays = ({className, data, title} : PhoneDisplaysProps) => {
    const smallScreensRef = useRef<HTMLDivElement>(null)
    const phoneLeftRef = useRef<HTMLDivElement>(null)
    const phoneRightRef = useRef<HTMLDivElement>(null)

    useGSAP(()=> {
        const movePhoneLeftY = gsap.quickTo(phoneLeftRef.current, 'y');
        const movePhoneRightY = gsap.quickTo(phoneRightRef.current, 'y');

        ScrollTrigger.create({
            trigger : smallScreensRef.current,
            start : "top bottom",
            end : "bottom top",
            onUpdate : (self) => {
                movePhoneLeftY(map(self.progress, 0, 1, 100, -100));
                movePhoneRightY(map(self.progress, 0, 1, -100, 100));
            }
        })
    })
  return (
    <section
        ref = {smallScreensRef}
        className='w-full flex flex-col justify-center items-center relative overflow-hidden mt-40 bg-green-500'
    >
        <svg style={{filter: 'drop-shadow(0px 5px 5px rgb(0 0 0 / 0.7))'}} className='w-full absolute -top-px z-10' viewBox='0 0 100 15'>
            <path d={`M0 0 L100 0 L100 15 Q50 -15 0 15 L0 0`} fill='white'/>
        </svg>
        
        <svg style={{filter: 'drop-shadow(0px 10px 20px rgb(0 0 0 / 0.7))'}} className='w-full absolute -bottom-px z-10' viewBox='0 0 100 15'>
            <path d='M0 0 Q50 30 100 0 L100 15 L0 15 L0 0' fill='white'/>
        </svg>

        <div className=' w-full max-w-7xl flex items-center justify-between gap-6 md:gap-12 lg:gap-24 py-[calc(var(--section-padding)*0.5)] md:py-[calc(var(--section-padding)*0.75)] px-[calc(var(--container-padding)*1.5)] md:px-[calc(var(--container-padding)*2)]'
        >
            <div ref = {phoneLeftRef} className="flex-1 w-full aspect-[25/52] max-w-xs relative border-4 lg:border-[6px] border-black rounded-2xl bg-black">
                {
                    data && data[0].src && data[0].type === 'video' && 
                    <video className={`w-full aspect-[25/52] rounded-2xl`} width={data[0].width} height={data[0].height} muted autoPlay loop playsInline>
                        <source src={data[0].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    data && data[0].src && data[0].type === 'image' && 
                    <Image
                        src={data[0].src}
                        width={data[0].width}
                        height={data[0].height}
                        alt={`Project ${title} - Big Screen Display`}
                        className='w-full rounded-2xl'
                    ></Image>
                }
                {/* notch  */}
                <div className="border border-black bg-black w-[45%] aspect-[6/1] absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl"/>
                {/* right top buttons  */}
                <span className="absolute -right-2 top-[15%] border-1 md:border-2 lg:border-4 border-black h-[8%] rounded-md"></span>
                <span className="absolute -right-2 top-[34%] border-1 md:border-2 lg:border-4 border-black h-[18%] rounded-md"></span>
            </div>
            <div className="flex-1 w-full aspect-[25/52] max-w-xs relative border-4 lg:border-[6px] border-black rounded-2xl bg-black">
                {
                    data && data[1].src && data[1].type === 'video' && 
                    <video className={`w-full aspect-[25/52] rounded-2xl`} width={data[1].width} height={data[1].height} muted autoPlay loop playsInline>
                        <source src={data[1].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    data && data[1].src && data[1].type === 'image' && 
                    <Image
                        src={data[1].src}
                        width={data[1].width}
                        height={data[1].height}
                        alt={`Project ${title} - Big Screen Display`}
                        className='w-full rounded-2xl'
                    ></Image>
                } 
                {/* notch  */}
                <div className="border border-black bg-black w-[45%] aspect-[6/1] absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl"/>
                {/* right top buttons  */}
                <span className="absolute -right-2 top-[15%] border-1 md:border-2 lg:border-4 border-black h-[8%] rounded-md"></span>
                <span className="absolute -right-2 top-[34%] border-1 md:border-2 lg:border-4 border-black h-[18%] rounded-md"></span>
            </div>
            <div ref = {phoneRightRef} className="flex-1 w-full aspect-[25/52] max-w-xs relative border-4 lg:border-[6px] border-black rounded-2xl bg-black flex items-center justify-center">
                {
                    data && data[2].src && data[2].type === 'video' && 
                    <video className={`w-full aspect-[25/52] rounded-2xl`} width={data[2].width} height={data[2].height} muted autoPlay loop playsInline>
                        <source src={data[2].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
                {
                    data && data[2].src && data[2].type === 'image' && 
                    <Image
                        src={data[2].src}
                        width={data[2].width}
                        height={data[2].height}
                        alt={`Project ${title} - Big Screen Display`}
                        className='w-full rounded-2xl'
                    ></Image>
                }    
                {/* notch  */}
                <div className="border border-black bg-black w-[45%] aspect-[6/1] absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl"/>
                {/* right top buttons  */}
                <span className="absolute -right-2 top-[15%] border-1 md:border-2 lg:border-4 border-black h-[8%] rounded-md"></span>
                <span className="absolute -right-2 top-[34%] border-1 md:border-2 lg:border-4 border-black h-[18%] rounded-md"></span>
            </div>
        </div>
    </section>
  )
}

export default PhoneDisplays