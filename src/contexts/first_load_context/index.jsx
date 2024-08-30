import React, { useContext } from 'react'

const FirstLoadContext = React.createContext(undefined)

const FirstLoadProvider = ({ children }) => {
  const [isOnFirstLoad, setIsOnFirstLoad] = React.useState(true);

  return (
    <FirstLoadContext.Provider value = {{isOnFirstLoad,setIsOnFirstLoad }}>
        {children}
    </FirstLoadContext.Provider>
  )
}

export function useFirstLoad(){
  let context = useContext(FirstLoadContext);

  if(context === undefined){
      throw new Error('useFirstLoad must be used inside FirstLoadProvider');
  }else{  
      return context;
  }
}

export default FirstLoadProvider