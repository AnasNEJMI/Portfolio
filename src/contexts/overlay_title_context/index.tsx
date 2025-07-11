import React, { useContext } from 'react'

interface OverlayTitleContextProps{
  overlayTitle : string,
  setOverlayTitle : React.Dispatch<React.SetStateAction<string>>
}
const OverlayTitleContext = React.createContext<undefined | OverlayTitleContextProps>(undefined)

const OverlayTitleProvider = ({ children } : {children : React.ReactNode}) => {
  const [overlayTitle, setOverlayTitle] = React.useState("");

  return (
    <OverlayTitleContext.Provider value = {{overlayTitle,setOverlayTitle }}>
        {children}
    </OverlayTitleContext.Provider>
  )
}

export function useOverlayTitle(){
  let context = useContext(OverlayTitleContext);

  if(context === undefined){
      throw new Error('useOverlayTitle must be used inside OverlayTitleProvider');
  }else{  
      return context;
  }
}

export default OverlayTitleProvider