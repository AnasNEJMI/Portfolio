import React, { useRef } from 'react'
import { useVerticalNavState } from '@/contexts/vertical_nav_state_context';
import Link from 'next/link';
import Image from 'next/image';

const VerticalNav = () => {
    let containerRef = useRef(null);
    let {isVerticalNavOpen} = useVerticalNavState();

  return (
    <div ref = {containerRef} className = {`h-screen w-full fixed top-0 bottom-0 left-0 z-40 ${isVerticalNavOpen? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`h-screen w-full fixed top-0 left-0 z-10 transition-all duration-700 ease-out bg-zinc-500 ${isVerticalNavOpen? 'opacity-40' : 'opacity-0'}`}></div>
        <div className = {`vartical-nav absolute top-0 left-full z-20 w-full h-full max-w-3xl flex items-stretch justify-center ease-in-out-custom transition-all duration-700 will-change-transform ${isVerticalNavOpen? '-translate-x-full' : ' translate-x-0'}`}>
            <svg className = {`vertical-nav-curve w-20 md:w-40 h-full overflow-visible translate-x-px origin-right ease-in-out-custom transition-all duration-1000 will-change-transform ${isVerticalNavOpen? 'scale-x-0' : 'scale-x-100'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d = "M 100 0 V 100 Q 0 50 100 0 z" className = "fill-black-color z-50"></path>
            </svg>
            <div className = "bg-black-color w-full">
                <div className = {`p-nav transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 opacity-1 delay-75' : 'translate-x-1/4 delay-0 opacity-0'}`}>
                    <Link href = "/" className = "h-16 flex items-center justify-start">
                        <Image src = "/images/logo.svg" alt = "Logo" width = {80} height = {80} className="h-auto invert"/>
                    </Link >
                </div>
                
                <div className = "w-full h-px pl-nav pr-nav"><div className = "w-full bg-white h-full opacity-50"></div></div>
                <ul  className = "p-nav flex flex-col items-start justify-start">
                    <li className = {`transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-75' : 'translate-x-1/4 delay-0'}`}><Link href = "/about" className = {`py-4 px-6 rounded-full text-h6 text-white`}>À Propos</Link></li>
                    <li className = {`mt-6 transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-100' : 'translate-x-1/4 delay-0'}`}><Link href = "/projets" className = "py-4 px-6 rounded-full text-h6 text-white mt-6">Projets</Link></li>
                    <li className = {`mt-6 transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-150' : 'translate-x-1/4 delay-0'}`}><Link href = "/contac" className = "py-4 px-6 text-h6 text-white mt-6">Me Contacter</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default VerticalNav