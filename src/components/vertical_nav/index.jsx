import React, { useRef } from 'react'
import { useVerticalNavState } from '@/contexts/vertical_nav_state_context';
import Link from 'next/link';

const VerticalNav = () => {
    let {isVerticalNavOpen} = useVerticalNavState();

  return (
    <div className = {`h-screen font-primary w-full fixed top-0 bottom-0 left-0 z-40 ${isVerticalNavOpen? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`h-screen w-full fixed top-0 left-0 z-10 transition-all duration-700 ease-out bg-zinc-500 ${isVerticalNavOpen? 'opacity-40' : 'opacity-0'}`}></div>
        <div className = {`absolute top-0 left-full z-20 w-full max-w-[700px] h-full flex items-stretch justify-center ease-in-out-custom transition-all duration-700 will-change-transform ${isVerticalNavOpen? '-translate-x-full' : ' translate-x-[160px]'}`}>
            <svg className = {`w-40 absolute top-0 right-full h-full overflow-visible translate-x-px origin-right ease-in-out-custom transition-all duration-1000 will-change-transform ${isVerticalNavOpen? 'scale-x-0' : 'scale-x-100'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d = "M 100 0 V 100 Q 0 50 100 0 z" className = "fill-black z-50"></path>
            </svg>
            <div className = "bg-black w-full">
                <div className = {`mt-16 w-full p-nav`}></div>
                
                <div className ={`w-full pl-nav pr-nav mt-nav transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-100' : 'translate-x-1/4 delay-0'}`}>
                    <div className = "text-body text-white w-min  opacity-70">
                        <span className = "font-light">Navigation</span>
                        <div className = "w-full h-px bg-white"></div>
                    </div>
                    <ul  className = {`flex flex-col items-start justify-start mt-4`}>
                        <li><Link href = "/about" scroll = {false} className = {`rounded-full text-h4 text-white`}>Parcours</Link></li>
                        <li className = {`mt-2`}><Link href = "/projects" scroll = {false} className = "rounded-full text-h4 text-white mt-6">Projets</Link></li>
                        <li className = {`mt-2`}><Link href = "/contact" scroll = {false} className = "text-h4 text-white mt-6">Contact</Link></li>
                    </ul>
                </div>

                <div className ={`w-full pl-nav pr-nav mt-12 transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-150' : 'translate-x-1/4 delay-0'}`}>
                    <div className = "text-hbody text-white w-min  opacity-70">
                        <span className = "text-nowrap font-light">Réseaux Sociaux</span>
                        <div className = "w-full h-px bg-white"></div>
                    </div>
                    <ul  className = "flex flex-col items-start justify-start mt-4">
                        <li className = {`mt-2`}><Link href = "https://github.com/AnasNEJMI" className = "text-h5 text-white mt-6">Github</Link></li>
                        <li className = {`mt-2`}><Link href = "https://dribbble.com/AansNEJMI" className = "text-h5 text-white mt-6">Dribbble</Link></li>
                    </ul>
                </div>

                <div className ={`w-full pl-nav pr-nav mt-12 transition-all ease-in-out-custom duration-700 will-change-transform ${isVerticalNavOpen? 'translate-x-0 delay-200' : 'translate-x-1/4 delay-0'}`}>
                    <div className = "text-body text-white w-min  opacity-70">
                        <span className = "text-nowrap font-light">Coordonnées</span>
                        <div className = "w-full h-px bg-white"></div>
                    </div>
                    <ul  className = "flex flex-col items-start justify-start mt-4">
                        <li><Link href = "/" className = {`rounded-full text-h6 text-white`}>anasnejmi@gmail.com</Link></li>
                        <li className = {`mt-2`}><Link href = "/" className = "rounded-full text-h6 text-white mt-6">0780126077</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VerticalNav