import React from 'react'

const Context = React.createContext({});


export function TaskContext({children}:{children:JSX.Element|JSX.Element[]}) {
  return (
    <Context.Provider value={{
        
    }}>
        {children}
    </Context.Provider>
  )
}


export const UseContext =()=> React.useContext(Context);