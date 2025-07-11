import React, { useContext } from 'react'

interface FirstLoadContextProps{
  isOnFirstLoad : boolean,
  setIsOnFirstLoad : React.Dispatch<React.SetStateAction<boolean>>
}
const FirstLoadContext = React.createContext<undefined | FirstLoadContextProps>(undefined)

const FirstLoadProvider = ({ children } : {children : React.ReactNode}) => {
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