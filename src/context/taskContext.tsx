import { leerDatos } from '@/utilities/leerDatos';
import React from 'react'

const Context = React.createContext({});


export function TaskContext({children}:{children:JSX.Element|JSX.Element[]}) {
  const [tareas, setTareas] = React.useState<TareaREs[]>([]);
  const [actualizar, setActualizar] = React.useState(false);

  const actua = () => {
    setActualizar(!actualizar);
  }

  React.useEffect(()=>{
   leerDatos()
   .then(data=>setTareas(data))
   .catch(error=>{
    setTareas([]);
    alert(error);
   });
  },[actualizar]);

  
  return (
    <Context.Provider value={{
        tareas,
        actualizar,
        actua
    }}>
        {children}
    </Context.Provider>
  )
}


export const UseContext =()=> React.useContext(Context) as Contexto;