import React, { useContext, useState } from 'react'
import gsap from 'gsap';

interface PageTransitionContextProps{
  exitTimeline : gsap.core.Timeline,
  setExitTimeline : React.Dispatch<React.SetStateAction<gsap.core.Timeline>>
}

const PageTransitionContext = React.createContext<undefined | PageTransitionContextProps>(undefined)


const PageTransitionProvider = ({ children } : {children : React.ReactNode}) => {
  const [exitTimeline, setExitTimeline] = useState(() => gsap.timeline({ paused: true }));

  return (
    <PageTransitionContext.Provider value = {{exitTimeline,setExitTimeline }}>
        {children}
    </PageTransitionContext.Provider>
  )
}

export function usePageTransition(){
  let context = useContext(PageTransitionContext);

  if(context === undefined){
      throw new Error('usePageTransition must be used inside PageTransitionProvider');
  }else{  
      return context;
  }
}

export default PageTransitionProvider