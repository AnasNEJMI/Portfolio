import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'
import profilePic from '@/../public/images/profile-pic.png'
import { MotionPathPlugin } from 'gsap/all'

gsap.registerPlugin(MotionPathPlugin);

const accroche = "Allier design et ingénierie pour concevoir des produits et des expériences utiles, intuitifs, percutants et performants."
const description1 = "Je conçois des interfaces et des fonctionnalités intuitives et performantes, en combinant des technologies modernes comme React et Next.js."
const description2 = "Chaque projet est pensé pour offrir une expérience utilisateur fluide, utile et engageante, tout en garantissant performance, maintenabilité et évolutivité."

const knowHow = [
    {
        title : "Développement Full-stack",
        desc : "Conception et développement d'applications web scalables et performantes avec Next.js, React, Node.js et TypeScript, reposant sur des architectures back-end robustes, des API REST sécurisées et des bonnes pratiques de clean code."
    },
    {
        title : "UI/UX Design et Front end",
        desc : "Conception d'interfaces modernes et responsive avec Figma, Tailwind CSS, GSAP et Framer Motion, et création d'expériences utilisateur intuitives et claires basées sur des design systems clairs et des implémentations pixel-perfect."
    },
    {
        title : "Développement des API",
        desc : "Conception d'API maintenables, robustes et évolutives, pensées pour durer et s'adapter aux besoins métier. Une attention particulière est portée à l'optimisation des performances, à l'application de bonnes pratiques de sécurité."
    },
]

