import React, { useContext } from 'react'

const VerticalNavStateContext = React.createContext(undefined)

const VerticalNavStateProvider = ({ children }) => {
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