import { memo } from 'react'

interface ParisSVGProps{
    className? : string,
}
const ParisSVG=  memo(function ParisSVG({className} : ParisSVGProps){
  return (
    <div className='paris-svg relative translate-y-0'>
        <h2 className='absolute flex items-start justify-start flex-col h-full w-full mix-blend-difference text-jet-200 -left-[25%] top-[0%] md:-left-[25%] md:top-0 lg:-left-[20%] lg:top-[3%]'>
        <span className='font-primary font-bold text-body md:text-h6 text-nowrap animate-left-to-right animate-duration-4000'>Basé à</span>
        <span className='font-primary text-body md:text-h6 animate-left-to-right animate-duration-4000 -animate-delay-1000'>Paris</span>
        </h2>
        <svg className='h-20 md:h-24 lg:h-28 aspect-square z-0' viewBox='0 0 100 100'>
            <g stroke = "rgb(22,22,22)" className='animate-squish-squash animate-duration-2000 origin-bottom'>
                <g>
                <path d='M47 10 Q47 4 50 4 Q53 4 53 10 L47 10' fill='transparent'></path>
                <rect x={49} y={0} width={2} height={4} rx={1} ry={1} fill='transparent'></rect>
                </g>
                <path d='M20 96 Q49 60 48 10 L52 10 Q52 60 80 96 L65 96 Q65 80 50 80 Q35 80 35 96 L20 96' fill='transparent'></path>
                <path d='M33 66 L67 66 L64 70 L36 70 L33 66' fill='transparent'></path>
                <path d='M40 46 L60 46 L57 50 L43 50 L40 46' fill='transparent'></path>
                <path d='M44 66 Q47 56 47 55 L53 55 Q53 56 56 66' fill='transparent'></path>
                <path d='M66 90 Q64 78 50 78 Q36 78 34 90' fill='transparent'></path>
            </g>
            
            <path d='M10 96 L90 96 Q95 96 95 98 Q95 100 90 100 L10 100 Q5 100 5 98 Q5 96 10 96' fill='black'></path>

            <path className='animate-left-to-right animate-duration-4000' d='M12 29 L28 29 Q30 29 30 30 Q30 31 28 31 L12 31 Q10 31 10 30 Q10 29 12 29'></path>
            <path className='animate-left-to-right animate-duration-3000 -animate-delay-500' d='M62 9 L83 9 Q85 9 85 10 Q85 11 83 11 L62 11 Q60 11 60 10 Q60 9 62 9'></path>
            <path className='animate-left-to-right animate-duration-3000 -animate-delay-1000' d='M72 49 L78 49 Q80 49 80 50 Q80 51 78 51 L72 51 Q70 51 70 50 Q70 49 72 49'></path>
        </svg>
    </div>
  )
})

export default ParisSVG