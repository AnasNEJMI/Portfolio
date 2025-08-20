import MagneticButton from '@/components/magnetic-button/magnetic-button';
import PageWrapper from '@/components/page-wrapper'
import { ProjectsData } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useRef } from 'react'
import GithubLogo from '@/components/logos/github/logo'
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import BigScreenDisplay from '@/components/big-screen-display';
import LaptopDisplay from '@/components/laptop-display';
import { ScrollTrigger } from 'gsap/all';
import PhoneDisplays from '@/components/phone-displays';
import Contact from '@/components/contact';
import { Globe } from 'lucide-react';

const SidraPage = () => {
    const data = ProjectsData['sidra'];
    const containerRef = useRef(null)
    const laptopDisplayRef = useRef(null);
    const BigScreenDisplayRef = useRef(null);
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width : 768px)', () => {
            gsap.fromTo('.hero', {y : 0}, {y :  100, scrollTrigger : {
                trigger : '.hero',
                start : 'top top',
                end : '+=100%',
                scrub : true,
            }})

            return () => {
                ScrollTrigger.killAll();
            }
        })

        return () => {
            mm.revert();
        }
    }, {scope : containerRef})
  return (
    <PageWrapper
        links={[
            {
                label : "Acceuil",
                href : "/",
            },
            {
                label : "Projets",
                href : "/projects",
            },
            {
                label : "Contact",
                href : "/contact",
            },
        ]}
        ref = {containerRef}
    >
        <section className='section hero flex flex-col items-center bg-white w-full pt-64  md:pt-48'>
            <div className='w-full max-w-7xl px-nav'>
                <h1 className='font-secondary font-black text-h1'>{data.title}</h1>
                <div className='flex items-center justify-between mt-24 flex-col gap-12 md:gap-0 md:flex-row font-primary'>
                    <div className='flex-1 w-full flex items-center md:items-start justify-start flex-row md:flex-col'>
                        <h2 className=' uppercase font-bold text-zinc-500 text-xs'>Catégorie</h2>
                        <div className=' w-full h-full py-0 px-6 md:py-6 md:px-0 relative'>
                            <div className='h-px w-full bg-zinc-500'></div>
                        </div>
                        <h3 className=' font-regular text-zinc-900 text-base text-nowrap'>{data.category}</h3>
                    </div>
                    <div className='flex-1 w-full flex items-center md:items-start justify-start flex-row md:flex-col'>
                        <h2 className=' uppercase font-bold text-zinc-500 text-xs'>Période de développement</h2>
                        <div className='w-full h-full py-0 px-6 md:py-6 md:px-0 relative'>
                            <div className='h-px w-full bg-zinc-500'></div>
                        </div>
                        <h3 className='font-regular text-zinc-900 text-base text-nowrap'>{data.duration}</h3>
                    </div>
                    <div className='flex-1 w-full flex items-center md:items-start justify-start flex-row md:flex-col'>
                        <h2 className=' uppercase font-bold text-zinc-500 text-xs'>Date de réalisation</h2>
                        <div className=' w-full h-full py-0 px-6 md:py-6 md:px-0 relative'>
                            <div className='h-px w-full bg-zinc-500'></div>
                        </div>
                        <h3 className='font-regular text-zinc-900 text-base text-nowrap'>{data.startDate}</h3>
                    </div>
                </div>
            </div>
        </section>
        
        <section className='section flex flex-col items-center bg-transparent w-full my-24'>
            <div className='github-btn w-full max-w-7xl px-nav flex justify-end'>
                    <MagneticButton className='aspect-square w-96'>
                        <Link scroll = {false} href={'https://sidra-studio.vercel.app/'} className='w-full flex items-center justify-center gap-4'>
                                <Globe className='group-hover:stroke-zinc-900 transition-all duration-200 ease-out'/>
                                <span>Site Internet</span>
                        </Link>
                    </MagneticButton>
            </div>
        </section>

        <section style={{backgroundColor : data.color}} className='relative section w-full aspect-square md:aspect-video flex flex-col items-center justify-center bg-white'>
            <Image
            src={data.banner.src}
            alt={`project ${data.title} banner image`}
            width={data.banner.width}
            height={data.banner.height}
            className={`w-full aspect-[${data.banner.width}/${data.banner.height}]`}
            >
            </Image>
        </section>

        <section className='section desc flex flex-col items-center bg-white w-full px-nav mt-12 md:mt-48'>
            <div className='w-full max-w-7xl px-nav py-16 rounded-xl bg-black text-white'>
                <h2 className='font-secondary font-light text-h5'>Description</h2>
                <Separator/>
                <p className='font-primary font-medium text-h6 leading-7 mt-4 text-pretty'>{data.description}</p>
            </div>
        </section>

        {
            data.bigScreenSrc &&
            <section className='section flex bg-white flex-col items-center w-full md:aspect-video mt-48'>
                <BigScreenDisplay ref= {BigScreenDisplayRef} title={data.title} imgSrc={data.bigScreenSrc}/>
            </section>
        }

        <PhoneDisplays
            data = {data.phoneDisplays}
            title= {'Sidra'}
        />
        {
            data.laptopSrc &&
            <section className='section flex bg-white flex-col items-center justify-center w-full my-40'>
            <LaptopDisplay ref={laptopDisplayRef} title={data.title} imgSrc={data.laptopSrc}/>
            </section>
        }
        
        <Contact/>
    </PageWrapper>
  )
}

export default SidraPage