import { useFirstLoad } from '@/contexts/first_load_context';
import { usePageTransition } from '@/contexts/transition_context';
import React, { Ref, useEffect, useLayoutEffect } from 'react'
import { useOverlayTitle } from '@/contexts/overlay_title_context';
import { ReactRef, useGSAP } from '@gsap/react';
import localFont from 'next/font/local';
import MagneticMenuIcon from '../magnetic-menu-icon';
import VerticalNav from '../vertical_nav';
import HorizontalNavMagneticLink from '../horizontal_nav_magnetic_link';
import gsap from 'gsap';
import logo from '@/../public/images/logo.png';
import useLocomotiveScroll from '../locomotive_scroll';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Overlay from '../home/overlay';
import LocomotiveScroll from 'locomotive-scroll';

interface PageWrapperProps{
    className? : string,
    isHomePage : boolean,
    links : {label: string, href : string}[];
    children : React.ReactNode,
}

const fontPrimary = localFont({
  src: '../../assets/fonts/font-primary.ttf',
  variable : '--font-primary'
});

const fontSecondary = localFont({
  src: '../../assets/fonts/font-secondary.woff2',
  variable : '--font-secondary'
});

gsap.registerPlugin(useGSAP);

const PageWrapper = ({links, children, isHomePage} : PageWrapperProps) => {
 let {scrollContainerRef} = useLocomotiveScroll();
  return (
    <main
      ref = {scrollContainerRef}
      className={`min-h-screen relative bg-white ${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      <Head>
        <title>
          Anas NEJMI - Développeur Full-Stack
        </title>
        <meta
          name="description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="keywords"
          content="développeur full-stack, react, vite, nextjs, PHP, Java, Laravel, TailwindCSS"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Anas NEJMI" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          property="og:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anasnejmi.com" />
        <meta
          property="og:image"
          content="/images/anasnejmi-og.webp"
        />
        <meta property="og:image:alt" content="Anas NEJMI" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="957" />
        <meta property="og:image:height" content="700" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anas NEJMI - Développeur Full-Stack"
        />
        <meta
          name="twitter:description"
          content="Développeur web full-stack passionné, authentique et rigoureux. Je conçois des applications web modernes, performantes et sur-mesure pour répondre aux besoins des entreprises."
        />
        <meta
          name="twitter:image"
          content="/images/anasnejmi-og.webp"
        />
        {/* <link rel="canonical" href="https://www.anasnejmi.com/about"/> */}
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <Overlay isHomePage = {isHomePage} className="fixed  top-0 left-0 z-[60] right-0"/>
    
      <header>
        <MagneticMenuIcon/>
        <VerticalNav/>
        
        <Link scroll= {false} href = "/" className = "h-16 flex items-center justify-center fixed top-0 left-0 mt-nav ml-nav mix-blend-difference z-50">
          <Image src = {logo} alt = "Portfolio logo" width = {80} height = {37} className="invert"/>
        </Link >

        <nav className="flex absolute top-0 right-0 z-20 h-16 justify-start md:justify-end p-nav">
          <ul  className = "hidden h-16 md:flex items-center gap-6 bg-white">
            {
              links.map((link, index) => (
                <HorizontalNavMagneticLink key={index} href = {link.href} text = {link.label}/>
              ))
            }
          </ul>
        </nav>
      </header>
      {children}
    </main>
  )
}

export default PageWrapper