const Profile = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const q = gsap.utils.selector(containerRef);
        const wrapper = q('.wrapper');
        const imageWrapper = q('.image-wrapper');
        
        const path = q('#profile-text2')[0];
        if (!(path instanceof SVGPathElement)) return;
        const pathLength = path.getTotalLength();

        console.log('Path length : ',pathLength)
        
        const rotatingTextPath = q('.rotating-text-path')[0];
        if (!(rotatingTextPath instanceof SVGTextPathElement)) return;
        const rotatingTextPathLength = rotatingTextPath.getComputedTextLength();
        console.log('Rotation Text Path length : ',rotatingTextPathLength)

        gsap.to(wrapper, {width : '100%', y : 0, borderRadius : 0, scrollTrigger : {
            trigger : wrapper,
            start : '64px bottom',
            end : 'center bottom',
            scrub : true
        }})
        gsap.to(imageWrapper, {scale : 1, scrollTrigger : {
            trigger : wrapper,
            start : '64px bottom',
            end : 'center bottom',
            scrub : true
        }})

        gsap.to(rotatingTextPath, {
            attr : {startOffset : 0},
            duration : 12,
            repeat : -1,
            ease : "none"
        })
    }, {scope : containerRef})
  return (
    <div ref={containerRef} className='w-full flex flex-col items-center'>
        <section className='relative wrapper w-4/5 translate-y-32 rounded-xl bg-zinc-100 flex flex-col items-center px-nav pb-nav pt-32 gap-8'>
            <div className='image-wrapper relative z-20 rounded-full w-full max-w-sm scale-75 aspect-[6/9] bg-gradient-radial from-white from-60% to-zinc-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 60 90' className='w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-visible'>
                    <path id='profile-text' d='M30 85C5 70 1 74 1 60L1 30C1-9 59-9 59 30L59 60C50 75 45 80 30 85Z' className='fill-none stroke-green-400 stroke-[2]'></path>
                    <path id='profile-text2'  d='M30 83C19 83 8 75 8 60L8 30C8 0 52 0 52 30L52 60C52 75 41 83 30 83Z' className='fill-none'></path>
                    <text className='rotating-text'>
                        <textPath xlinkHref="#profile-text2" fontSize={6.108} startOffset={'-201.13'} color='red' className='rotating-text-path font-primary font-regular'>
                            ✳Développeur Front end ★✩ Développeur Back end ✦✧ Designer UI et UX ✵✳Développeur Front end ★✩ Développeur Back end ✦✧ Designer UI et UX ✵
                        </textPath>
                    </text>
                </svg>

                <Image
                    className='relative z-20 rounded-full'
                    src={profilePic}
                    alt='profile-pic'
                    fill
                />
            </div>
            <div className='font-primary w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 pt-20'>
                <p className='flex-1 text-h4 md:text-h4 font-semibold text-zinc-800 text-balance md:text-pretty'>
                        {accroche}
                </p>
                <div className='flex-1 text-zinc-800'>
                    <p className='md:text-h6 md:text-pretty'>
                        {description1}
                    </p>
                    <p className='md:text-h6 md:text-pretty mt-2 lg:mt-4'>
                        {description2}
                    </p>
                </div>
            </div>
            <div className='font-primary w-full flex items-start justify-center flex-col md:flex-row gap-8 lg:gap-12 pt-4 lg:pt-8'>
                <div className='w-full flex-1 flex flex-col gap-4'>
                    <div className='h-px w-full bg-zinc-200'></div>
                    <span className='w-full font-medium uppercase text-zinc-600'>
                        Années d&apos;expérince
                    </span>
                    <span className='w-full font-bold text-h2 text-zinc-900'>
                        2+
                    </span>
                </div>
                
                <div className='w-full flex-1 flex flex-col gap-4'>
                    <div className='h-px w-full bg-zinc-200'></div>
                    <span className='w-full font-medium uppercase text-zinc-600'>
                        Formation
                    </span>
                    <span className='w-full font-bold text-h2 text-zinc-900'>
                        Bac +4
                    </span>
                </div>
            </div>
        </section>
        <section className='bg-zinc-100 w-full py-40 flex flex-col items-center font-primary'>
            <div className='w-full max-w-7xl px-nav'>
                <div className='w-full max-w-xl text-h4 text-pretty font-medium'>
                    <p>Donner vie à votre vision digitale grâce à une maîtrise complète du design et du développement.</p>
                </div>
                <div className='flex w-full flex-col mt-12'>
                    <div className='hidden lg:block h-px w-full bg-zinc-200'></div>
                    <div className='hidden lg:flex w-full aspect-[3/1]'>
                        <div className='w-px h-full bg-zinc-200'></div>
                        {
                            knowHow.map((how, index) => (
                                <div key={index} className='flex-1 flex'>
                                    <div className='flex-1 p-6 flex flex-col'>
                                        <div className='flex-1 flex justify-between items-start gap-8'>
                                            <span className='flex-1 h-full flex items-center font-bold text-h5 text-zinc-800 text-balance'>{how.title}</span>
                                            <span className=' text-end font-light text-h5 text-zinc-500'>0{index + 1}</span>
                                        </div>
                                        <div className='w-full h-px bg-zinc-200 mt-4'></div>
                                        <div className='flex-1 mt-4 flex items-end'>
                                            <p className=''>
                                                {how.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-px h-full bg-zinc-200'></div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='hidden lg:block h-px w-full bg-zinc-200'></div>
                    <div className='flex lg:hidden flex-col w-full'>
                        {
                            knowHow.map((how, index) => (
                                <div key={index} className='flex-1 flex'>
                                    <div className='flex-1 p-6 pl-0 pr-0 lg:pr-6 flex flex-col'>
                                        <div className='flex-1 flex justify-between items-start gap-8'>
                                            <span className='flex-1 h-full flex items-center font-bold text-h5 text-zinc-800 text-balance'>{how.title}</span>
                                            <span className=' text-end font-light text-h5 text-zinc-500'>0{index + 1}</span>
                                        </div>
                                        <div className='w-full h-px bg-zinc-200 mt-4'></div>
                                        <div className='flex-1 mt-4 flex items-end'>
                                            <p className=''>
                                                {how.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-px h-full bg-zinc-200'></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile