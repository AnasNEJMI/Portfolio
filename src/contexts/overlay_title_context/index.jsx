import React, { useContext } from 'react'

const OverlayTitleContext = React.createContext(undefined)

const OverlayTitleProvider = ({ children }) => {
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