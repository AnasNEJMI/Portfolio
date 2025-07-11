import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

interface PhoneDisplayProps{
    className? : string,
    title : string,
    imgSrc : StaticImageData,
}
const PhoneDisplay : ForwardRefRenderFunction<HTMLDivElement, PhoneDisplayProps> = ({className, title, imgSrc}, ref) => {
  return (
    <div ref={ref} className={cn("flex-1 w-full aspect-[25/52] max-w-sm relative border-4 lg:border-[6px] bg-white border-black rounded-2xl", className)}>
            {/* notch  */}
        <div className="border z-50 border-black bg-black w-[45%] aspect-[6/1] absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl"/>
        {/* right top buttons  */}
        <div className="absolute z-50 -right-2 top-[15%] border-1 md:border-2 lg:border-4 border-black h-[8%] rounded-md"></div>
        <div className="absolute z-50 -right-2 top-[34%] border-1 md:border-2 lg:border-4 border-black h-[18%] rounded-md"></div>
        <div className='absolute z-40 w-full aspect-[25/52] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Image
                src={imgSrc}
                width={384}
                height={799}
                alt={`Project ${title} - Big Screen Display`}
                className='w-full h-full'
            ></Image>
        </div>
    </div>
  )
}

export default forwardRef(PhoneDisplay)