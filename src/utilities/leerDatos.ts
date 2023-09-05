

export async function leerDatos():Promise<TareaREs[]> {
    const data = await fetch('http://localhost:3000/api/tareas');
    const tareas = await data.json();
    if(!data.ok){
        throw tareas.message;
    }
    return tareas;
}