type TareaREs = {
    id_tareas:string,
    tarea:string,
    fecha:string,
    estado:boolean
}
type TareaReq = {
    tarea:string
}

type TareaEdit = {
    id_tareas:string,
    tarea:string,
    estado:boolean
}

type Contexto = {
    tareas: TareaREs[],
    actualizar:boolean,
    actua:()=>void
}