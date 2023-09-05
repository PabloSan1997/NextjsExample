import { UseContext } from '@/context/taskContext';
import {useRouter} from 'next/router';
import { Fila } from './Fila';


export function Contenedor(){
    const data = useRouter();
    const {tareas} = UseContext();
    const mostrar = tareas.filter(elemento=>{
        if(data.pathname!='/'){
            return elemento.estado;
        }
        return true;
    });
    
    return(
        <div>
            {mostrar.map(elemento=>(
                <Fila key={elemento.id_tareas} {...elemento}/>
            ))}
        </div>
    );
}