

export async function removeTarea(id_tarea:string):Promise<{message:string}>{
    const solicitud = {
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        }
    }
    const data = await fetch(`http://localhost:3000/api/tareas?id_tarea=${id_tarea}`, solicitud);
    const message = await data.json();
    if(!data.ok){
        throw message.message;
    }
    return message;
}