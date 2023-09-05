

export function generarFecha():string{
    const tiempo = new Date();
    const tiempoString:string = Date.parse(tiempo.toISOString()).toString();
    return tiempoString;
}