import Image, { StaticImageData } from 'next/image'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'

interface LaptopDisplayProps{
    className? : string,
    title : string,
    imgSrc : StaticImageData,
}

const LaptopDisplay : ForwardRefRenderFunction<HTMLDivElement, LaptopDisplayProps> = ({className, title, imgSrc}, ref) => {
  return (
    <div ref={ref} className='w-full flex flex-col justify-center items-center px-nav'>
        <div className="relative border-gray-800 dark:border-jet-200 bg-gray-800 border-[6px] rounded-t-xl aspect-[5/3] w-full max-w-4xl">
            <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                {/* <Image fill = {true} src={img} className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt={`Project ${title} - Big Screen Display`}></Image> */}
                <Image width={1024} height={619} src={imgSrc} className="w-full aspect-[5/3]" alt={`Project ${title} - Big Screen Display`}></Image>
            </div>
        </div>
        <div style={{background : "linear-gradient(to right,rgb(96, 96, 96) 0%, rgb(96, 96, 96) 2%, rgb(215, 215, 215) 10%, rgb(136, 136, 136) 20%, rgb(136, 136, 136) 30%, rgb(136, 136, 136) 70%, rgb(136, 136, 136) 75%, rgb(96, 96, 96) 85%, rgb(215, 215, 215) 90%, rgb(96, 96, 96) 98%, rgb(96, 96, 96) 100%) "}}
            className="relative rounded-b-[150px] rounded-t-3xl  w-full max-w-4xl scale-[1.1] aspect-[35/1] overflow-hidden">
            <div style={{background : "linear-gradient(to top, rgb(96, 96, 96) 0%,  rgb(96, 96, 96) 15%, rgb(215, 215, 215) 30%, rgb(215, 215, 215, 0) 100%)"}} className='w-full h-full mix-blend-multiply'></div>
            <div style={{boxShadow : 'inset 3px 2px 5px 1px rgba(0,0,0,0.5)'}} className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-jet-900"></div>
        </div>
    </div>
  )
}

export default forwardRef(LaptopDisplay)