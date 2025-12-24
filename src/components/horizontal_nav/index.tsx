import Link from 'next/link'
import React from 'react';
import HorizontalNavMagneticLink from '../horizontal_nav_magnetic_link';
import { cn } from '@/lib/utils';

interface HorizontalNavProps{
  className ?: String
  links : {label: string, href : string}[];

}
const HorizontalNav = ({className, links} : HorizontalNavProps) => {
  return (
    <nav className={cn('flex justify-start md:justify-end p-nav', className)}>
        <ul  className = "hidden h-16 md:flex items-center gap-6 bg-white">
            {
            links.map((link, index) => (
                <HorizontalNavMagneticLink key={index} href = {link.href} text = {link.label}/>
            ))
            }
        </ul>
    </nav>
  )
}

export default HorizontalNav