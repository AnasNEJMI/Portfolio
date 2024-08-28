import React, { useContext } from 'react'

const FirstLoadContext = React.createContext(undefined)

const FirstLoadContextProvider = ({ children }) => {
  const [isOnFirstLoad, setIsOnFirstLoad] = React.useState(true);

  return (
    <FirstLoadContext.Provider value = {{isOnFirstLoad,setIsOnFirstLoad }}>
        {children}
    </FirstLoadContext.Provider>
  )
}

export function useFirstLoadContext(){
  let context = useContext(FirstLoadContext);

  if(context === undefined){
      throw new Error('useFirstLoadContext must be used inside FirstLoadContextProvider');
  }else{  
      return context;
  }
}

export default FirstLoadContextProvider