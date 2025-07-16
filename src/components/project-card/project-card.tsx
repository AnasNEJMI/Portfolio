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
    imgSrc? : string,
}
const ProjectCard = ({className,href, title, description, imgSrc} : ProjectCardProps) => {

  return (
    <Link href={href} scroll ={false}>
        <Card 
            className='shadow-none border-none rounded-none'
        >
            <CardContent
                className={cn('relative overflow-hidden w-full p-0 before:absolute before:z-20 before:top-0 before:left-0 before:w-full before:aspect-[5/1] before:bg-zinc-200 after:absolute after:z-20 after:bottom-0 after:left-0 after:w-full after:aspect-[5/1] after:bg-zinc-200', className)}
            >
                {
                    imgSrc &&
                    <Image
                        className='project-image relative z-10 w-full aspect-square'
                        src={imgSrc}
                        width={500}
                        height={500}
                        alt={`${title}-project-img`}
                    >
                    </Image>
                }
                {
                    !imgSrc &&
                    <div className='project-image relative z-10 w-full aspect-square bg-black'>

                    </div>
                }
            </CardContent>
            <CardTitle className='font-secondary font-bold text-h4 mt-4'>{title}</CardTitle>
            <Separator className='bg-zinc-900 my-1'/>
            <CardDescription className='font-primary font-light text-zinc-900 text-body'>{description}</CardDescription>
        </Card>
    </Link>
  )
}

export default ProjectCard