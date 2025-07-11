import useLocomotiveScroll from '@/components/locomotive_scroll';
import React, { useContext, useEffect } from 'react'

interface VerticalNavStateContextProps{
  isVerticalNavOpen : boolean,
  setIsVerticalNavOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const VerticalNavStateContext = React.createContext<undefined | VerticalNavStateContextProps>(undefined)

const VerticalNavStateProvider = ({ children } : {children : React.ReactNode}) => {
  const [isVerticalNavOpen, setIsVerticalNavOpen] = React.useState(false);
  
  return (
    <VerticalNavStateContext.Provider value = {{isVerticalNavOpen,setIsVerticalNavOpen }}>
        {children}
    </VerticalNavStateContext.Provider>
  )
}

export function useVerticalNavState(){
  let context = useContext(VerticalNavStateContext);

  if(context === undefined){
      throw new Error('useVerticalNavState must be used inside VerticalNavStateProvider');
  }else{  
      return context;
  }
}

export default VerticalNavStateProvider