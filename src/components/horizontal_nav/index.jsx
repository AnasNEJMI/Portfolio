import Link from 'next/link'
import React from 'react';
import Image from 'next/image';

const HorizontalNav = () => {
  return (
    <nav className="flex w-full h-16 justify-start md:justify-end relative p-nav z-20">
        <ul  className = "hidden h-16 md:flex items-center gap-6">
            <li><Link href = "/about" className = "py-4 px-7 rounded-full text-body font-semibold">À Propos</Link></li>
            <li><Link href = "/projects" className = "py-4 px-7 rounded-full text-body font-semibold">Projets</Link></li>
        </ul>
    </nav>
  )
}

export default HorizontalNav