
export class producto {
    id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string; 
    precio: number;

    constructor (nombre: string, categoria: string, ubicacion:string, precio:number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}