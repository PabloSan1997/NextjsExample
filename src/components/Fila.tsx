


import { configurarFecha } from '@/utilities/configurarFecha'
import React from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { removeTarea } from '@/utilities/removeTarea';
import { UseContext } from '@/context/taskContext';
import { editEstado } from '@/utilities/editEstado';

export function Fila({ tarea, fecha, id_tareas, estado }: TareaREs) {
  const { actua } = UseContext();
  const data = {
    id_tareas,
    tarea,
    estado
  }
  const remover = () => {
    removeTarea(id_tareas)
      .then(data => {
        alert(data.message);
        actua();
      })
      .catch(error => {
        console.log(error);
      });
  }
  const editar = () => {
    editEstado(data)
      .then(data => {
        console.log(data.message);
        actua();
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div>
      <p>{tarea}</p>
      <span>{configurarFecha(fecha)}</span>
      <CheckIcon
        onClick={editar}
        className='w-5 cursor-pointer' />
      <XMarkIcon
        onClick={remover}
        className='w-5 cursor-pointer'
      />
    </div>
  )
}
