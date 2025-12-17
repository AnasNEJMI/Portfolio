import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const HeroLottieAnimation = () => {
  return (
    <DotLottieReact
        src="images/avatar-anim-1.lottie"
        loop
        autoplay
        className='w-full aspect-[6/4]'
    />
  )
}

export default HeroLottieAnimation