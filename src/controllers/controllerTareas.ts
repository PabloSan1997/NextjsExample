import { pool } from "@/db/db"
import { generarFecha } from "@/utilities/generarFecha";
import { v4 as uuid } from 'uuid';

export class ControllersTareas {

    async leerDatos(): Promise<TareaREs[]> {
        const data = await pool.connect();
        const leer = await data.query('SELECT * FROM tareas');
        const tareas = leer.rows;
        return tareas;
    }
    async agregarTarea(tarea: TareaReq): Promise<{ message: string }> {
        const data = await pool.connect();
        const id_tarea = uuid();
        const cad = Object.values(tarea);
        const fechaValor = generarFecha();
        const solicitud = [id_tarea, ...cad, fechaValor, false];
        const querySql = "INSERT INTO tareas(id_tareas, tarea, fecha, estado) VALUES($1, $2, $3, $4)";
        await data.query(querySql, solicitud);
        return { message: 'Se agrego tarea con exito' };
    }
    async borrarTarea(id_tarea: string) {
        const data = await pool.connect();
        const querySql = 'DELETE FROM tareas WHERE id_tareas = $1';
        await data.query(querySql, [id_tarea]);
        return { message: "Se borró tarea con exito" };
    }
    async editarTarea(tarea: TareaREs) {
        const fechaValor = generarFecha();
        const querySql = 'UPDATE tareas SET tarea=$1, estado=$2, fecha=$3 WHERE id_tareas=$4';
        const data = await pool.connect();
        await data.query(querySql, [tarea.tarea, tarea.estado, fechaValor, tarea.id_tareas]);
        return {message:'Se edito elemento con exito'};
    }
}