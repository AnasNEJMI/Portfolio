import React from 'react'
import MagneticMenuIcon from '../magnetic-menu-icon';
import VerticalNav from '../vertical_nav';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/images/logo.png';
import HorizontalNav from '../horizontal_nav';

interface HeaderProps{
    links : {label: string, href : string}[];
}

const Header = ({links} : HeaderProps) => {
  return (
    <header>
        <Link scroll= {false} href = "/" className = "h-16 flex items-center justify-center fixed top-0 left-0 mt-nav ml-nav mix-blend-difference z-50">
            <Image src = {logo} alt = "Portfolio logo" width = {80} height = {37} className="invert"/>
        </Link >
        
        <HorizontalNav
            links={links}
            className='absolute top-0 right-0 z-20 h-16'
        />

        <MagneticMenuIcon/>
        <VerticalNav/>  
    </header>
  )
}

export default Header