import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

interface PhoneDisplayProps{
    className? : string,
    type : 'image' | 'video',
    title : string,
    src : string,
    width : number,
    height : number
}
const PhoneDisplay : ForwardRefRenderFunction<HTMLDivElement, PhoneDisplayProps> = ({className, type, title, src, width, height}, ref) => {
  return (
    <div ref={ref} className={cn(`flex-1 relative w-full aspect-[${width}/${height}] max-w-sm rounded-2xl border-4 lg:border-[6px] border-black bg-white overflow-visible`, className)}>
        <div className="absolute z-50 -right-2 top-[15%] border-1 md:border-2 lg:border-4 border-black h-[8%] rounded-md"></div>
        <div className="absolute z-50 -right-2 top-[34%] border-1 md:border-2 lg:border-4 border-black h-[18%] rounded-md"></div>
        {
          src && type === 'video' &&
            <video className={`w-full aspect-[${width}/${height}] rounded-2xl`} width={width} height={height} muted autoPlay loop playsInline>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
        {
          src && type === 'image' &&
          <Image
            src={src}
            width={width}
            height={height}
            alt={`Project ${title} - Big Screen Display`}
            className='w-full rounded-2xl'
          ></Image>
        }
        
    </div>
  )
}

export default forwardRef(PhoneDisplay)