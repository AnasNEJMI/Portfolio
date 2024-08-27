import React, { useContext } from 'react'
import gsap from 'gsap';

const TransitionContext = React.createContext(undefined)

const TransitionContextProvider = ({ children }) => {
  const [timeline, setTimeline] = React.useState(() => gsap.timeline({ paused: true }));

  return (
    <TransitionContext.Provider value = {{ timeline, setTimeline }}>
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