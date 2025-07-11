import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

interface BigScreenDisplayProps{
    className? : string,
    title : string,
    imgSrc : StaticImageData,
}

const BigScreenDisplay : ForwardRefRenderFunction<HTMLDivElement, BigScreenDisplayProps> = ({className, title, imgSrc}, ref) => {
  return (
    <div ref={ref} className={cn('w-full flex items-center justify-center flex-col px-nav', className)}>
        <div className='w-full max-w-5xl aspect-[5/3] rounded-lg  bg-zinc-600 p-[6px] relative'>
            <div className='h-full w-full bg-white relative overflow-hidden'>
                <Image 
                    alt={`Project ${title} - Big Screen Display`}
                    width={1024}
                    height={615}
                    src={imgSrc}
                    className='w-full aspect-[5/3]'
                >
                    
                </Image>
            </div>
        </div>
        <div style={{background : "linear-gradient(to bottom, rgb(56, 56, 56) 0%, rgb(136, 136, 136) 30%, rgb(136, 136, 136) 100%)"}} className='w-1/5 aspect-[2/2] bg-zinc-300'>
        </div>
        <div style={{background : "linear-gradient(to top, rgb(56, 56, 56) 0%, rgb(136, 136, 136) 30%, rgb(175, 175, 175) 100%)"}} className='w-1/5 aspect-[10/1] relative'>
            <div style={{background : "linear-gradient(to right, rgb(215, 215, 215) 0%, rgb(96, 96, 96) 10%, rgb(136, 136, 136) 20%, rgb(136, 136, 136) 30%, rgb(136, 136, 136) 70%, rgb(136, 136, 136) 80%, rgb(96, 96, 96) 90%, rgb(215, 215, 215) 100%) "}}  className='absolute -left-[10px] w-[calc(100%+20px)] h-4/5 bottom-0 rounded-tl-lg rounded-bl-sm rounded-tr-lg rounded-br-sm'></div>
            <div className='absolute z-0 shadow-lg -left-[10px] w-[calc(100%+20px)] h-1/5 bottom-0 rounded-tl-lg rounded-bl-sm rounded-tr-lg rounded-br-sm'></div>
        </div>
    </div>
  )
}

export default forwardRef(BigScreenDisplay)