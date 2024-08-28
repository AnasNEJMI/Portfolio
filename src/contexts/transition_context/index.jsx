import React, { useContext } from 'react'
import gsap from 'gsap';

const TransitionContext = React.createContext(undefined)

const TransitionContextProvider = ({ children }) => {
  const [exitTimeline, setExitTimeline] = React.useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider value = {{exitTimeline,setExitTimeline }}>
        {children}
    </TransitionContext.Provider>
  )
}

export function useTransitionContext(){
  let context = useContext(TransitionContext);

  if(context === undefined){
      throw new Error('useTransitionContext must be used inside TransitionContextProvider');
  }else{  
      return context;
  }
}

export default TransitionContextProvider