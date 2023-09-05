

export async function addTarea(tarea:string):Promise<{message:string}>{
    const solicitud = {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({tarea})
    }
    const mandar = await fetch('http://localhost:3000/api/tareas', solicitud);
    const mensaje = await mandar.json();
    if(!mandar.ok){
        throw mensaje.message;
    }
    return mensaje;
}