import React, { useRef } from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import { cn } from '../../lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'

interface ProjectCardProps{
    className? : string,
    href: string,
    title : string,
    description : string,
    src : string,
    width : number,
    height : number,
    color : string
}
const ProjectCard = ({className,href, title, description, src, width, height, color} : ProjectCardProps) => {

  return (
    <Link href={href} scroll ={false}>
        <Card 
            className='shadow-none border-none rounded-none'
        >
            <CardContent
                style={{clipPath : 'url(#project-card-clip)', backgroundColor : color}}
                className={cn('relative overflow-hidden w-full aspect-square flex items-center justify-center p-0 group bg-sky-400', className)}
            >
                
                <Image
                    className = {`project-image relative z-10 w-full aspect-[${width}/${height}] group-hover:scale-110 origin-center duration-200 ease-out transition-transform`}
                    src={src}
                    width={width}
                    height={height}
                    alt={`project ${title} banner`}
                >
                </Image>
            </CardContent>
            <div className='px-nav'>
                <CardTitle className='font-secondary font-bold text-h4 mt-4'>{title}</CardTitle>
                <Separator className='bg-zinc-900 my-1'/>
                <CardDescription className='font-primary font-light text-zinc-900 text-body'>{description}</CardDescription>
            </div>
        </Card>
    </Link>
  )
}

export default ProjectCard