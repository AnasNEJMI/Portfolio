import { highlights } from '@/utils/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const HomeHighlights = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {

    gsap.to('.slider-top', {xPercent : 10, scrollTrigger : {
      trigger : containerRef.current,
      start : 'top bottom',
      end : 'bottom top',
      scrub : true,
    }})
    gsap.to('.slider-center', {xPercent : -20, scrollTrigger : {
      trigger : containerRef.current,
      start : 'top bottom',
      end : 'bottom top',
      scrub : true,
    }})
    gsap.to('.slider-bottom', {xPercent : 10, scrollTrigger : {
      trigger : containerRef.current,
      start : 'top bottom',
      end : 'bottom top',
      scrub : true,
    }})
  }, {scope : containerRef})
  return (
    <section ref={containerRef} className='section relative w-full bg-white my-28 md:my-40'>
      <div className='relative w-full bg-green-500 aspect-square md:aspect-[4/3] lg:aspect-[5/2] flex items-center justify-center overflow-hidden'>
        <div className='wrapper rotate-[22.5deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[180%] aspect-[16/12] flex flex-col items-center justify-center gap-4'>
          <div className='slider-top h-1/3 flex aspect-[16/3] gap-4 -translate-x-[10%]'>
            {
              highlights['top'].map((el, index) => (
                <div key={index} className='aspect-[4/3] bg-white rounded-md shadow-lg'>
                  {
                    el !== '' &&
                    <video className={`w-full aspect-[${600}/${400}] rounded-md`} width={600} height={400} muted autoPlay loop playsInline>
                      <source src={el} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  }
                </div>
              ))
            }
          </div>
          <div className='slider-center h-1/3 flex aspect-[16/3] gap-4 translate-x-[10%]'>
            {
              highlights['center'].map((el, index) => (
                <div key={index} className=' aspect-[4/3] bg-white rounded-md shadow-lg'>
                  {
                    el !== '' &&
                    <video className={`w-full aspect-[${600}/${400}] rounded-md`} width={600} height={400} muted autoPlay loop playsInline>
                      <source src={el} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  }
                </div>
              ))
            }
          </div>
          <div className='slider-bottom h-1/3 flex aspect-[16/3] gap-4 -translate-x-[10%]'>
            {
              highlights['bottom'].map((el, index) => (
                <div key={index} className='h-full aspect-[4/3] bg-white rounded-md shadow-lg'>
                  {
                    el !== '' &&
                    <video className={`w-full aspect-[${600}/${400}] rounded-md`} width={600} height={400} muted autoPlay loop playsInline>
                      <source src={el} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHighlights