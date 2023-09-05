
export async function editEstado(data:TareaEdit) {
    
    data = {
        ...data,
        estado:!data.estado
    }

    const solicitud = {
        method:'PATCH',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    
    const mandar = await fetch('http://localhost:3000/api/tareas', solicitud);
    const message = await mandar.json();
    if(!mandar.ok){
        throw message.message;
    }
    return message;
}