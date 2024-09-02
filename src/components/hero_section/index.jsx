import React, { use, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Image from 'next/image'

const designText = ". Graphisme Dépliant . Développement de Sites Internet . Identité visuelle sur-mesure . UI/UX Design . Conseil/Stratégies Marketing . Animations . Réseaux Sociaux"

const sparklePaths = [
    "M123.893,346.5a5.371,5.371,0,0,1-5.5,5.5,5.371,5.371,0,0,1,5.5,5.5,5.45,5.45,0,0,1,4.714-5.5A5.45,5.45,0,0,1,123.893,346.5Z",
    "M159.893,355.5a5.371,5.371,0,0,1-5.5,5.5,5.371,5.371,0,0,1,5.5,5.5,5.45,5.45,0,0,1,4.714-5.5A5.45,5.45,0,0,1,159.893,355.5Z",
    "M267.386,360a5.427,5.427,0,0,1-1.543,3.929,5.226,5.226,0,0,1-3.856,1.571,5.226,5.226,0,0,1,3.856,1.571A5.427,5.427,0,0,1,267.386,371a5.581,5.581,0,0,1,1.542-3.929,5.356,5.356,0,0,1,3.085-1.571,5.356,5.356,0,0,1-3.085-1.571A5.581,5.581,0,0,1,267.386,360Z",
    "M316.386,344a5.427,5.427,0,0,1-1.543,3.929,5.226,5.226,0,0,1-3.856,1.571,5.226,5.226,0,0,1,3.856,1.571A5.427,5.427,0,0,1,316.386,355a5.581,5.581,0,0,1,1.542-3.929,5.356,5.356,0,0,1,3.085-1.571,5.356,5.356,0,0,1-3.085-1.571A5.581,5.581,0,0,1,316.386,344Z",
    // "M355.386,351a5.427,5.427,0,0,1-1.543,3.929,5.226,5.226,0,0,1-3.856,1.571,5.226,5.226,0,0,1,3.856,1.571A5.427,5.427,0,0,1,355.386,362a5.581,5.581,0,0,1,1.542-3.929,5.356,5.356,0,0,1,3.085-1.571,5.356,5.356,0,0,1-3.085-1.571A5.581,5.581,0,0,1,355.386,351Z",
    "M244.54,341a7.3,7.3,0,0,1-2.16,5.357,7.41,7.41,0,0,1-5.4,2.143,7.41,7.41,0,0,1,5.4,2.143A7.3,7.3,0,0,1,244.54,356a7.454,7.454,0,0,1,6.479-7.5A7.454,7.454,0,0,1,244.54,341Z",
    // "M199.537,355a7.334,7.334,0,0,1-7.524,7.5,7.334,7.334,0,0,1,7.524,7.5,7.444,7.444,0,0,1,6.45-7.5A7.444,7.444,0,0,1,199.537,355Z",
    // "M298.537,355a7.334,7.334,0,0,1-7.524,7.5,7.334,7.334,0,0,1,7.524,7.5,7.444,7.444,0,0,1,6.45-7.5A7.444,7.444,0,0,1,298.537,355Z",
    // "M191.745,343.566A3.353,3.353,0,0,1,188.311,347a3.353,3.353,0,0,1,3.434,3.434A3.405,3.405,0,0,1,194.689,347,3.405,3.405,0,0,1,191.745,343.566Z",
    // "M148.231,345a3.568,3.568,0,0,1-.924,2.5,3.035,3.035,0,0,1-2.308,1,3.035,3.035,0,0,1,2.308,1,3.568,3.568,0,0,1,.924,2.5,3.666,3.666,0,0,1,.923-2.5,3.146,3.146,0,0,1,1.847-1,3.146,3.146,0,0,1-1.847-1A3.666,3.666,0,0,1,148.231,345Z",
    "M272.231,347a3.568,3.568,0,0,1-.924,2.5,3.035,3.035,0,0,1-2.308,1,3.035,3.035,0,0,1,2.308,1,3.568,3.568,0,0,1,.924,2.5,3.666,3.666,0,0,1,.923-2.5,3.146,3.146,0,0,1,1.847-1,3.146,3.146,0,0,1-1.847-1A3.666,3.666,0,0,1,272.231,347Z",
    "M227.231,360a3.568,3.568,0,0,1-.924,2.5,3.035,3.035,0,0,1-2.308,1,3.035,3.035,0,0,1,2.308,1,3.568,3.568,0,0,1,.924,2.5,3.666,3.666,0,0,1,.923-2.5,3.146,3.146,0,0,1,1.847-1,3.146,3.146,0,0,1-1.847-1A3.666,3.666,0,0,1,227.231,360Z",
]


const HeroSection = () => {
    let orbitingSvg = useRef(null)

    useGSAP(() => {
        gsap.to(orbitingSvg.current, {willChange : "transform",rotateZ : 360, duration : 20, ease : "none", repeat : Infinity})
    })

  return (
    <section className = "section w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-24"> 
        <div className = "flex flex-col justify-center items-end w-min pl-nav pr-nav md:pr-0">
            <div className= "text-start w-full text-caption md:text-h6 font-medium mt-8 md:mt-0 ">
                <div>Bonjour !</div> 
                <div className = "text-body">Je suis <span className = "font-black text-h6">Anas NEJMI</span></div>
            </div>
            <div className = "flex flex-col w-min text-h1 font-bold -mt-4 leading-none relative">
                <div className = "w-full flex justify-between items-end">
                    <h1 className = "font-black">Designer</h1>
                    <div className='w-min -translate-y-[7%] md:translate-y-[5%] lg:translate-y-[5%] md:pl-10'>
                        <h2 className='absolute flex items-end justify-start flex-col h-full w-full mix-blend-difference text-jet-200 right-0  -translate-y-[40%] md:-translate-y-1/2 '>
                        <span className=' font-bold text-body lg:text-h6 text-nowrap'>Basé à</span>
                        <span className='text-caption lg:text-body'>Paris</span>
                        </h2>
                        <svg className='h-20 md:h-20 lg:h-28 md:-translate-y-[18%] aspect-square z-0' viewBox='0 0 100 100'>

                        <g stroke = "rgb(22,22,22)" className=' animate-squish-squash origin-bottom'>
                            <g>
                            <path d='M47 10 Q47 4 50 4 Q53 4 53 10 L47 10' fill='transparent'></path>
                            <rect x={49} y={0} width={2} height={4} rx={1} ry={1} fill='transparent'></rect>
                            </g>
                            <path d='M20 96 Q49 60 48 10 L52 10 Q52 60 80 96 L65 96 Q65 80 50 80 Q35 80 35 96 L20 96' fill='transparent'></path>
                            <path d='M33 66 L67 66 L64 70 L36 70 L33 66' fill='transparent'></path>
                            <path d='M40 46 L60 46 L57 50 L43 50 L40 46' fill='transparent'></path>
                            <path d='M44 66 Q47 56 47 55 L53 55 Q53 56 56 66' fill='transparent'></path>
                            <path d='M66 90 Q64 78 50 78 Q36 78 34 90' fill='transparent'></path>
                        </g>
                        
                        <path d='M10 96 L90 96 Q95 96 95 98 Q95 100 90 100 L10 100 Q5 100 5 98 Q5 96 10 96' fill='black'></path>

                        <path className=' animate-left-to-right animate-delay-100' d='M12 29 L28 29 Q30 29 30 30 Q30 31 28 31 L12 31 Q10 31 10 30 Q10 29 12 29'></path>
                        <path className=' animate-left-to-right' d='M62 9 L83 9 Q85 9 85 10 Q85 11 83 11 L62 11 Q60 11 60 10 Q60 9 62 9'></path>
                        <path className=' animate-left-to-right animate-delay-300' d='M72 49 L78 49 Q80 49 80 50 Q80 51 78 51 L72 51 Q70 51 70 50 Q70 49 72 49'></path>
                        </svg>
                    </div>
                </div>
                <h1 className = "w-full font-black flex justify-between items-center">Développeur</h1>
                
            </div>

            
        </div>
        
        <div className= " max-w-[600px] h-full relative flex flex-col items-center justify-between w-full aspect-square pr-nav pl-nav md:pl-0">
                <div style={{transformStyle : 'preserve-3d'}} className='relative w-3/4 h-3/4'>
                    <div className='relative w-full h-full bg-jet-600 overflow-x-hidden flex items-center justify-center overflow-hidden animate-hover'>
                        {/* <Image
                                className='object-contain'
                                alt={'hero illustration'}
                                fill = {true}
                                src={`/images/hero-illustration.svg`}
                        /> */}
                    </div>
                    {/*   */}
                    <div style={{transform : 'translateX(-50%) translateY(-50%) rotateY(-25deg) rotateX(35deg)'}} className='w-[120%] overflow-hidden aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center'>
                            <svg ref = {orbitingSvg} className='w-[95%] relative aspect-square overflow-visible' viewBox='0 0 100 100'>
                                <defs>
                                    <mask id = "mask">
                                        <circle cx={50} cy={50} r={50}  fill='white'></circle>
                                        <circle cx={50} cy={50} r={43}  fill='black'></circle>
                                    </mask>
                                </defs>
                                
                                {/* <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='blue' className=''></circle> */}
                                <circle  cx={52} cy={52} r={50} mask = 'url(#mask)' fill='blue' className='origin-center'></circle>
                                <circle  cx={50} cy={50} r={50} mask = 'url(#mask)' fill='white' className='origin-center'></circle>
                                <circle  cx={50} cy={50} r={43}  fill='transparent' stroke='red' className='origin-center'></circle>


                                <path id='orbitText' preserveAspectRatio='false' d='M2 50 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0' stroke='transparent' fill='transparent'></path>
                                <path id='orbitExt'  preserveAspectRatio='false' d='M0 50 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0' stroke='black' fill='transparent' strokeWidth={.5}></path>
                                {/* <path id='orbitInt' preserveAspectRatio='false' d='M6 50 a 43,43 0 1,0 86,0 a 43,43 0 1,0 -86,0' stroke='black' fill='transparent' strokeWidth={.5}></path> */}

                                <text textAnchor='middle' className=' origin-center'>
                                    <textPath href='#orbitText' fill='rbg(34 34 34)' startOffset='50%'  className='font-moriRegular text-[5px]'> 
                                        {designText}
                                    </textPath>
                                </text>
                                
                            </svg>
                    </div>
                    {/* <div style={{transformStyle : 'preserve-3d', transform : 'translateX(-50%) translateY(-50%) rotateY(-25deg) rotateX(35deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center'>
                        <svg style={{transformStyle : 'preserve-3d'}} className='w-full absolute aspect-square origin-center' viewBox='0 0 100 100'>
                            <defs>
                                <linearGradient id="blackToTransparent" x1="50%" y1="0%" x2="10%" y2="150%">
                                    <stop offset="0%" stopColor='var(--black-color)' stopOpacity={1}/>
                                    <stop offset="10%" stopColor='var(--black-color)' stopOpacity={0}/>
                                    <stop offset="100%" stopColor='var(--black-color)' stopOpacity={0}/>
                                </linearGradient>
                                <radialGradient id="myRadialGradient" cx="65%" cy="100%" r="50%" fx="65%" fy="100%">
                                    <stop offset="0%" stopColor='var(--black-color)' stopOpacity={1}/>
                                    <stop offset="30%" stopColor='var(--black-color)' stopOpacity={1} />
                                    <stop offset="50%" stopColor='var(--black-color)' stopOpacity={0} />
                                    <stop offset="100%" stopColor='var(--black-color)' stopOpacity={0} />
                                </radialGradient>
                                <mask id = "mask">
                                    <circle cx={50} cy={50} r={50}  fill='white'></circle>
                                    <circle cx={50} cy={50} r={44}  fill='black'></circle>
                                </mask>
                            </defs>
                            
                            
                            <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='url(#myRadialGradient)' className = "absolute left-[-5%] z-0 animate-rotate animate-duration-5000 will-change-transform animate-delay-4000 origin-center"></circle>

                            <path id='orbitText' preserveAspectRatio='false' d='M2 50 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0' stroke='transparent' fill='transparent'></path>

                            <text textAnchor='middle' className='rotating-text origin-center absolute left-[-5%] flex animate-rotate animate-duration-5000 will-change-transform'>
                                <textPath href='#orbitText' fill='white' startOffset='50%' textRendering='geometricPrecision' letterSpacing={1} fontWeight={700}  className=' antialiased text-[calc(var(--body-font-size)*0.3)]'> 
                                    Rigueur
                                </textPath>
                            </text>
                            
                        </svg>
                    </div>
                    <div style={{transformStyle : 'preserve-3d', transform : 'translateX(-50%) translateY(-50%) rotateY(-45deg) rotateX(35deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center'>
                        <svg style={{transformStyle : 'preserve-3d'}} className='w-full absolute aspect-square origin-center' viewBox='0 0 100 100'>                            
                            <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='url(#myRadialGradient)' className = "absolute left-[-5%] z-0 animate-rotate animate-duration-5000 will-change-transform animate-delay-2000 origin-center"></circle>
                            <text textAnchor='middle' className='rotating-text origin-center absolute left-[-5%] flex animate-rotate animate-duration-5000 animate-delay-3000 will-change-transform'>
                                <textPath href='#orbitText' fill='white' startOffset='50%' textRendering='geometricPrecision' letterSpacing={1} fontWeight={700}  className=' antialiased text-[calc(var(--body-font-size)*0.3)]'> 
                                    Flexibilité
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div style={{transformStyle : 'preserve-3d', transform : 'translateX(-50%) translateY(-50%) rotateY(-35deg) rotateX(55deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center'>
                        <svg style={{transformStyle : 'preserve-3d'}} className='w-full absolute aspect-square origin-center' viewBox='0 0 100 100'>
                            <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='url(#myRadialGradient)' className = "absolute left-[-5%] z-0 animate-rotate animate-duration-5000 will-change-transform animate-delay-3000 origin-center"></circle>

                            <text textAnchor='middle' className='rotating-text origin-center absolute left-[-5%] flex animate-rotate animate-duration-5000 animate-delay-4000 will-change-transform'>
                                <textPath href='#orbitText' fill='white' startOffset='50%' textRendering='geometricPrecision' letterSpacing={1} fontWeight={700}  className=' antialiased text-[calc(var(--body-font-size)*0.3)]'> 
                                    Efficacité
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div style={{transformStyle : 'preserve-3d', transform : 'translateX(-50%) translateY(-50%) rotateY(60deg) rotateX(40deg)'}} className='w-[135%] aspect-square absolute left-1/2 top-1/2 bg-transparent flex items-center justify-center'>
                        <svg style={{transformStyle : 'preserve-3d'}} className='w-full absolute aspect-square origin-center' viewBox='0 0 100 100'>
                            <circle cx={50} cy={50} r={50} mask = 'url(#mask)' fill='url(#myRadialGradient)' className = "absolute left-[-5%] z-0 animate-rotate animate-duration-5000 will-change-transform animate-delay-1000 origin-center"></circle>

                            <text textAnchor='middle' className='rotating-text origin-center absolute left-[-5%] flex animate-rotate animate-duration-5000 animate-delay-2000 will-change-transform'>
                                <textPath href='#orbitText' fill='white' startOffset='50%' textRendering='geometricPrecision' letterSpacing={1} fontWeight={700}  className=' antialiased text-[calc(var(--body-font-size)*0.3)]'> 
                                    Passion
                                </textPath>
                            </text>                            
                        </svg>
                    </div> */}
                    
                    
                </div>

                <div className = "absolute bottom-0">
                    <svg id="base-plateau" className = "w-full h-full" width="473" height="431" viewBox="0 0 473 431">
                        <defs>
                            {/* <filter id="enhancedGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                <feGaussianBlur stdDeviation="5" result="coloredBlur2" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur2" />
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter> */}
                            <linearGradient id="linear-gradient" x1="236.5" y1="371" x2="236.5" y2="-5" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="var(--primary-color-regular)"/>
                            {/* <stop offset="0.3" stopColor="var(--primary-color-light)"/> */}
                            <stop offset="0.4" stopColor="#aae77d" stopOpacity="0"/>
                            <stop offset="1" stopColor="var(--primary-color-light)" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <path className="cls-1" d="M431,373H38v28a12.683,12.683,0,0,0,7,8c6.9,2.654,13.87,4.977,21,7,18.478,5.243,33.724,7.086,54,9,22.276,2.1,48.376,4.649,64,5,8.764,0.2,18.811.233,28.329,0.429,7.6,0.157,16.283.722,22.671,0.571,21.958-.519,43.821-1.183,66-2,14.8-.545,28.216-2.192,43-3,20.748-1.134,52.392-7.813,67-12a52.954,52.954,0,0,0,8-3c2.731-1.29,4.221-2.817,7-4a8.027,8.027,0,0,0,4-3,6.828,6.828,0,0,0,1-3V373Z"/>
                        <path id="plateau" className="stroke-black fill-white" d="M234.5,343.152c107.974,0,195.505,13.363,195.505,29.848s-87.531,29.848-195.5,29.848S38.995,389.485,38.995,373,126.526,343.152,234.5,343.152Z"/>
                        <path id="glow-base" filter='url(#enhancedGlow)' className="fill-primary-regular" d="M235,334c81.192,0,147.011,8.729,147.011,19.5S316.192,373,235,373,87.989,364.269,87.989,353.5,153.808,334,235,334Z"/>
                        <path id="glow" filter='url(#enhancedGlow)' fill ={`url(#linear-gradient)`}  d="M0-5H473L382,353a90.154,90.154,0,0,1-31,10c-26.679,3.66-78.526,8.25-116,8-31.567-.212-95.018-4.9-97-5-5.36-.276-18.807-1.648-30-5a120.4,120.4,0,0,1-20-8Z"/>
                        
                        {
                            sparklePaths.map((path, index) => (
                                <path key={index} id={`sparkle-${index}`} className="fill-white" d={path}>
                                    <animateTransform
                                        attributeName="transform"
                                        type="translate"
                                        from="0 0"
                                        to="0 -200"
                                        dur="6s"
                                        repeatCount="indefinite"
                                        begin={`${-index * 0.5}s`}
                                    />
                                    
                                    {/* <animateMotion
                                        path="M0 0 V-200 Z"
                                        dur="4s"
                                        repeatCount="indefinite"
                                        begin={`${index * 0.5}s`}
                                    /> */}
                                    
                                    {/* Opacity animation for fading in and out twice */}
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;0;1;0;"
                                        dur="4s"
                                        repeatCount="indefinite"
                                        begin={`${-index * 0.5}s`}
                                    />
                                </path>
                            ))
                        }
                        <path id="ring-1" strokeWidth={0.8} className="fill-transparent stroke-black opacity-50" d="M235,338c100.524,0,182.014,12.087,182.014,27S335.524,392,235,392,52.986,379.91,52.986,365,134.476,338,235,338Z">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0; 0 -50; 0 0"
                                keyTimes="0; 0.5; 1"
                                keySplines="0.6 0 0.4 1; 0.6 0 0.4 1"
                                calcMode="spline"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </path>
                        <path id="ring-2" strokeWidth={0.8} className="fill-transparent stroke-black opacity-50" d="M235,337c93.343,0,169.013,10.521,169.013,23.5S328.343,384,235,384,65.987,373.477,65.987,360.5,141.657,337,235,337Z">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0; 0 -55; 0 0"
                                keyTimes="0; 0.5; 1"
                                keySplines="0.6 0 0.4 1; 0.6 0 0.4 1"
                                calcMode="spline"
                                begin = "1s"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </svg>
                </div>
        </div>

    </section>
  )
}

export default HeroSection