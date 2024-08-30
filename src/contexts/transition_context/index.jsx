import React, { useContext } from 'react'
import gsap from 'gsap';

const PageTransitionContext = React.createContext(undefined)

const PageTransitionProvider = ({ children }) => {
  const [exitTimeline, setExitTimeline] = React.useState(() => gsap.timeline({ paused: true }));

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