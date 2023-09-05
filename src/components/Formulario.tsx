

import { UseContext } from '@/context/taskContext';
import { addTarea } from '@/utilities/addTarea';
import React from 'react'

export  function Formulario() {
    const [texto, setTexto] = React.useState('');
    const {actua} = UseContext();
    const subir = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        addTarea(texto)
        .then(elemento=>{
            alert(elemento.message);
            setTexto('');
            actua();
        })
        .catch(error=>{
            console.log(error);
        });
    }
    
  return (
    <form onSubmit={subir}>
        <h2>Insertar TArea</h2>
        <div className="fila">
            <label htmlFor="entrada">Nueva tarea</label>
            <input type="text"  onChange={e=>setTexto(e.target.value)} value={texto}/>
        </div>
        <button type='submit'>Agregar</button>
        <button type='button'>Cancelar</button>
    </form>
  )
}
