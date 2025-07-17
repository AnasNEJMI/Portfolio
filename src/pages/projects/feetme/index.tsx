import React, { useRef } from 'react'
import Contact from "../../../components/contact";
import PageWrapper from '../../../components/page-wrapper'
import { Separator } from '@/components/ui/separator';
import { ProjectsData } from '@/utils/helper_functions';
import MagneticButton from '@/components/magnetic-button/magnetic-button';
import GithubLogo from '@/components/logos/github/logo'
import PhoneDisplay from '@/components/phone-display';
import LaptopDisplay from '@/components/laptop-display';
import BigScreenDisplay from '@/components/big-screen-display';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
import Image from 'next/image';

const FeetMePage = () => {
    const data = ProjectsData['feetme'];
    const containerRef = useRef(null)
    const phoneDisplayRef1 = useRef(null);
    const phoneDisplayRef2 = useRef(null);
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

            if(data.githubRepo){
                gsap.set('.github-btn', {y : 0});
                gsap.fromTo('.github-btn', {y : 50}, {y : 10, scrollTrigger : {
                    trigger : '.hero',
                    start : 'top top',
                    end : 'bottom top',
                    scrub : true,
                }})
            }
            
            const stackElements = gsap.utils.toArray<HTMLDivElement>('.stack-element');
            console.log(stackElements.length);
            stackElements.forEach((el, i) => {
                gsap.set(el, {y : 100});
                gsap.fromTo(el, {y : 100}, {y : 0, delay : i*0.2, scrollTrigger : {
                    trigger : el,
                    start : 'top bottom',
                    end : 'center center',
                    scrub : true,
                }})
            })
            gsap.set('.stack', {y : 50});
            gsap.fromTo('.phone-element-1', {y : 300}, {y : 0, scrollTrigger : {
                trigger : '.stack',
                start : 'top bottom',
                end : 'bottom top',
                scrub : true,
            }})

            const featuresElements = gsap.utils.toArray<HTMLDivElement>('.features-element');
            featuresElements.forEach((el, i) => {
                gsap.set(el, {y : 100});
                gsap.fromTo(el, {y : 100}, {y : 0, delay : i*0.2, scrollTrigger : {
                    trigger : el,
                    start : 'top bottom',
                    end : 'center center',
                    scrub : true,
                }})
            })
            gsap.set('.features', {y : 50});
            gsap.fromTo('.phone-element-2', {y : 300}, {y : -100, scrollTrigger : {
                trigger : '.features',
                start : 'top bottom',
                end : 'bottom top',
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
                label : "Parcours",
                href : "/about",
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
        
        {
            data.githubRepo && 
            <section className='section flex flex-col items-center bg-transparent w-full my-24'>
                <div className='github-btn w-full max-w-7xl px-nav flex justify-end'>
                    <Link scroll = {false} href={data.githubRepo}>
                        <MagneticButton className='aspect-square'>
                            <GithubLogo/>
                            <span>Répertoire</span>
                        </MagneticButton>
                    </Link>
                </div>
            </section>
        }

        <section className='relative section w-full aspect-square md:aspect-video flex flex-col items-center bg-white mt-24 mb-24 md:mb-0'>
            <Image
            src={data.banner.src}
            alt={`project ${data.title} banner image`}
            width={data.banner.width}
            height={data.banner.height}
            className={`w-full aspect-[${data.banner.width}/${data.banner.height}]`}
            >
            </Image>
        </section>

        <section className='section desc flex flex-col items-center bg-white w-full px-nav mt-0 mb-48 md:mt-48'>
            <div className='w-full max-w-7xl px-nav py-16 rounded-xl bg-black text-white'>
                <h2 className='font-secondary font-light text-h5'>Description</h2>
                <Separator/>
                <p className='font-primary font-medium text-h4 mt-4 text-pretty'>{data.description}</p>
            </div>
        </section>

        {
            data.bigScreenSrc &&
            <section className='section flex bg-white flex-col items-center w-full aspect-square md:aspect-video mt-48'>
                <BigScreenDisplay ref= {BigScreenDisplayRef} title={data.title} imgSrc={data.bigScreenSrc}/>
            </section>
        }

        <section className='section stack flex flex-col items-center bg-white w-full mt-0 mb-48 lg:my-48'>
            <div className='w-full max-w-7xl px-nav flex flex-col items-center lg:flex-row gap-28 md:gap-16'>
                <PhoneDisplay
                    className='phone-element-1'
                    ref = {phoneDisplayRef1}
                    title = {data.title}
                    src={data.phoneDisplay1.src}
                    width={data.phoneDisplay1.width}
                    height={data.phoneDisplay1.height}
                    type={data.phoneDisplay1.type}
                />
                
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='stack-element font-secondary font-light text-h5'>Stack technique</h2>
                    <Separator className='stack-element'/>
                    {
                        data.tech.map((t, index) => (
                            <div key={index}>
                                <div className='stack-element mt-8 font-primary flex items-center justify-center gap-4'>
                                    <span className='py-2 px-4 w-28 md:w-32 text-center h-min bg-zinc-900 text-white rounded-full font-bold text-h6'>{Object.keys(t)[0]}</span>
                                    <span className='flex-1 font-medium'>{Object.values(t)[0]}</span>
                                </div>
                                <Separator className='stack-element my-4'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        {
            data.laptopSrc &&
            <section className='section flex bg-white flex-col items-center justify-center w-full aspect-square md:aspect-video mt-0 lg:my-48'>
            <LaptopDisplay ref={laptopDisplayRef} title={data.title} imgSrc={data.laptopSrc}/>
            </section>
        }
        <section className='section features flex flex-col items-center bg-white w-full mt-0 mb-48 lg:my-48'>
            <div className='w-full max-w-7xl px-nav flex flex-col items-center lg:flex-row gap-28 md:gap-16'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='features-element font-secondary font-light text-h5'>Fonctionnalités</h2>
                    <Separator className='features-element'/>
                    {
                        data.features.map((feature, index) => (
                            <div key={index}>
                                <div className='features-element mt-8 font-primary flex items-start justify-center flex-col md:flex-row gap-4'>
                                    <span className='py-2 px-4 w-full md:w-40 text-center h-min bg-zinc-900 text-white rounded-full font-bold text-body'>{Object.keys(feature)[0]}</span>
                                    <div className='flex-1 font-medium flex flex-col gap-2'>
                                        {
                                            Object.values(feature)[0].map((value, index) => (
                                                <span key={index}>{value}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <Separator className='features-element my-4'/>
                            </div>
                        ))
                    }
                </div>
                <PhoneDisplay
                    className='phone-element-2'
                    ref={phoneDisplayRef2}
                    title = {data.title}
                    src={data.phoneDisplay2.src}
                    width={data.phoneDisplay2.width}
                    height={data.phoneDisplay2.height}
                    type={data.phoneDisplay2.type}
                    />
            </div>
        </section>
        
        <Contact/>
    </PageWrapper>
  )
}

export default FeetMePage