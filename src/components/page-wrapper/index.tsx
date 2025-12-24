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
import useLocomotiveScroll from '../locomotive_scroll';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Overlay from '../home/overlay';
import LocomotiveScroll from 'locomotive-scroll';
import Header from '../header';
import Metadata from '../metadata';

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
      <Metadata/>
      <Overlay isHomePage = {isHomePage} className="fixed  top-0 left-0 z-[60] right-0"/>
      <Header links={links}/>
      {children}
    </main>
  )
}

export default PageWrapper