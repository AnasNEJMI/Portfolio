import React, { useContext } from 'react'

const OverlayTitleContext = React.createContext(undefined)

const OverlayTitleContextProvider = ({ children }) => {
  const [overlayTitle, setOverlayTitle] = React.useState("");

  return (
    <OverlayTitleContext.Provider value = {{overlayTitle,setOverlayTitle }}>
        {children}
    </OverlayTitleContext.Provider>
  )
}

export function useOverlayTitleContext(){
  let context = useContext(OverlayTitleContext);

  if(context === undefined){
      throw new Error('useOverlayTitleContext must be used inside OverlayTitleContextProvider');
  }else{  
      return context;
  }
}

export default OverlayTitleContextProvider