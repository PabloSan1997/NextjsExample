

export function configurarFecha(fecha:string){
    const numero = Number(fecha);
    const date = new Date(numero);
    const texto = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    return texto;
}